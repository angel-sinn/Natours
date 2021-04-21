/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51IfHaXCeuA8hCixorpTTuoJaJXsbZxuF7uVqhfCOzVUjsxEeN8F9T6n5R9y3gxUtLPW2qptGCUvM5mONJoV6FFk600AJUqjD4n'
  );

  // 1) Get checkout session from API
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
