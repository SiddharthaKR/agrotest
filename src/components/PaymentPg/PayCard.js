
import CourseContent from "./CourseContent";
import Button from '@material-ui/core/Button';


const PayCard = (props) => {
    return (
        <div className='paystyledCard'>
            <div className='payCardHead'>
               <h1>{props.title}</h1>
            </div>
            <div className='payCardContent'>
              <div className='pcHead'>
                <h3>{props.title}</h3>
                <span>{props.studentsEnrolled} students</span>
              </div>
              <div className='pcBottom'>
                  <CourseContent />
                  <Button variant="contained"  style={{position: "absolute",right: 6,bottom: 6,backgroundColor: "#002E3E",color:'white'}}>
                    View<i className="fas fa-arrow-right"></i>
                  </Button>
              </div>
            </div>
        </div>
    );
};
export default PayCard;



// const StyledCard = styled.div`
//   width: 335px;
//   height: 300px;
//   filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
//   border-radius: 4px;
//   overflow: hidden;
//   margin: 1rem;
// `;
// const Bg = styled.div`
//   width: 100%;
//   height: 150px;
//   background: url("/images/card-bg.svg") no-repeat center;
//   color: white;
//   position: relative;
// `;
// const Head = styled.div`
//   width: 100%;
//   padding: 0.5rem 1rem;
//   font-size: 10px;
//   font-weight: 600;
//   display: flex;
//   justify-content: space-between;
// `;
// const HeadText = styled.div`
//   padding: 0.6rem 1rem;
//   background-color: rgba(0, 0, 0, 0.5);
//   border-radius: 12px;
// `;
// const BgTitle = styled.div`
//   font-size: 18px;
//   font-weight: 600;
//   background-color: white;
//   color: black;
//   position: absolute;
//   padding: 12px 60px;
//   border-radius: 4px 4px 0px 0px;
//   bottom: 0;
//   left: 50%;
//   transform: translateX(-50%);
// `;
// const Content = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   padding: 32px 10px 45px;
//   background-color: white;
//   font-size: 12px;
//   font-weight: 400;
// `;
// const Topic = styled.div`
//   margin: 15px 0px;
//   display: flex;
//   align-items: center;
// `;