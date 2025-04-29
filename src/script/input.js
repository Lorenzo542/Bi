document.getElementById('file-input').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        let text = e.target.result;
        const data = parseCSVWithQuotedNewlines(text);
        console.log(data);
    };
    
    reader.readAsText(file);
});

function parseCSVWithQuotedNewlines(csvText) {
    // First, let's parse the entire CSV properly, including headers
    const rows = [];
    let currentRow = [];
    let currentField = '';
    let inQuotes = false;
    
    // Process character by character
    for (let i = 0; i < csvText.length; i++) {
        const char = csvText[i];
        const nextChar = i < csvText.length - 1 ? csvText[i + 1] : null;
        
        // Handle quotes
        if (char === '"') {
            if (nextChar === '"') {
                // Escaped quote (double quote)
                currentField += '"';
                i++; // Skip the next quote
            } else {
                // Toggle quote state
                inQuotes = !inQuotes;
            }
        }
        // Handle commas - field separators if not in quotes
        else if (char === ',' && !inQuotes) {
            currentRow.push(currentField);
            currentField = '';
        }
        // Handle newlines - row separators if not in quotes
        else if ((char === '\n' || (char === '\r' && nextChar === '\n')) && !inQuotes) {
            currentRow.push(currentField);
            rows.push(currentRow);
            currentRow = [];
            currentField = '';
            
            // Skip the \n if we just processed \r
            if (char === '\r') {
                i++;
            }
        }
        // Handle all other characters
        else {
            currentField += char;
        }
    }
    
    // Add the last field and row if needed
    if (currentField !== '' || currentRow.length > 0) {
        currentRow.push(currentField);
        rows.push(currentRow);
    }
    
    // Filter out empty rows
    const nonEmptyRows = rows.filter(row => row.length > 0 && row.some(field => field.trim() !== ''));
    
    if (nonEmptyRows.length === 0) return [];
    
    // Extract headers and data rows
    const headers = nonEmptyRows[0].map(header => header.trim());
    const results = [];
    
    // Convert each data row to an object
    for (let i = 1; i < nonEmptyRows.length; i++) {
        const values = nonEmptyRows[i];
        const entry = {};
        
        headers.forEach((header, index) => {
            entry[header] = index < values.length ? values[index].trim() : '';
        });
        
        results.push(entry);
    }
    
    console.log( results);
}       