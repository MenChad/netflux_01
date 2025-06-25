export default function Heros() {
  return (
    <div className="container mt-5 ">
      <h2 className="py-5">Pour vous</h2>
      <div className="row">
        <div className="col-3">
          <div className="card mb-3">
            <img
              src="/ginny.jpg"
              className="img-fluid rounded-start"
              alt="série ginny & georgia"
            />
            <div className="card-body"></div>
          </div>
        </div>
        <div className="col-3">
          <div className="card mb-3">
            <img
              src="/asterix.jpg"
              className="img-fluid rounded-start"
              alt="série asterix & obelix"
            />
            <div className="card-body"></div>
          </div>
        </div>
        <div className="col-3">
          <div className="card mb-3">
            <img
              src="/à_bout.jpg"
              className="img-fluid rounded-start"
              alt="série à bout"
            />
            <div className="card-body"></div>
          </div>
        </div>
        <div className="col-3">
          <div className="card mb-3">
            <img
              src="/ko.jpg"
              className="img-fluid rounded-start"
              alt="série k.o"
            />
            <div className="card-body"></div>
          </div>
        </div>


        
      </div>
    </div>
  );
}