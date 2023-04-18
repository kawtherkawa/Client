import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCasee } from "../../JS/Actions/casee";
import TopBar from "../../Components/topbar/TopBar";
import { Container } from "react-bootstrap";
const ListCase = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const CaseOne = useSelector((state) => state.caseReducer.caseToGet);
  const Load = useSelector((state) => state.caseReducer.load);
  useEffect(() => {
    dispatch(getCasee(_id));
  }, [dispatch]);

  return (
    <div>
      <TopBar />
      <Container>
      <ol class="list-group list-group-light list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">عدد القضية المرسمة بالمحكمة</div>
            {`${CaseOne.casesNumber}`}
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">موضوع </div>
            {`${CaseOne.casesSubjet}`}
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">حالتها</div>
                {`${CaseOne.casesEtat}`}        </div>
        </li>

        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">تاريخ القضية</div>
            {`${CaseOne.casesDate}`}  
          </div>
        </li>

      
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">المنوب</div>
            {`${CaseOne.casesClient}`} 
          </div>{" "}
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold"> المحكمة</div>
            {`${CaseOne.casesTribunal}`} 
             
          </div>{" "}
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold"> تاريخ نشر القضية</div>
            {`${CaseOne.casesDatePublication}`}   
          </div>{" "}
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">الحكم</div>
            {`${CaseOne.casesDecision}`} 
          </div>{" "}
        </li>

        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold"> اسم ولقب الخصم</div>
            {`${CaseOne.casesKhassim}`} 
          </div>{" "}
        </li>
      </ol>
      </Container>
    </div>
  );
};

export default ListCase;
/* casesNumber,casesSubjet,casesEtat,casesDate,casesClient,casesTribunal,casesDatePublication,casesDecision,
casesKhassim*/
