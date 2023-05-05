import { ContainerCharts } from "../Component.styled"

export default function TempBack(porps){
    const {label} = porps;

    return (
        <ContainerCharts>{label}</ContainerCharts>
    );

}