import React from 'react';
import {
  Button, Col, Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DateUtils } from 'react-day-picker';
import NavigationBar from '../../components/navigation_bar/NavigationBar';
import HistoryList from './history_list/HistoryList';
import CustomDaterangepicker from '../../components/custom_daterangepicker/CustomDaterangepicker';
import CustomModal from '../../components/custom_modal/CustomModal';
import './History.scss';
import CustomDropdown from '../../components/custom_dropdown/CustomDropdown';
import CustomSelect from '../../components/custom_select/CustomSelect';
import { getCategories } from '../../utils/api';

class History extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [
        {
          date: 'Hari ini',
          totalAmount: 5000000,
          data: [
            {
              name: 'Gaji',
              day: 'Today',
              time: '15.00',
              type: 'income',
              amount: 5000000,
            },
            {
              name: 'Makan Odading Mang Oleh',
              day: 'Today',
              time: '15.00',
              type: 'expense',
              amount: 20000,
            },
            {
              name: 'Transfer Bank ke Opo',
              day: 'Today',
              time: '15.00',
              type: 'transfer',
              amount: 50000,
            },
            {
              name: 'Gaji',
              day: 'Today',
              time: '15.00',
              type: 'income',
              amount: 5000000,
            },
          ],
        },
        {
          date: '10 Oktober 2020',
          totalAmount: 5000000,
          data: [
            {
              name: 'Gaji',
              day: 'Today',
              time: '15.00',
              type: 'income',
              amount: 5000000,
            },
            {
              name: 'Makan Odading Mang Oleh',
              day: 'Today',
              time: '15.00',
              type: 'expense',
              amount: 20000,
            },
            {
              name: 'Transfer Bank ke Opo',
              day: 'Today',
              time: '15.00',
              type: 'transfer',
              amount: 50000,
            },
            {
              name: 'Gaji',
              day: 'Today',
              time: '15.00',
              type: 'income',
              amount: 5000000,
            },
          ],
        },
        {
          date: '09 Oktober 2020',
          totalAmount: 5000000,
          data: [
            {
              name: 'Gaji',
              day: 'Today',
              time: '15.00',
              type: 'income',
              amount: 5000000,
            },
            {
              name: 'Makan Odading Mang Oleh',
              day: 'Today',
              time: '15.00',
              type: 'expense',
              amount: 20000,
            },
            {
              name: 'Transfer Bank ke Opo',
              day: 'Today',
              time: '15.00',
              type: 'transfer',
              amount: 50000,
            },
            {
              name: 'Gaji',
              day: 'Today',
              time: '15.00',
              type: 'income',
              amount: 5000000,
            },
          ],
        },
      ],
      activeHistory: 'all',
      showAdvancedFilter: false,
      selectedDayRange: {
        from: undefined,
        to: undefined
      },
      categories: [],
      categoriesLoading: false,
      isMobile: true
    };
  }

  handleWindowResize = () => {
    this.setState({ isMobile: window.innerWidth < 768 })
  }

  async componentDidMount() {
    // Get categories
    const result = await getCategories();
    const setCategories = result.data.categories.map(({ id, value }) => ({
      id,
      value
    }));

    this.setState({ 
      categories: setCategories, 
      isMobile: window.innerWidth < 768 
    });
    window.addEventListener('resize', this.handleWindowResize);
  }

  handleSetActiveHistory = (value) => {
    const { activeHistory } = this.state;
    
    if (activeHistory === value) {
      this.setState({ activeHistory: 'all' })
    } else {
      this.setState({ activeHistory: value })
    }
  };

  handleDayrangeClick = (day, { disabled }) => {
    if (!disabled) {
      const { selectedDayRange } = this.state;
      const range = DateUtils.addDayToRange(day, selectedDayRange)

      if (range.from && !range.to) {
        this.setState({ selectedDayRange: { from: range.from, to: range.from } })
      } else {
        this.setState({ selectedDayRange: range });
      }
    } else {
      return;
    }
  }

  render() {
    const { 
      history, 
      activeHistory, 
      showAdvancedFilter, 
      selectedDayRange: { from, to }, 
      categoriesLoading, 
      categories,
      isMobile
    } = this.state;

    return (
      <div className="history-container">
        <Row>
          <Col>
            <Link to="/">
              <div className="d-flex justify-content-start align-items-center">
                <img src="/images/icons/arrow-back.svg" alt="arrow-back-icon" />
                <p className="font-weight-bold fs-14 mb-0 mgl-20">Riwayat</p>
              </div>
            </Link>
            <div className="d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center mgy-24 mr-2 history-button-group">
                <Button
                  className="text-truncate fs-14 history-button"
                  onClick={() => this.handleSetActiveHistory('income')}
                  active={activeHistory === 'income'}
                >
                  Pokédex
                </Button>
                <Button
                  className="text-truncate fs-14 history-button"
                  onClick={() => this.handleSetActiveHistory('expense')}
                  active={activeHistory === 'expense'}
                >
                  My Pokemon
                </Button>
              </div>
            </div>
            <CustomModal
              show={showAdvancedFilter}
              className="history-custom-modal"
            >
              <div className="px-3">
                <div className="mx-auto mt-3 separator"></div>
                <CustomDaterangepicker
                  from={from}
                  to={to}
                  handleDayrangeClick={this.handleDayrangeClick}
                  className="m-3 text-center"
                />
                <div className="m-3 mb-0 text-center">
                  <CustomDropdown 
                    toggleText="Akun"
                    dropDirection="up"
                    className="mx-auto history-account-dropdown" 
                  />
                </div>
                {
                  !isMobile && (
                    <div className="m-3 mb-0 text-center">
                      <CustomSelect
                        className="mx-auto history-account-dropdown" 
                        loading={categoriesLoading}
                        data={categories}
                      />
                    </div>
                  )
                }
                <div className="my-3 mx-auto px-3 d-flex justify-content-between align-items-center history-modal-footer">
                  <Button 
                    className="py-2 mr-1 fs-14 footer-button cancel" 
                    onClick={() => setTimeout(() => this.setState({ showAdvancedFilter: !showAdvancedFilter }), 300)}>
                    Batal
                  </Button>
                  <Button 
                    className="py-2 ml-1 fs-14 footer-button done" 
                    onClick={() => setTimeout(() => this.setState({ showAdvancedFilter: !showAdvancedFilter }), 300)}>
                    Selesai
                  </Button>
                </div>
              </div>
            </CustomModal>
            {
              history.map((data, index) => (
                <HistoryList history={data} key={index} />
              ))
            }
          </Col>
        </Row>
        <NavigationBar />
      </div>
    );
  }
}

export default History;
