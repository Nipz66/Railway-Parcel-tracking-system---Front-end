import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-parcel',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-parcel.component.html',
  styleUrl: './add-parcel.component.css'
})
export class AddParcelComponent {
  @ViewChild('parcelForm') parcelForm!: NgForm;

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

  // Existing stations array...
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
  ].sort();


  constructor(private http: HttpClient) { }

  public addParcel() {
    // Mark all fields as touched to trigger validation
    Object.keys(this.parcelForm.controls).forEach(field => {
      const control = this.parcelForm.controls[field];
      control.markAsTouched();
    });

    // Check form validity
    if (this.parcelForm.invalid) {
      this.showValidationErrors();
      return;
    }

    // Proceed with parcel addition if form is valid
    console.log("Parcel data being sent:", this.parcel);

    this.http.post("http://localhost:8080/parcel/add-parcel", this.parcel).subscribe(
      (data) => {
        alert("Parcel Information Added Successfully!!!");
        this.resetForm();
      },
      (error) => {
        console.error("Error adding parcel:", error);
        alert("Failed to add parcel. Please try again.");
      }
    );
  }

  private showValidationErrors() {
    let errorMessage = "Please fill all required fields correctly:\n";

    if (!this.parcel.senderName) errorMessage += "- Sender Name\n";
    if (!this.parcel.senderPhoneNumber) errorMessage += "- Sender Phone Number\n";
    if (!this.parcel.senderAddress) errorMessage += "- Sender Address\n";
    if (!this.parcel.receiverName) errorMessage += "- Receiver Name\n";
    if (!this.parcel.receiverPhoneNumber) errorMessage += "- Receiver Phone Number\n";
    if (!this.parcel.receiverAddress) errorMessage += "- Receiver Address\n";
    if (!this.parcel.weight) errorMessage += "- Parcel Weight\n";
    if (!this.parcel.description) errorMessage += "- Parcel Description\n";
    if (!this.parcel.originStation) errorMessage += "- Origin Station\n";
    if (!this.parcel.destinationStation) errorMessage += "- Destination Station\n";
    if (!this.parcel.payment) errorMessage += "- Payment\n";

    alert(errorMessage);
  }

  private resetForm() {
    this.parcelForm.resetForm();
    this.parcel = {
      senderName: "", senderPhoneNumber: "", senderGmail: "", senderAddress: "",
      receiverName: "", receiverPhoneNumber: "", receiverGmail: "", receiverAddress: "",
      weight: "", description: "", originStation: "", destinationStation: "", payment: ""
    };
  }

  // Email validation method
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Phone number validation method
  validatePhoneNumber(phone: string): boolean {
    const phoneRegex = /^[0-9]{10}$/; // Assumes 10-digit phone number
    return phoneRegex.test(phone);
  }
}