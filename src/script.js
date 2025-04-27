
document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const fields = ['Name', 'PhoneNumber', 'Email', 'Address'].map(id => document.getElementById(id).value);
    const row = `<tr>${fields.map(f => `<td>${f}</td>`).join('')}</tr>`;
    document.getElementById('contact-list').insertAdjacentHTML('beforeend', row);
    e.target.reset();
  });
  

  document.getElementById('task-form').addEventListener('submit', e => {
    e.preventDefault();
    const input = document.getElementById('task-input');
    const li = document.createElement('li');
    li.textContent = input.value.trim();
    if (!li.textContent) return;
  
    li.onclick = () => li.classList.toggle('done');
    li.oncontextmenu = e => (e.preventDefault(), li.remove());
  
    document.getElementById('task-list').appendChild(li);
    input.value = '';
  });
  