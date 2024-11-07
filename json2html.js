// json2html.js
export default function json2html(data) {
  // Extract unique keys from the data for table headers
  const headers = [...new Set(data.flatMap(Object.keys))];

  // Start building the HTML table string with a data-user attribute
  let html = `<table data-user="b.akshithreddy130804@gmail.com">`;
  html += `<thead><tr>${headers
    .map((header) => `<th>${header}</th>`)
    .join("")}</tr></thead>`;
  html += `<tbody>`;

  // Build each row based on the headers
  data.forEach((row) => {
    html += `<tr>${headers
      .map((header) => `<td>${row[header] || ""}</td>`)
      .join("")}</tr>`;
  });

  html += `</tbody></table>`;
  return html;
}
