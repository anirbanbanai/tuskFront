

const Array = () => {

    const feedbackData = {
        Feedback_received_by_Date: '2004-12-12',
        Feedback_received_by_name: 'Anirban',
        designation: 'developer',
        feedbackchannel: ['Community meeting']
      };
      
      if ((feedbackData.feedbackchannel)) {
        feedbackData.feedbackchannel = feedbackData.feedbackchannel.join(', ');
      }
      const ddd = {
feedbackData
      }
      console.log(ddd.feedbackData); // Output: 'Community meeting'
      
    const data = ["Anu"]
    console.log(data[0]);
    return (
        <div>
            
        </div>
    );
};

export default Array;