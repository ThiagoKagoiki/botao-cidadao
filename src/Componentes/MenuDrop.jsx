import React, { useState } from "react";

export const MenuDrop = ({position, setPosition}) => {


    const handleOption = (e) => {
        setPosition(e.target.value)
        console.log('Valor selecionado:', e.target.value);
    }

    return(
        <div>
            <label htmlFor="">Escolha uma opção</label>
            <select name="" id="select-position" value={position} onChange={handleOption}>
                <option value="">Selecione</option>
                <option value="cidadao">Cidadão</option>
                <option value="prefeitura">Prefeitura</option>
            </select>
        </div>
    )
}