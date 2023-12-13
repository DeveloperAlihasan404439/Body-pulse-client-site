import SectionTitle from "../Sheard/SectionTitle/SectionTitle";
import "./Newsletter.css";
const Newsletter = () => {
  return (
    <>
      <SectionTitle heading="Subscribers" title="Subscribers Newsletter " />
      <section className=" ">
        <div className="pb-5 lg:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <img
                className="w-full h-full object-cover"
                src="https://plus.unsplash.com/premium_photo-1661347839170-85172ef52293?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGJvZHklMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D/"
                alt=""
              />
            </div>
            <div className="bg-[#F1F5F8] overflow-hidden">
              <div className="p-10">
                <div className="text-center lg:text-left">
                  <h1 className="text-xl lg:text-4xl font-semibold">
                    What can I do with Body Pulser?
                  </h1>
                  <p>
                    Streamline your hiring process with strategic channels to
                    reach qualified candidates
                  </p>
                </div>
                <br />
                <div className="space-y-10 lg:space-y-4">
                  <div className="flex-row text-center lg:text-left lg:flex gap-2">
                    <img
                      className="m-auto lg:m-0"
                      src="https://raw.githubusercontent.com/julfiker755/Assignment11-job-stock/9e6842d94540c294630c505c7c6046fb09b03200/client/src/assets/jobtex/svg1.svg"
                      alt=""
                    />
                    <div>
                      <h1 className="text-xl font-semibold">
                        Reduce Hiring Bias
                      </h1>
                      <p>
                        Structured digital interviews increase the predictive
                        validity of your hires
                      </p>
                    </div>
                  </div>
                  <div className="flex-row text-center lg:text-left lg:flex gap-2">
                    <img
                      className="m-auto lg:m-0"
                      src="https://raw.githubusercontent.com/julfiker755/Assignment11-job-stock/9e6842d94540c294630c505c7c6046fb09b03200/client/src/assets/jobtex/svg2.svg"
                      alt=""
                    />
                    <div>
                      <h1 className="text-xl font-semibold">
                        Save Time & Headspace
                      </h1>
                      <p>
                        Reduce your time-to-hire by up to 80% and free up
                        headspace for other HR priorities.
                      </p>
                    </div>
                  </div>
                  <div className="flex-row text-center lg:text-left lg:flex gap-2">
                    <img
                      className="m-auto lg:m-0"
                      src="https://raw.githubusercontent.com/julfiker755/Assignment11-job-stock/9e6842d94540c294630c505c7c6046fb09b03200/client/src/assets/jobtex/svg3.svg"
                      alt=""
                    />
                    <div>
                      <h1 className="text-xl font-semibold">
                        Minimize Environmental Impact
                      </h1>
                      <p>
                        Did you know? U.S. office workers use ~10,000 sheets of
                        paper every year
                      </p>
                    </div>
                  </div>
                  <div className="flex-row text-center lg:text-left lg:flex gap-2">
                    <img
                      className="m-auto lg:m-0"
                      src="https://raw.githubusercontent.com/julfiker755/Assignment11-job-stock/9e6842d94540c294630c505c7c6046fb09b03200/client/src/assets/jobtex/svg4.svg"
                      alt=""
                    />
                    <div>
                      <h1 className="text-xl font-semibold">Save Money</h1>
                      <p>
                        Interview more candidates, more quickly and still save
                        money.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Newsletter;
