import React, { useState } from "react";

export const MenuDropCadastro = ({position, setPosition}) => {


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
            </select>
        </div>
    )
}