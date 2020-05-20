import React, { useState, useEffect } from 'react';
import { Container, Divider } from '@material-ui/core'
import { useStyles } from '../../layout/Style'
import { Polar } from 'react-chartjs-2';

const SkillChart = (props) => {
    const classes = useStyles();
    const [skills, setSkills] = useState(props.skillSet)
    const randomColor = () => {
        const tempHex = Math.floor(Math.random() * 16777215).toString(16)
        const r = parseInt(tempHex.substring(0, 2), 16);
        const g = parseInt(tempHex.substring(2, 4), 16);
        const b = parseInt(tempHex.substring(4, 6), 16);
        return `rgba(${r},${g},${b},${70 / 100})`;
    }
    const dataforPolar = () => {
        if (skills) {
            var data = []
            var bgcolor = []
            var labels = []
            skills.forEach(skill => {
                data.push(skill.percent)
                bgcolor.push(randomColor())
                labels.push(skill.name)
            });
            var dataset = {
                datasets: [{
                    data: data,
                    backgroundColor: bgcolor,
                }],
                labels: labels
            }
            console.log(dataset)
            return dataset;
        }
    }
    useEffect(() => {
        if (props.skillSet) {
            setSkills(props.skillSet);
        }
    }, [props.skillSet])
    return (<Container>
        <label className={classes.listTitle}> {props.name}</label>
        <Divider />
        <Polar data={dataforPolar()} />
    </Container>
    )
}
export default SkillChart;