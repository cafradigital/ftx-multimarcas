import { FC, useState } from "react";
import { IDropDownProps } from "./DropDown.interface";
import { ContainerDropDown, ContainerInformation, HeaderDropDown, ContainerImg } from "./DropDown.styled";
import ImgArrowPointerBottom from '../../assets/img/ImgArrowPointerBottom.svg';

export const DropDown: FC<IDropDownProps> = ({ title, description }) => {
    
    const [ toogleDropDown, setToogleDropDown ] = useState(false);

    return (
        <ContainerDropDown toogleDropDown={toogleDropDown}>
            <HeaderDropDown toogleDropDown={toogleDropDown} onClick={() => setToogleDropDown(!toogleDropDown)} >
                <ContainerImg>
                    <img src={ImgArrowPointerBottom} alt="" />
                </ContainerImg>
                <h2>{title}</h2>
            </HeaderDropDown>
            <ContainerInformation toogleDropDown={toogleDropDown} >
                <p>{description}</p>
            </ContainerInformation>
        </ContainerDropDown>
    )
};