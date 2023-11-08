const Faq = () => {
  return (
    <div>
      <div className="my-10">
        <h1 className="md:text-4xl text-2xl font-bold mt-10 text-center">
          FAQ
        </h1>
        <div className="flex flex-wrap gap-4 max-w-6xl mx-auto mt-10 p-2">
          <div className="flex-1 space-y-4">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div className="collapse-title text-xl font-medium">
                Our Mission
              </div>
              <div className="collapse-content">
                <p>
                  Our mission is simple yet profound: to design, plan, and
                  execute social events that reflect the unique personalities
                  and desires of our clients. We believe that every event is an
                  opportunity to tell a story, and we are here to help you tell
                  yours.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Our Commitment
              </div>
              <div className="collapse-content">
                <p>
                  Whether it is a milestone birthday party, a dreamy wedding, a
                  corporate celebration, or any social event in between, social
                  event is committed to exceeding your expectations. We believe
                  that your special moments should be stress-free, enjoyable,
                  and filled with cherished memories.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Attention to Detail
              </div>
              <div className="collapse-content">
                <p>
                  {" "}
                  From the grandest concept to the tiniest details, we leave no
                  stone unturned in ensuring your event is flawless, down to the
                  last flower arrangement or lighting fixture.
                </p>
              </div>
            </div>
          </div>
          <div className="ml-4">
            <img className="w-96" src="/img/faq.svg" alt="nai" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
