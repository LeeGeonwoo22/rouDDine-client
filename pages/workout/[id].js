import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import HeadInfo from '../../components/HeadInfo'
import Nav from '../../components/Nav'
import {resetServerContext, DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import WorkoutLists from '../../components/WorkoutLists'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

resetServerContext();
const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 350
});

const WorkoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PageTitle = styled.h1`
  text-align: center;
`;

const SubTitle = styled.h3`
  text-align: center;
`;

const WorkoutListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;


export default function Workout() {
  const login = useSelector(state => state.login);

  const [workouts, setWorkouts] = useState(null)

  const getWorkout = async () => {
    const url = `http://localhost:8000/exercise?userid=1`
    await axios.get(url)
    .then((res) => {
      // console.log(res.data.result)
      setWorkouts(res.data.result)
      // setWorkouts(res.data.result)
    })
  }

    useEffect(() => {
      getWorkout()
    }, [])
    // console.log(workouts)

  return (
    <WorkoutContainer>
      <HeadInfo/>
      <Nav/>
      <PageTitle>Workout page</PageTitle>
      <SubTitle>루틴 이름</SubTitle>
      <WorkoutListContainer>
        <DragDropContext>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            >
              {workouts && workouts.map((workout, index) => (
                <Draggable key={workout.id} draggableId={workout.id.toString()} index={index}>
                  {(provided, snapshot) => (
                    <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                      )}
                      >
                      <WorkoutLists workout={workout}></WorkoutLists>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </WorkoutListContainer>
  </WorkoutContainer>
  );
}

