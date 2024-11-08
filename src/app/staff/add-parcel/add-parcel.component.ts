import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-parcel',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './add-parcel.component.html',
  styleUrl: './add-parcel.component.css'
})
export class AddParcelComponent {

  public parcel: any = {
    senderName: "",
    senderPhoneNumber: "",
    senderGmail: "",
    senderAddress: "",
    receiverName: "",
    receiverPhoneNumber: "",
    receiverGmail: "",
    receiverAddress: "",
    weight: "",
    description: "",
    originStation: "",
    destinationStation: "",
    payment: ""
  };

  stations: string[] = [
    "Colombo Fort", "Maradana", "Dematagoda", "Kelaniya", "Wanawasala",
    "Hunupitiya", "Enderamulla", "Horape", "Ragama", "Walpola",
    "Batuwatte", "Bulugahagoda", "Ganemulla", "Yagoda", "Gampaha",
    "Daraluwa", "Bemmulla", "Magalegoda", "Heendeniya", "Veyangoda",
    "Wandurawa", "Keenawala", "Pallewala", "Ganegoda", "Wijayarajadahana",
    "Mirigama", "Wilwatte", "Botale", "Ambepussa", "Yattalgoda",
    "Buthgamuwa", "Alawwa", "Walakubura", "Polgahawela", "Panaleeya",
    "Tismalpola", "Yatagama", "Rambukkana", "Kadigamuwa", "Gangoda",
    "Ihalakotte", "Balana", "Kadugannawa", "Pilimatalawa", "Kandy",
    "Sarasaviuyana", "Peradeniya", "Koshinna", "Gelioya", "Polgaha Anga",
    "Weligalla", "Gangathilaka", "Kahatapitiya", "Gampola", "Tembligala",
    "Ulapane", "Nawalapitiya", "Inguruoya", "Galaboda", "Dekinda",
    "Watawala", "Ihalawatawala", "Rosella", "Hatton", "Kotagala",
    "Talawakele", "Watagoda", "Great Western", "Radella", "Nanuoya",
    "Perakumpura", "Ambewela", "Pattipola", "Ohiya", "Idalgasinna",
    "Haputale", "Diyatalawa", "Bandarawela", "Kinigama", "Heeloya",
    "Kitalella", "Ella", "Demodara", "Uduwara", "Haliela", "Badulla",
    "Matale", "Sarasaviuyana", "Mahaiyawa", "Katugastota", "Wattegama",
    "Ukuwela", "Matale", "Ragama Junction", "Peralanda", "Kandana",
    "Kapuwatta", "Ja-Ela", "Thudella", "Kudahakapola", "Alawathupitiya",
    "Seeduwa", "Liyanagemulla", "Katunayake", "Katunayake Airport",
    "Kurana", "Negombo", "Kattuwa", "Kochchikade", "Waikkala",
    "Bolawatta", "Lunuwila", "Thummodara", "Nainamadama", "Madampe",
    "Kakkapalliya", "Chilaw", "Bangadeniya", "Thoduwawa", "Mampuri",
    "Mundal", "Kudawewa", "Palavi", "Puttalam", "Kompannavidiya",
    "Kollupitiya", "Bambalapitiya", "Wellawatte", "Dehiwala",
    "Mount Lavinia", "Ratmalana", "Angulana", "Lunawa", "Moratuwa",
    "Koralawella", "Egoda Uyana", "Panadura", "Pinwatta", "Wadduwa",
    "Molligoda", "Kalutara North", "Kalutara South", "Katukurunda",
    "Payagala North", "Payagala South", "Maggona", "Beruwala",
    "Hettimulla", "Aluthgama", "Bentota", "Induruwa", "Maha Induruwa",
    "Kosgoda", "Ahungalla", "Pathegama", "Balapitiya", "Andadola",
    "Ambalangoda", "Urawatta", "Patabandimulla", "Hikkaduwa",
    "Kumarakanda", "Thiranagama", "Dodanduwa", "Rathgama", "Boossa",
    "Piyadigama", "Ginthota", "Richmond Hill", "Galle", "Katugoda",
    "Unawatuna", "Talpe", "Habaraduwa", "Koggala", "Kathaluwa",
    "Ahangama", "Midigama", "Weligama", "Polwathumodara", "Mirissa",
    "Kamburugamuwa", "Walgama", "Matara", "Anuradhapura", "Medawachchiya",
    "Vavuniya", "Omanthai", "Kilinochchi", "Elephant Pass", "Kodikamam",
    "Chavakachcheri", "Navatkuli", "Jaffna", "Kokuvil", "Kondavil",
    "Chunnakam", "Mallakam", "Tellippalai", "Kankesanthurai",
    "Tambuttegama", "Gal Oya Junction", "China Bay", "Trincomalee",
    "Batticaloa", "Maho Junction", "Gal Oya", "Murunkan", "Mannar",
    "Talaimannar"
  ];

  constructor(private http: HttpClient) {

  }

  public addParcel() {
    this.http.post("http://localhost:8080/parcel/add-parcel", this.parcel).subscribe((data) => {
      alert("Parcel Information Add Sucsesfull !!!");
      clear
    })
  }

}
