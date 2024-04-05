import { formatDate } from './js/helpers';

const View = ({ draws, status }) => {
  let content;

  if (draws === null) {
    if (status === 'loading') {
      content = <p>Loading...</p>;
    } else if (status === 'network-error') {
      content = <p>Network Error. Please try again later</p>;
    } else {
      content = <p>Please select above to view draws</p>;
    }
  } else if (draws && draws.Success === true) {
    if (draws.Draws.length > 0) {
      content = (
        <>
          {draws.Draws.map((draw, index) => (
            <div key={index} className="view-single">
              <div className="view-img-wrap">
                <img src={draw.DrawLogoUrl} alt="Company Logo" />
              </div>
              <div className="view-details">
                <h4>{draw.DrawDisplayName}</h4>
                <span className="tag">
                  Draw date - {formatDate(draw.DrawDate)}
                </span>
              </div>
            </div>
          ))}
        </>
      );
    } else {
      content = <p>No draws found</p>;
    }
  } else {
    content = <p>Something went wrong!</p>;
  }
  return (
    <div className={draws === null ? 'view-wrap jc-center' : 'view-wrap'}>
      {content}
    </div>
  );
};

export default View;
