import '../styles/components/Form.scss';

const Form = () => {
  return (
    <div className="form">
      <input className="form__input" placeholder="Enter your email address" />
      <button className="form__button">Join waitlist</button>
    </div>
  );
};

export default Form;
