import React from 'react';
import './DragnDrop.sass';

function Dragndrop () {
    return (
     <div id="drop-area">
        <form class="drop-area__my-form">
          <p>Перетащите нужные изображения в выделенную область</p>
          <input type="file" id="drop-area__fileElem" multiple accept="image/*" onchange="handleFiles(this.files)"/>
          <label class="button" for="fileElem">Загрузить</label>
        </form>
      </div>
    );
}

export default Dragndrop;