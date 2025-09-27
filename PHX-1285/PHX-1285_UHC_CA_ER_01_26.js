//
const newBusiness = this.getField("NewBusiness");

if(true) {
    newBusiness.value = "1";
}

//
const BasicADDLife = this.getField("BasicADDLife");
const BasicADD_Elected = this.getField("BasicADD_Elected");
const BasicLife_Elected = this.getField("BasicLife_Elected");


if(BasicADD_Elected.value == "true" && BasicLife_Elected.value == "true") {
    BasicADDLife.value = "Yes";
}

//
const DependentBasicADDLife = this.getField("DependentBasicADDLife");
const DependentBasicADD_Elected = this.getField("DependentBasicADD_Elected");
const DependentBasicLife_Elected = this.getField("DependentBasicLife_Elected");


if(DependentBasicADD_Elected.value == "true" && DependentBasicLife_Elected.value == "true") {
    DependentBasicADDLife.value = "Yes";
}

//
const SupplementalADDLife = this.getField("SupplementalADDLife");
const SupplementalADD_Elected = this.getField("SupplementalADD_Elected");
const SupplementalLife_Elected = this.getField("SupplementalLife_Elected");


if(SupplementalLife_Elected.value == "true" && SupplementalADD_Elected.value == "true") {
    SupplementalADDLife.value = "Yes";
}

//
const SupplementalDepDADDLife = this.getField("SupplementalDepDADDLife");
const DependentSupplementalADD_Elected = this.getField("DependentSupplementalADD_Elected");
const DependentSupplementalLife_Elected = this.getField("DependentSupplementalLife_Elected");


if(DependentSupplementalLife_Elected.value == "true" && DependentSupplementalADD_Elected.value == "true") {
    SupplementalDepDADDLife.value = "Yes";
}

// MEDIAL AND DENTAL PLANS

const DentalPlanName1 = this.getField("DentalPlans1PlanName");
const DentalPlanName2 = this.getField("DentalPlans2PlanName");

const VisionPlanName1 = this.getField("VisionPlans1PlanName");

const CheckDentalDual = this.getField("CheckDentalDual");
const CheckDentalPlanPPO = this.getField("CheckDentalPlanPPO");
const DentalPPO = this.getField("DentalPPO");
const CheckDentalPlanPPO2 = this.getField("CheckDentalPlanPPO");
const DentalPPO2 = this.getField("DentalPPO");

const CheckDentalHMO = this.getField("CheckDentalHMO");
const DentalHMO = this.getField("DentalHMO");

const CheckVisionPlan = this.getField("CheckVisionPlan");


//Dental section

if (await countMatchingNumberedFieldsInclude("DentalPlans#PlanName", "HMO") =1){
	CheckDentalHMO.value = "Yes";
	DentalHMO.value = await getValueNumberedFielMatches("MedPlans#PlanName", "HMO", 1);
}

if (await countMatchingNumberedFieldsInclude("DentalPlans#PlanName", "PPO") >1) || ((await countMatchingNumberedFieldsInclude("DentalPlans#PlanName", "HMO") =1) && (await countMatchingNumberedFieldsInclude("DentalPlans#PlanName", "PPO") =1)){
	CheckDentalDual.value = "Yes";
}


if( VisionPlanName1 != null ) {
    CheckVisionPlan.value = "Yes";
}


if (await countMatchingNumberedFieldsInclude("DentalPlans#PlanName", "PPO") >=1){
	CheckDentalPlanPPO.value = "Yes";
	DentalPPO.value = await getValueNumberedFielMatches("MedPlans#PlanName", "PPO", 1);
	CheckDentalPlanPPO2.value = "Yes";
	DentalPPO2.value = await getValueNumberedFielMatches("MedPlans#PlanName", "PPO", 2);
}

