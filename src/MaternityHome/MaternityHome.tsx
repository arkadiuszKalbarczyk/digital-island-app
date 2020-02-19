import React from "react";
import { Link } from "react-router-dom";
import "./MaternityHome.scss";

import Eye from "../assets/icons/baby-boy.png";
import MediaShare from "../assets/icons/media-share.png";
import MaternitySidebar from "../assets/images/maternity-sidebar.png";

const MaternityHome = () => {
  return (
    <div>
      <section className="MaternityHome">
        <article>
          <p className="breadcrumb">
            <span>Ísland.is</span> • <span>Public services</span> •{" "}
            <span>Family</span> • <span>Having a baby</span> •
            Maternity/paternity leave and parental leave
          </p>

          <h1 className="Article-subject">
            <img src={Eye} />
            Maternity/paternity leave and parental leave
          </h1>
          <h3 className="Article-subtitle">
            The parents of a child are entitled to paid leave at childbirth,
            when adopting a child and when becoming a permanent foster parent.
            They receive holiday allowance or childbirth allowance, depending on
            their situation in the labour market
          </h3>
          <section className="Article-text-section">
            <div className="Article-text-share">
              <img src={MediaShare} />
            </div>
            <section>
              <section className="Article-section">
                <h2>Applications</h2>
                <ul>
                  <li>
                    Payments during maternity/paternity leave must be applied
                    for at the Maternity/paternity Leave Fund at the Directorate
                    of Labour.
                  </li>
                  <li className="Article-section__li-special">
                    Applications for maternity/paternity leave must be submitted{" "}
                    <b>no later than six weeks</b> before the anticipated birth
                    of the child.
                  </li>
                  <li className="Article-section__li-special">
                    Applications for maternity/paternity allowance must be
                    submitted <b>no later than three weeks</b> before the
                    anticipated birth of the child.
                  </li>
                  <li>
                    The employer must be notified of the schedule for
                    maternity/paternity leave no later than eight weeks before
                    the anticipated birth of the child.
                  </li>
                  <li>
                    If there is a dispute concerning maternity/paternity leave
                    and parental leave (for instance, between the employer and
                    the employee, or because of the processing by the
                    Directorate of Labour), a complaint can be sent to the
                    Maternity/Paternity and Parental Leave Appeal Committee.
                  </li>
                </ul>
              </section>

              <section className="Article-section">
                <h2>Length of holiday or leave</h2>
                <ul>
                  <li>
                    Both parents have the independent and non-transferable right
                    to receive payments during maternity/paternity leave for
                    three months. This means that neither parent can have
                    his/her rights transferred to the other. In addition,
                    parents are entitled to a joint right of three additional
                    months; this may be taken by one parent or divided between
                    them.
                  </li>
                  <li className="Article-section__li-special">
                    Under special circumstances, the maternity/paternity leave
                    and allowance entitlements{" "}
                    <b>may be transferred from one parent to the other</b>,
                    because of death or disease, or because one of the parents
                    is serving a prison sentence.
                  </li>
                  <li>
                    Students and other parents outside the labour market or
                    working less than 0.25 FTE (full-time equivalent) are both,
                    provided certain conditions are met, entitled to receive
                    childbirth allowance for up to three months. In addition to
                    this, there is a three-month joint entitlement, which they
                    can divide between themselves or which one of the parents
                    can use in full.
                  </li>
                  <li>
                    There is flexibility with respect to maternity/paternity
                    leave, although if you wish to divide it into several
                    periods or spread it over a longer period in combination
                    with reduced working hours, you should consult with your
                    employer. Those who receive maternity/paternity allowance
                    must, however, take uninterrupted holiday leave.
                    <br />
                    Maternity/paternity leave and allowance entitlements are
                    cancelled when the child is 18 months old.
                  </li>
                </ul>
              </section>

              <section className="Article-section-2-cols">
                <section className="Article-section">
                  <h2>Parental leave</h2>
                  <ul>
                    <li>
                      Parental leave is unpaid leave from work, which either
                      parent may take for up to 13 weeks in order to care for
                      the child. This entitlement is attached to each child up
                      to 8 years of age.
                    </li>
                    <li>
                      Parental leave may be taken in one session, it may be
                      divided up into shorter periods, or it may be taken with a
                      reduced FT/PT ratio.
                    </li>
                    <li>
                      Parental leave is not accompanied by payments from the
                      Maternity/Paternity Leave Fund. Parents cannot transfer
                      the right to parental leave to each other.
                    </li>
                    <li className="Article-section__li-special">
                      The employer must be notified of the schedule for taking
                      maternity/paternity leave no later than six weeks before
                      the first day of leave.
                    </li>
                  </ul>
                </section>

                <section className="Article-section">
                  <h2>Professional qualifications</h2>
                  <ul>
                    <li>
                      An expecting mother or employees taking
                      maternity/paternity leave and parental leave may not be
                      laid off from their job, unless there are valid and well
                      founded reasons for doing so.
                    </li>
                    <li>
                      During maternity/paternity leave the parents accrue
                      work-related rights and leave-taking entitlements.
                      Government employees also accrue holiday-allowance rights
                      for their summer holidays, which employees on the labour
                      market do not.
                    </li>
                    <li>
                      Parents taking parental leave do not accrue summer-holiday
                      entitlements or earn other work-related entitlements
                      during their leave, but they keep the entitlements they
                      have already earned.
                    </li>
                  </ul>
                </section>
              </section>

              <section className="Article-section">
                <h2>Payments</h2>
                <ul>
                  <li>
                    It is expected that those who accept payments from the
                    Maternity/Paternity Leave Fund will not be engaged in work
                    for the duration of the payments.
                  </li>
                  <li>
                    Payments amount to 80% of the average of the parent's total
                    wages during a specific period before the birth of the
                    child. The payments can, however, never go below or above
                    certain limits, which are determined from time to time.
                  </li>
                  <li>
                    Parents who are members of the trade union of public
                    employees may be entitled to a contribution from the family
                    and support fund of their union, if the payments from the
                    maternity/paternity leave fund are lower than they would
                    have been according to older rules.
                  </li>
                  <li className="Article-section__li-special">
                    If allocations from the family and support fund take place,
                    the payer needs to notify the fund with respect to the
                    employee's terms of employment on a special form.
                  </li>
                </ul>
              </section>
            </section>
          </section>
        </article>
        <section className="MaternityHome-sidebar">
          <img src={MaternitySidebar} />
        </section>
      </section>
      <section className="MaternityHome__subfooter">
        <h2 className="center">See also in families</h2>
        <div className="cols-container">
          <section>
            <h3>Child benefits</h3>
            <p>
              Child benefits are intended to assist parents with their children
              and to equalise their situations...
            </p>
            <Link to={"#"}><b>SEE MORE</b></Link>
          </section>
          <section>
            <h3>Daycare in private homes</h3>
            <p>
              When maternity/paternity leave ends and the parents return to the
              labour market or begin studying, they need to find...
            </p>
            <Link to={"#"}><b>SEE MORE</b></Link>
          </section>
          <section>
            <h3>Healthcare</h3>
            <p>
              Healthcare services cover any form of healthcare, health controls,
              clinical analyses, medical treatment, nursing...
            </p>
            <Link to={"#"}><b>SEE MORE</b></Link>
          </section>
          <section>
            <h3>Paternity</h3>
            <p>By law, a child is entitled to know both parents...</p>
            <Link to={"#"}><b>SEE MORE</b></Link>
          </section>
        </div>
      </section>
      <div className="clear"></div>
    </div>
  );
};

export default MaternityHome;
