const keyPrefix = 'coens-cuts-v2-';
function pageId(){ return document.body.dataset.page || location.pathname; }
function loadEdits(){ document.querySelectorAll('[data-edit]').forEach((el,i)=>{ const k=keyPrefix+pageId()+'-'+i; const v=localStorage.getItem(k); if(v!==null) el.innerHTML=v; }); }
function setEditMode(on){ document.body.classList.toggle('editable-on', on); document.querySelectorAll('[data-edit]').forEach(el=>el.contentEditable=on); const b=document.getElementById('editButton'); if(b) b.textContent=on?'Save Changes':'Edit Page'; if(!on){ document.querySelectorAll('[data-edit]').forEach((el,i)=>localStorage.setItem(keyPrefix+pageId()+'-'+i,el.innerHTML)); }}
window.addEventListener('DOMContentLoaded',()=>{ loadEdits(); let editing=false; const b=document.getElementById('editButton'); if(b) b.onclick=()=>{ editing=!editing; setEditMode(editing); }; });
