import React ,{useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector,useDispatch, } from 'react-redux';
import CaseRow from './CaseRow';
import {getCases} from '../../JS/Actions/casee'
const CasesTable = () => {

const dispatch=useDispatch();
const Cases=useSelector(state=>state.caseReducer.listCases);
const Load=useSelector(state=>state.caseReducer.load)
console.log (Cases)

useEffect(()=>{
dispatch(getCases());
},[dispatch]);


  return (

   
    <div>

<Table   id="dtBasicExample" className="table table-striped table-bordered" cellspacing="0" width="100%"    >
      <thead>
        <tr>
        <th className="th-sm">الخصم</th>
    
          <th className="th-sm">الخصم</th>
          <th  className="th-sm">الحكم</th>
          <th className="th-sm">تاريخ النشر</th>
          <th className="th-sm">المحكمة</th>
          <th className="th-sm">المنوب </th>
          <th className="th-sm">تاريخ القضية </th>
          <th className="th-sm">حالتها</th>
          <th className="th-sm">موضوع</th>
          <th className="th-sm">عدد القضية </th>
        </tr>
      </thead>
      <tbody>
    {Cases?.map((casee , index) => <CaseRow key={index} casee={casee} />)}
      </tbody>
    </Table>

    </div>
  )
}

export default CasesTable
/*const Cases = [
    {caseName : "GREGERG",
    caseNum : "regregre",
    caseB : "NEOAD",
    caseDate : "21/5/2012",
}
,


{caseName : "GREGERG",
caseNum : "regregre",
caseB : "NEOAD",
caseDate : "21/5/2012",
}
,


{caseName : "GREGERG",
caseNum : "regregre",
caseB : "NEOAD",
caseDate : "21/5/2012",
}
,


{caseName : "GREGERG",
caseNum : "regregre",
caseB : "NEOAD",
caseDate : "21/5/2012",
}
,


{caseName : "GREGERG",
caseNum : "regregre",
caseB : "NEOAD",
caseDate : "21/5/2012",
}
,


{caseName : "GREGERG",
caseNum : "regregre",
caseB : "NEOAD",
caseDate : "21/5/2012",
}
,


{caseName : "GREGERG",
caseNum : "regregre",
caseB : "NEOAD",
caseDate : "21/5/2012",
}
,


{caseName : "GREGERG",
caseNum : "regregre",
caseB : "NEOAD",
caseDate : "21/5/2012",
}
,


{caseName : "GREGERG",
caseNum : "regregre",
caseB : "NEOAD",
caseDate : "21/5/2012",
}
,



]*/

 /*casesKhassim
    casesDecision
casesDatePublication
casesTribunal
casesClient
casesDate
casesEtat
casesSubjet  
<Table        style={{width : "60%"}} striped bordered hover>
<thead>
        <tr>
          
          <th>الخصم</th>
          <th>الحكم</th>
          <th>تاريخ النشر</th>
          <th>المحكمة</th>
          <th>المنوب </th>
          <th>تاريخ القضية </th>
          <th>حالتها</th>
          <th>موضوع</th>

          <th>عدد القضية </th>
        </tr>
      </thead>
      <tbody>
    {Cases?.map((casee , index) => <CaseRow key={index} casee={casee} />)}
      </tbody>
    </Table>

    </div>*/