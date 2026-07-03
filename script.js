const keyPrefix = 'coens-cuts-v2-';
function pageId(){ return document.body.dataset.page || location.pathname; }
function loadEdits(){ document.querySelectorAll('[data-edit]').forEach((el,i)=>{ const k=keyPrefix+pageId()+'-'+i; const v=localStorage.getItem(k); if(v!==null) el.innerHTML=v; }); }
function setEditMode(on){ document.body.classList.toggle('editable-on', on); document.querySelectorAll('[data-edit]').forEach(el=>el.contentEditable=on); const b=document.getElementById('editButton'); if(b) b.textContent=on?'Save Changes':'Edit Page'; if(!on){ document.querySelectorAll('[data-edit]').forEach((el,i)=>localStorage.setItem(keyPrefix+pageId()+'-'+i,el.innerHTML)); }}
window.addEventListener('DOMContentLoaded',()=>{ loadEdits(); let editing=false; const b=document.getElementById('editButton'); if(b) b.onclick=()=>{ editing=!editing; setEditMode(editing); }; });


// Contact page SMS form
const smsForm = document.getElementById('smsContactForm');
if (smsForm) {
  smsForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = smsForm.elements['name']?.value || '';
    const email = smsForm.elements['email']?.value || '';
    const service = smsForm.elements['service']?.value || '';
    const message = smsForm.elements['message']?.value || '';

    const text = `New Coen's Cuts quote request

Name: ${name}
Email: ${email}
Service: ${service}
Message: ${message}`;
    window.location.href = `sms:+14405068903&body=${encodeURIComponent(text)}`;
  });
}
