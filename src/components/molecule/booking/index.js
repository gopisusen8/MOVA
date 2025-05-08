import styles from './index.module.css';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import BookingForm from './../../assets/store/bookingForm.json';
import Places from './../../assets/store/places.json';
import DummyCabs from './../../assets/store/dummyCabs.json';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import BookingCard from '../../atom/bookingCard.js';
import { Ring } from '@uiball/loaders';

const Booking = () => {
  const [email, setEmail] = React.useState('');
  const [sourceLocation, setSourceLocation] = React.useState('');
  const [destLocation, setDestLocation] = React.useState('');
  const [cabData, setCabData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [totalTime, setTotalTime] = React.useState(null);

  const checkFareClicked = () => {
    if (!email || !sourceLocation || !destLocation) {
      alert('Please fill out all fields before checking the fare.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setCabData(DummyCabs);
      setTotalTime(20);
      setLoading(false);
    }, 1000);
  };

  const cabBookClicked = (cab) => {
    alert(`Cab booked: ${cab.name} for ₹${cab.fare}`);
  };

  return (
    <div className={styles.booking__outer} id="book">
      <div className={styles.booking__inner}>
        <div className={styles.booking__inner__left}>
          <div className={styles.booking__inner__left__heading}>
            {BookingForm.heading}
          </div>

          <div className={styles.booking__each}>
            <div className={styles.booking__each__heading}>
              {BookingForm.email.label}
            </div>
            <div className={styles.booking__each__field}>
              <input
                type="email"
                aria-label="Email address"
                required
                placeholder={BookingForm.email.placeholder}
                className={styles.booking__inputfield}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.booking__each}>
            <div className={styles.booking__each__heading}>
              {BookingForm.source.label}
            </div>
            <div className={styles.booking__each__field}>
              <Autocomplete
                disablePortal
                id="source-select"
                options={Places}
                value={Places.find((p) => p.label === sourceLocation) || null}
                onChange={(e, val) => setSourceLocation(val ? val.label : '')}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder={BookingForm.source.placeholder}
                    aria-label="Source location"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '6px',
                        '& fieldset': {
                          borderColor: 'black',
                        },
                        '&:hover fieldset': {
                          borderColor: '#555',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'dodgerblue',
                          borderWidth: '2px',
                        },
                      },
                    }}
                  />
                )}
              />
            </div>
          </div>

          <div className={styles.booking__each}>
            <div className={styles.booking__each__heading}>
              {BookingForm.dest.label}
            </div>
            <div className={styles.booking__each__field}>
              <Autocomplete
                disablePortal
                id="dest-select"
                options={Places}
                value={Places.find((p) => p.label === destLocation) || null}
                onChange={(e, val) => setDestLocation(val ? val.label : '')}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder={BookingForm.dest.placeholder}
                    aria-label="Destination location"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '6px',
                        '& fieldset': {
                          borderColor: 'black',
                        },
                        '&:hover fieldset': {
                          borderColor: '#555',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'dodgerblue',
                          borderWidth: '2px',
                        },
                      },
                    }}
                  />
                )}
              />
            </div>
          </div>

          <button
            className={styles.booking__left__button__each}
            onClick={!loading ? checkFareClicked : null}
            disabled={loading}
          >
            Check Fare {'\u00A0'}
            <FontAwesomeIcon icon={faArrowRight} size="lg" />
          </button>
        </div>

        <div className={styles.booking__inner__right}>
          <div className={styles.booking__inner__right__heading}>
            <span style={{ textDecoration: 'underline' }}>Pick Up:</span> {' '}
            {sourceLocation || 'Select Pick-Up'} {' '}
            <FontAwesomeIcon icon={faArrowRight} size="lg" /> {' '}
            <span style={{ textDecoration: 'underline' }}>Drop:</span> {' '}
            {destLocation || 'Select Drop'}
          </div>

          <div className={styles.booking__inner__right__heading__mobile}>
            <div className={styles.booking__inner__right__heading__top}>
              <span style={{ textDecoration: 'underline' }}>Pick Up:</span> {' '}
              {sourceLocation || 'Select Pick-Up'}
            </div>
            <div className={styles.booking__inner__right__heading__top}>
              <FontAwesomeIcon icon={faArrowDown} size="lg" />
            </div>
            <div className={styles.booking__inner__right__heading__top}>
              <span style={{ textDecoration: 'underline' }}>Drop:</span> {' '}
              {destLocation || 'Select Drop'}
            </div>
          </div>

          <div className={styles.booking__inner__right__time}>
            <span style={{ textDecoration: 'underline' }}>Minimum Time:</span> {' '}
            {totalTime ? `${totalTime} min` : 'Check Fare!'}
          </div>

          <div className={styles.booking__inner__right__display}>
            {loading ? (
              <Ring size={40} lineWeight={5} speed={2} color="black" />
            ) : (
              cabData.map((ele) => (
                <BookingCard
                  key={ele.id}
                  ele={ele}
                  totalTime={totalTime}
                  cabBookClicked={cabBookClicked}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
