import { ContainerCharts } from "../Component.styled"
import { TempOrange } from '../Component.styled';
import PieChart from "./pieCharts";

export default function Charts(props){
    const { label } = props;
    

    return (
        <ContainerCharts>
            <h3>{label}</h3>
            <div class="box"></div>
            <TempOrange size="100"/>
            <PieChart/>
        </ContainerCharts>


    );
}