//Medical plans
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48307")){
	this.getField("PlanLegacyPK1").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48308")){
	this.getField("PlanLegacyPK2").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48311")){
	this.getField("PlanLegacyPK3").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48318")){
	this.getField("PlanLegacyPK4").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48280")){
	this.getField("PlanLegacyPK5").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48281")){
	this.getField("PlanLegacyPK6").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48284")){
	this.getField("PlanLegacyPK7").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48290")){
	this.getField("PlanLegacyPK8").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48310")){
	this.getField("PlanLegacyPK9").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48312")){
	this.getField("PlanLegacyPK10").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48306")){
	this.getField("PlanLegacyPK11").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48315")){
	this.getField("PlanLegacyPK12").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48283")){
	this.getField("PlanLegacyPK13").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48285")){
	this.getField("PlanLegacyPK14").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48274")){
    this.getField("PlanLegacyPK15").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48275")){
	this.getField("PlanLegacyPK16").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48313")){
	this.getField("PlanLegacyPK17").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48314")){
	this.getField("PlanLegacyPK18").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48316")){
	this.getField("PlanLegacyPK19").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48319")){
	this.getField("PlanLegacyPK20").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48286")){
	this.getField("PlanLegacyPK21").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48287")){
	this.getField("PlanLegacyPK22").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48288")){
	this.getField("PlanLegacyPK23").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48291")){
	this.getField("PlanLegacyPK24").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48305")){
	this.getField("PlanLegacyPK25").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48309")){
	this.getField("PlanLegacyPK26").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48317")){
	            this.getField("PlanLegacyPK27").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48282")){
	this.getField("PlanLegacyPK28").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48289")){
	this.getField("PlanLegacyPK29").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48324")){
	this.getField("PlanLegacyPK30").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48320")){
	this.getField("PlanLegacyPK31").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48321")){
	this.getField("PlanLegacyPK32").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48270")){
	this.getField("PlanLegacyPK33").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48266")){
	this.getField("PlanLegacyPK34").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48265")){
	this.getField("PlanLegacyPK35").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48293")){
	this.getField("PlanLegacyPK36").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48294")){
	this.getField("PlanLegacyPK37").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48292")){
	this.getField("PlanLegacyPK38").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48325")){
	    this.getField("PlanLegacyPK39").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48322")){
	this.getField("PlanLegacyPK40").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48323")){
	this.getField("PlanLegacyPK41").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48326")){
	this.getField("PlanLegacyPK42").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48271")){
	this.getField("PlanLegacyPK43").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48267")){
	this.getField("PlanLegacyPK44").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48268")){
	this.getField("PlanLegacyPK45").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48272")){
	this.getField("PlanLegacyPK46").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48297")){
	this.getField("PlanLegacyPK47").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48295")){
	    this.getField("PlanLegacyPK48").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48296")){
	this.getField("PlanLegacyPK49").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48298")){
	this.getField("PlanLegacyPK50").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48327")){
	this.getField("PlanLegacyPK51").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48273")){
	this.getField("PlanLegacyPK52").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48299")){
	this.getField("PlanLegacyPK53").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48300")){
	this.getField("PlanLegacyPK54").value = "Yes"
}

//Medical Plans Multi-Choice
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48278")){
	this.getField("PlanLegacyPKMC55").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48301")){
	this.getField("PlanLegacyPKMC56").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48277")){
	this.getField("PlanLegacyPKMC57").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48302")){
	this.getField("PlanLegacyPKMC58").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48276")){
	this.getField("PlanLegacyPKMC59").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48303")){
	this.getField("PlanLegacyPKMC60").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "42622")){
	this.getField("PlanLegacyPKMC61").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48279")){
	this.getField("PlanLegacyPKMC62").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48304")){
	this.getField("PlanLegacyPKMC63").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48263")){
	this.getField("PlanLegacyPKMC64").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48264")){
	this.getField("PlanLegacyPKMC65").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPK", "48269")){
	this.getField("PlanLegacyPKMC66").value = "Yes"
}

//Validate if All Plans checkbox is checked
if(await checkAllNumberedFieldsMatch("PlanLegacyPK#", "Yes")) {
    this.getField("AllPlansCheck").value = "true";
 }
//Validate if All Plans Multi-Choice checkbox is checked
if(await checkAllNumberedFieldsMatch("PlanLegacyPKMC#", "Yes")) {
    this.getField("AllPlansMCCheck").value = "true";
}
 