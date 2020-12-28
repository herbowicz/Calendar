import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    margin: 1em;
`;

const Months = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`

const Title = styled.h2`
    color: #333;
    text-align: center;
`;

const Content = styled.ol`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    list-style: none;
    margin: 0;
    padding: 0;
    & li {
        padding: 7px;
        text-align: center;
        border: 1px solid #eee;
        user-select: none;
    }
    & li:nth-child(6) {
        color: navy;
    }
    & li:nth-child(7) {
        color: red;
    }
    & li:hover {
        font-weight: bold;
        background-color: lightyellow;
        border: 1px solid #333;
    }
`;

const DayName = styled.li`
    background: #eee;
`;

const FirstDay = styled.li`
    grid-column-start: ${({ start }) => start};
`;

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const Calendar = ({years}) => years.map((year, i) => <Year key={i} year={year}/>);

const Year = ({year}) => (
    <Wrapper>
        <Title>{year}</Title>
        <Months>
            {months.map((name, i) => <Month key={i} name={name} month={i + 1} year={year} />)}
        </Months>
    </Wrapper>
);

const Month = ({name, month, year}) => {
    const firstDay = new Date(year, month - 1, 1).getDay();
    const countDays = new Date(year, month, 0).getDate();

    return (
        <Wrapper>
            <Title>{name}</Title>
            <Content>
                <Header />
                <FirstDay start={firstDay === 0 ? 7 : firstDay}>1</FirstDay>
                <Days days={countDays - 1}/>
            </Content>
        </Wrapper>
    );
};

const Header = () => weekdays.map((day, i) => <DayName key={i}>{day}</DayName>);

const Days = ({days}) => [...Array(days)]
    .map((_, i) => <li key={i}>{i + 2}</li>);

export default Calendar;
