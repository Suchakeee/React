import { ContainerNameapp } from "../Component.styled";

export default function nameApp(porps){
    const {label} = porps;

    return (
    <ContainerNameapp><h3>{label}</h3></ContainerNameapp> 
    );


}