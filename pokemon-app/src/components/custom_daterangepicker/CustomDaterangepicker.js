import React from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './CustomDaterangepicker.scss';

class CustomDaterangepicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: true
    }
  }

  componentDidMount() {
    this.setState({ isMobile: window.innerWidth < 576 });
    window.addEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize = () => {
    this.setState({ isMobile: window.innerWidth < 576 })
  }

  render() {
    const { isMobile } = this.state;
    const { from, to, handleDayrangeClick, className } = this.props;

    return (
      <div className={`${className} custom-daterangepicker`}>
        <DayPicker
          selectedDays={[
            from,
            { from, to },
          ]}
          onDayClick={handleDayrangeClick}
          disabledDays={[
            {
              after: new Date(),
            },
          ]}
          modifiers={{
            start: from,
            end: to,
          }}
          numberOfMonths={isMobile ? 1 : 2}
        />
      </div>
    )
  }
}

CustomDaterangepicker.defaultProps = {
  from: undefined,
  to: undefined,
  className: ''
};

CustomDaterangepicker.propTypes = {
  handleDayrangeClick: PropTypes.func.isRequired,
  from: PropTypes.instanceOf(Date),
  to: PropTypes.instanceOf(Date),
  className: PropTypes.string
};

export default CustomDaterangepicker;
