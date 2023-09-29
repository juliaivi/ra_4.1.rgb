import React, {useState} from "react";

function hexToRgb(hex) { // преобразования RGB в шестнадцатеричный формат
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);// exec()экземпляров RegExpвыполняет поиск с помощью этого регулярного выражения совпадения в указанной строке и возвращает массив результатов или null
    return result
    ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`     
    : null;
  }

export default function Converter() {
    const [color, setColor] = useState('#34495e');
    const [value, setValue] = useState(color);
    const [rgbContext, setRgbContext] = useState(hexToRgb(value));

    function hadlerChange(e) {
        setValue(e.target.value);
        const rgb = hexToRgb(e.target.value);
        if (rgb !== null  && e.target.value[0] === '#' && e.target.value.length === 7 ) {
            setRgbContext(rgb);
            setColor(e.target.value);
        } else if(e.target.value.length > 7 || e.target.value[0] !== '#' || e.target.value.length < 7) {
            setColor('#ff0000');
            setRgbContext('ошибка');
        }
    }

    return (
        <div className="converter" style={{backgroundColor:color}}>
            <form className="converter__form">
                <input className="converter__input" value={value}  onChange={hadlerChange}/>
                <label className="converter__label" htmlFor="rgb">{rgbContext}</label>
            </form>
        </div>
    )
}
