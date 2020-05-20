import React, { useState, useEffect } from 'react';
import { Container, List, ListItemText, Divider } from '@material-ui/core'
import { useStyles } from '../../layout/Style'

const SkillSets = (props) => {
    const classes = useStyles();
    const [skills, setSkills] = useState(props.skillSet)
    useEffect(() => {
        if (props.skillSet) {
            setSkills(props.skillSet);
        }
    }, [props.skillSet])
    return (<Container>
        <label className={classes.listTitle}> {props.name}</label>
        <Divider />
        <List>
            {skills.map((s, i) => {
                return <ListItemText key={i} primary={s.name}></ListItemText>
            })}
        </List>
    </Container>
    )
}
export default SkillSets;