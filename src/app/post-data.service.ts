import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Http, Headers } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class PostDataService {
  data;

  // test local
  // apiServer_url = 'http://localhost:41669/';
  // apiStock = 'https://localhost:6379/';

  // จาก Server จริง
  apiServer_url = 'https://erpsuperior.com/';
  apiStock = 'https://wms.erpsuperior.com/';

  //จาก Server เทส
  // apiServer_url = 'https://test.erpsuperior.com/';
  // apiStock = 'https://wmstest.erpsuperior.com/';


  // apiServer_url = 'https://cors-anywhere.herokuapp.com/http://superior2.wingplusweb.com/';
  // apiServer_url = 'https://cors-anywhere.herokuapp.com/https://superior2.wingplusweb.com/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {
  }

  //#region Server
  changpassword(pass) {
    console.log(pass);

    return new Promise((resovle, reject) => {

      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/Login.ashx' + '?empID=' + pass.empID + '&type=' + pass.type + '&passold=' + pass.old + '&passnew=' + pass.new,
        JSON.stringify(pass), option).subscribe(data => {
          resovle(data);
        }, error => {
          reject(error)
        });
    });
  }
  login(user) {
    return new Promise((resovle, reject) => {

      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/Login.ashx' + '?email=' + user.email + '&password=' + user.password,
        JSON.stringify(user), option).subscribe(data => {
          resovle(data);
        }, error => {
          reject(error)
        });
    });
  }
  postjobOverview(user) {
    return new Promise((resovle, reject) => {

      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/JobOverview.ashx' + '?empID=' + user.empID + '&month=' + user.month + '&year=' + user.year,
        JSON.stringify(user), option).subscribe(data => {
          resovle(data);
        }, error => {
          reject(error)
        });
    });
  }
  postjob(job) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.get(this.apiServer_url + '/API/Job.ashx' + '?empID=' + job.empID + '&month=' + job.month + '&year=' + job.year, option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }
  postjobDetail(jobdetail) {
    return new Promise((resovle, reject) => {

      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/DetailJob.ashx' + '?planID=' + jobdetail.planID + '&tranID=' + jobdetail.tranID + '&type=' + jobdetail.type
        + '&insID=' + jobdetail.insID,
        JSON.stringify(jobdetail), option).subscribe(data => {
          resovle(data);
        }, error => {
          reject(error)
        });
    });
  }
  postJobList(job) {
    return new Promise((resovle, reject) => {

      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/JobList.ashx' + '?empID=' + job.empID + '&month=' + job.month + '&year=' + job.year
        + '&jobtype=' + job.jobtype,
        JSON.stringify(job), option).subscribe(data => {
          resovle(data);
        }, error => {
          reject(error)
        });
    });
  }

  postGetList(job) {
    return new Promise((resovle, reject) => {

      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/JobList.ashx' + '?PlanID=' + job.PlanID + '&jobtype=' + job.jobtype,
        JSON.stringify(job), option).subscribe(data => {
          resovle(data);
        }, error => {
          reject(error)
        });
    });
  }

  postcheck(form) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/TranService.asmx/Tran', JSON.stringify(form), option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }

  postListpm(job) {
    return new Promise((resovle, reject) => {

      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/Listpm.ashx' + '?empID=' + job.empID + '&month=' + job.month + '&year=' + job.year,
        JSON.stringify(job), option).subscribe(data => {
          resovle(data);
        }, error => {
          reject(error)
        });
    });
  }
  postDetailListpm(detaillistpm) {
    return new Promise((resovle, reject) => {

      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/DetailListpm.ashx' + '?cusID=' + detaillistpm.cusID + '&planID=' + detaillistpm.planID + '&month=' + detaillistpm.month
        + '&year=' + detaillistpm.year + '&jobtype=' + detaillistpm.type + '&date=' + detaillistpm.date + '&empid=' + detaillistpm.empid,
        JSON.stringify(detaillistpm), option).subscribe(data => {
          resovle(data);
        }, error => {
          reject(error)
        });
    });
  }
  postEmployee(emp) {
    return new Promise((resovle, reject) => {

      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/Employee.ashx' + '?empID=' + emp.empid,
        JSON.stringify(emp), option).subscribe(data => {
          resovle(data);
        }, error => {
          reject(error)
        });
    });
  }
  postServicaPlan(serviceplan) {
    return new Promise((resovle, reject) => {

      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/DetailListpm.ashx' + '?empID=' + serviceplan.empID + '&month=' + serviceplan.month + '&year=' + serviceplan.year,
        JSON.stringify(serviceplan), option).subscribe(data => {
          resovle(data);
        }, error => {
          reject(error)
        });
    });
  }
  postphoto(form) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/WebService.asmx/Photo', JSON.stringify(form), option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }
  postTran(tran) {
    return new Promise((resovle, reject) => {

      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/Web/CK_Check.aspx' + '?empID=' + tran.empID + '&serviceplanid=' + tran.serviceplanid + '&installplanid=' + tran.installplanid,
        JSON.stringify(tran), option).subscribe(data => {
          resovle(data);
        }, error => {
          reject(error)
        });
    });
  }
  postdevice(form) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/Device.asmx/Devices', JSON.stringify(form), option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }
  postTranService(form) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/TranService.asmx/Tran', JSON.stringify(form), option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }
  getImage(form) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/ImageService.asmx/ImageInstall', JSON.stringify(form), option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }
  
  SaveCaseAll(form) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/SaveCaseAll.asmx/SaveCase', JSON.stringify(form), option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }

  PostCus(form) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/Sparepart.asmx/Sparpart', JSON.stringify(form), option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }

  GetDevice(form) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/StockList.asmx/stock', JSON.stringify(form), option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }
  //#endregion
  GetTran(form) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/SaveCaseAll.asmx/SaveCase', JSON.stringify(form), option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }

  GenReport(tran) {
    return new Promise((resovle, reject) => {

      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/Web/GenerateReport.aspx' + '?tranid=' + tran.tranid,
        JSON.stringify(tran), option).subscribe(data => {
          resovle(data);
        }, error => {
          reject(error)
        });
    });
  }

  checkversion(form) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/CheckVersion.asmx/Devices', JSON.stringify(form), option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }

  checkBI(planID, insID) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.get(this.apiServer_url + '/API/WebService.asmx/CheckBI?planID=' + planID + '&insID=' + insID, option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }

  CheckJobResponse(planID) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.get(this.apiServer_url + '/API/WebService.asmx/CheckJobResponse?planID=' + planID, option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }

  SaveEvaluation(empID, planID, insID, type1, type2, type3, type4, type5) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.get(this.apiServer_url + '/API/WebService.asmx/SaveEvaluation?empID=' + empID + '&planID=' + planID
        + '&insID=' + insID + '&type1=' + type1 + '&type2=' + type2 + '&type3=' + type3
        + '&type4=' + type4 + '&type5=' + type5, option).subscribe(data => {
          resovle(data);
        }, error => {
          reject(error)
        });
    });
  }

  ChangeSparepart(planID, empID, spare1, qty1, spare2, qty2, spare3, qty3, spare4, qty4, spare5, qty5,) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.get(this.apiServer_url + '/API/WebService.asmx/ChangeSparepart?planID=' + planID + '&empID=' + empID + '&spare1=' + spare1 + '&qty1=' + qty1
        + '&spare2=' + spare2 + '&qty2=' + qty2 + '&spare3=' + spare3 + '&qty3=' + qty3
        + '&spare4=' + spare4 + '&qty4=' + qty4 + '&spare5=' + spare5 + '&qty5=' + qty5, option).subscribe(data => {
          resovle(data);
        }, error => {
          reject(error)
        });
    });
  }

  SelectSparepart(planID) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.get(this.apiServer_url + '/API/WebService.asmx/SelectSparepart?planID=' + planID, option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }

  DeleteSparepart(planID) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.get(this.apiServer_url + '/API/WebService.asmx/DeleteSparepart?planID=' + planID, option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }

  SignatureTech(form) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/WebService.asmx/SignatureTech', JSON.stringify(form), option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }

  SelectSignatureTech(planID, insID) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.get(this.apiServer_url + '/API/WebService.asmx/SelectSignatureTech?planID=' + planID + '&insID=' + insID, option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }

  UpdateInprogress(planID) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.get(this.apiServer_url + '/API/WebService.asmx/UpdateInprogress?planID=' + planID, option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }

  RequestSparepart(form) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/WebService.asmx/RequestSparepart', JSON.stringify(form), option).subscribe(data => {
          resovle(data);
        }, error => {
          reject(error)
        });
    });
  }

  SelectRequestSparepart(planID) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.get(this.apiServer_url + '/API/WebService.asmx/SelectRequestSparepart?planID=' + planID, option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }

  GetSparepart(form) {
    console.log('form', form);
    
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/Sparepart.asmx/Sparpart', JSON.stringify(form), option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }

  CheckRoundFilter(planID, installID) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.get(this.apiServer_url + '/API/WebService.asmx/CheckRoundFilter?planID=' + planID + '&installID=' + installID, option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }

  CheckSparepart(planID) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.get(this.apiServer_url + '/API/WebService.asmx/CheckSparepart?planID=' + planID , option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }

}

