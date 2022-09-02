const items = document.querySelectorAll('.item');
const placeholders = document.querySelectorAll('.placeholder');

for (const item of items) {
   item.draggable = true;
   item.addEventListener('dragstart', dragstart);
   item.addEventListener('dragend', dragend);

   for (const placeholder of placeholders) {
      placeholder.addEventListener('dragover', dragover);
      placeholder.addEventListener('dragenter', dragenter);
      placeholder.addEventListener('dragleave', dragleave);
      placeholder.addEventListener('drop', dragdrop);
   }

   function dragstart(evt) {
      evt.target.classList.add('hold');
      evt.target.classList.add('target');
      setTimeout(() => evt.target.classList.add('hide'), 0);
   }
   function dragend(evt) {
      evt.target.classList.remove('hold', 'hide');
   }

   function dragover(evt) {
      evt.preventDefault()
   }
   function dragenter(evt) {
      evt.target.classList.add('hovered');
   }
   function dragleave(evt) {
      evt.target.classList.remove('hovered');
   }
   function dragdrop(evt) {
      evt.target.classList.remove('hovered');
      if (item.classList.contains('target')) {
         evt.target.append(item);
         item.classList.remove('target')
      }
   }
}