import React, {useEffect, useState, useRef} from 'react';
import './reminder.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Btn = ({name, appearance}) => {
	return (
		<button className={appearance}>
			{name}
		</button>
	);
}

const Example = () => {
	const [startDate, setStartDate] = useState(new Date());
	return (
	  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
	);
  };

const ReminderForm = ({addReminder}) => {
	let input;
	return (
		<form onSubmit={(e) => {
				e.preventDefault();
				if (!input.value) {
					return
				}
				addReminder(input.value);
				input.value = '';
			}}>
			<input 
				ref={node => { input = node }}
				placeholder="add a task"
			/>
			<input 
				type="datetime-local" />
			<Btn name="Add Reminder" appearance="primary"/>
		</form>
	);
};

const ReminderItem = ({item, remove}) => {
	// Each item
	return (
		<li className="remind-list">
			<div className="input-container">
				{/* <input className="checkbox"type="time" name={item.id} value={item.text} /> */}
				<p className="note">{item.text}</p>
			</div>
			<p className='remove-btn' onClick={() => {
				remove(item.id)		
			}}>Remove</p>
		</li>
	);
};

const ReminderList = ({items, remove}) => {
	const reminderNode = items.map((item) => {
		return <ReminderItem item={item} remove={remove} key={item.id}/>
	});
	return (
		<ul>{reminderNode}</ul>
	);
}

window.id = 0;

class Reminder extends React.Component {
	constructor(props) {
		super(props);
		this.state = { data: [] };
	}
	
	addReminder(value) {
		const reminder = {text: value, id: window.id++};
		this.state.data.push(reminder);
		this.setState({data: this.state.data});
	}
	
	handleRemove(id) {
		const remainder = this.state.data.filter((item) => {
			if (item.id !== id) return item;
		})
		this.setState({data: remainder});
	}
	
	render() {
		return (
			<div className='reminderApp'>
			<div className="reminder">
				<h1 className='reminders-status'>{this.state.data.length} Reminders</h1>
				{/* <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} /> */}
				<ReminderList 
					items={this.state.data}
					remove={this.handleRemove.bind(this)}
					/>
				<ReminderForm addReminder={this.addReminder.bind(this)}/>
			</div>
			</div>
		);
	}
}

export default Reminder
