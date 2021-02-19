import React from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './CustomDatepicker.scss';

const CustomDatepicker = ({
  selectedDay, handleDayClick, className,
}) => (
  <div className={`${className} custom-datepicker`}>
    <DayPicker
      selectedDays={selectedDay}
      onDayClick={handleDayClick}
      disabledDays={[
        {
          after: new Date(),
        },
      ]}
    />
  </div>
);

CustomDatepicker.defaultProps = {
  selectedDay: null,
  className: '',
};

CustomDatepicker.propTypes = {
  handleDayClick: PropTypes.func.isRequired,
  selectedDay: PropTypes.instanceOf(Date),
  className: PropTypes.string,
};

export default CustomDatepicker;
