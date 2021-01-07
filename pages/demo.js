import Image from 'next/image';

export default function Demo() {
  return (
    <>
      <div className="heading-container">
        <h1 className="heading">Demo</h1>
      </div>

      <div className="demo-body">
        <div className="demo">
          <div className="wrapper">
            <div className="feature-box">
              <i className="title">Secure registration and login</i>
            </div>
            <div>
              <Image
                src="/login.gif"
                alt="login gif"
                width={800}
                height={494}
              />
            </div>
          </div>
          <br></br>
          <div className="wrapper">
            <p className="feature-box">
              <i className="title">Real-time data consumption</i>
            </p>
            <div>
              <Image
                className="feature-box"
                src="/realtime.gif"
                alt="login gif"
                width={800}
                height={494}
              />
            </div>
          </div>
          <br></br>
          <div className="wrapper">
            <div className="feature-box">
              <i className="title">Drill down for detailed metrics</i>
            </div>
            <div>
              <Image
                src="/drilldown.gif"
                alt="drilldown gif"
                width={800}
                height={494}
              />
            </div>
          </div>
          <br></br>
        </div>
      </div>
    </>
  );
}
