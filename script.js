const issuer = 'GD473SCIWAE7FDLBR4VZ43LRR7UP6PXLS6OIMSWINEPP2L3W5FN6CJMC';
document.getElementById('copyIssuer').addEventListener('click', async () => {
  const button = document.getElementById('copyIssuer');
  try { await navigator.clipboard.writeText(issuer); button.textContent = 'Copied'; }
  catch { button.textContent = 'Copy unavailable'; }
  setTimeout(() => button.textContent = 'Copy issuer', 1800);
});
