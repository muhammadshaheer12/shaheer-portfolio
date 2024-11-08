import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <>
      <section className="service section" id="services">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Services</h2>
            </div>
          </div>
          <div className="row">
            {/* Service Item 1: Frontend Development */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-code" />
                </div>
                <h4>Frontend Development</h4>
                <p>
                  Build responsive and interactive websites using HTML, CSS, and
                  JavaScript. I focus on creating seamless user experiences and
                  clean, maintainable code.
                </p>
              </div>
            </div>
            {/* Service Item 1 End */}
            {/* Service Item 2: TypeScript Integration */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-cogs" />
                </div>
                <h4>TypeScript Integration</h4>
                <p>
                  Improve your JavaScript projects with TypeScript for better
                  code quality, type safety, and reduced bugs. I help integrate
                  TypeScript into your existing or new projects seamlessly.
                </p>
              </div>
            </div>
            {/* Service Item 2 End */}
            {/* Service Item 3: Next.js Development */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-rocket" />
                </div>
                <h4>Next.js Development</h4>
                <p>
                  Build modern, fast, and SEO-friendly web applications using
                  Next.js. I leverage the power of server-side rendering (SSR)
                  and static site generation (SSG) for optimal performance.
                </p>
              </div>
            </div>
            {/* Service Item 3 End */}
            {/* Service Item 4: UI/UX Design */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-paint-brush" />
                </div>
                <h4>UI/UX Design</h4>
                <p>
                  Create intuitive and user-friendly interfaces with a focus on
                  responsive design. I ensure your website looks great on all
                  devices and provides an excellent user experience.
                </p>
              </div>
            </div>
            {/* Service Item 4 End */}
            {/* Service Item 5: JavaScript Development */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-js-square" />
                </div>
                <h4>JavaScript Development</h4>
                <p>
                  Enhance your website with dynamic and interactive features
                  using JavaScript. I create custom scripts that add
                  functionality and interactivity to your site.
                </p>
              </div>
            </div>
            {/* Service Item 5 End */}
            {/* Service Item 6: Responsive Web Design */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-mobile-alt" />
                </div>
                <h4>Responsive Web Design</h4>
                <p>
                  Ensure your website looks great on all devices with our
                  responsive web design services. I build mobile-first websites
                  that provide a seamless experience on smartphones, tablets,
                  and desktops.
                </p>
              </div>
            </div>
            {/* Service Item 6 End */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
