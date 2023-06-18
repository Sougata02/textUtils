export default function Alert(props) {
  const capitalize = () => {
    let t = props.alertOccur.type.toLowerCase();
    return t[0].toUpperCase() + t.slice(1);
  };
  return (
    props.alertOccur && (
      <>
        <div
          className={`alert alert-${props.alertOccur.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alertOccur.type)}: </strong>
          {props.alertOccur.msg}
          <></>
        </div>
      </>
    )
  );
}
