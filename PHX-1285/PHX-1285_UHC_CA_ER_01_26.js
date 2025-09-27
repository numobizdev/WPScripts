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

//Medical plans Choice Simplified
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48307")){
	this.getField("PlanLegacyPKCS1").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48308")){
	this.getField("PlanLegacyPKCS2").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48311")){
	this.getField("PlanLegacyPKCS3").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48318")){
	this.getField("PlanLegacyPKCS4").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48280")){
	this.getField("PlanLegacyPKCS5").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48281")){
	this.getField("PlanLegacyPKCS6").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48284")){
	this.getField("PlanLegacyPKCS7").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48290")){
	this.getField("PlanLegacyPKCS8").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48310")){
	this.getField("PlanLegacyPKCS9").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48312")){
	this.getField("PlanLegacyPKCS10").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48306")){
	this.getField("PlanLegacyPKCS11").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48315")){
	this.getField("PlanLegacyPKCS12").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48283")){
	this.getField("PlanLegacyPKCS13").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48285")){
	this.getField("PlanLegacyPKCS14").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48274")){
    this.getField("PlanLegacyPKCS15").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48275")){
	this.getField("PlanLegacyPKCS16").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48313")){
	this.getField("PlanLegacyPKCS17").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48314")){
	this.getField("PlanLegacyPKCS18").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48316")){
	this.getField("PlanLegacyPKCS19").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48319")){
	this.getField("PlanLegacyPKCS20").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48286")){
	this.getField("PlanLegacyPKCS21").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48287")){
	this.getField("PlanLegacyPKCS22").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48288")){
	this.getField("PlanLegacyPKCS23").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48291")){
	this.getField("PlanLegacyPKCS24").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48305")){
	this.getField("PlanLegacyPKCS25").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48309")){
	this.getField("PlanLegacyPKCS26").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48317")){
	this.getField("PlanLegacyPKCS27").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48282")){
	this.getField("PlanLegacyPKCS28").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48289")){
	this.getField("PlanLegacyPKCS29").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48324")){
	this.getField("PlanLegacyPKCS30").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48320")){
	this.getField("PlanLegacyPKCS31").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48321")){
	this.getField("PlanLegacyPKCS32").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48270")){
	this.getField("PlanLegacyPKCS33").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48266")){
	this.getField("PlanLegacyPKCS34").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48265")){
	this.getField("PlanLegacyPKCS35").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48293")){
	this.getField("PlanLegacyPKCS36").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48294")){
	this.getField("PlanLegacyPKCS37").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48292")){
	this.getField("PlanLegacyPKCS38").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48325")){
	    this.getField("PlanLegacyPKCS39").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48322")){
	this.getField("PlanLegacyPKCS40").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48323")){
	this.getField("PlanLegacyPKCS41").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48326")){
	this.getField("PlanLegacyPKCS42").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48271")){
	this.getField("PlanLegacyPKCS43").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48267")){
	this.getField("PlanLegacyPKCS44").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48268")){
	this.getField("PlanLegacyPKCS45").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48272")){
	this.getField("PlanLegacyPKCS46").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48297")){
	this.getField("PlanLegacyPKCS47").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48295")){
	    this.getField("PlanLegacyPKCS48").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48296")){
	this.getField("PlanLegacyPKCS49").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48298")){
	this.getField("PlanLegacyPKCS50").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48327")){
	this.getField("PlanLegacyPKCS51").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48273")){
	this.getField("PlanLegacyPKCS52").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48299")){
	this.getField("PlanLegacyPKCS53").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48300")){
	this.getField("PlanLegacyPKCS54").value = "Yes"
}

//Medical Plans Multi-Choice
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48278")){
	this.getField("PlanLegacyPKMC1").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48301")){
	this.getField("PlanLegacyPKMC2").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48277")){
	this.getField("PlanLegacyPKMC3").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48302")){
	this.getField("PlanLegacyPKMC4").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48276")){
	this.getField("PlanLegacyPKMC5").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48303")){
	this.getField("PlanLegacyPKMC6").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "42622")){
	this.getField("PlanLegacyPKMC7").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48279")){
	this.getField("PlanLegacyPKMC8").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48304")){
	this.getField("PlanLegacyPKMC9").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48263")){
	this.getField("PlanLegacyPKMC10").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48264")){
	this.getField("PlanLegacyPKMC11").value = "Yes"
}
if (await checkAnyNumberedFieldMatches("MedPlans#PlanLegacyPk", "48269")){
	this.getField("PlanLegacyPKMC12").value = "Yes"
}

//Validate if All Plans checkbox is checked
if(await checkAllNumberedFieldsMatch("PlanLegacyPKCS#", "Yes")) {
    this.getField("AllPlansCheck").value = "true";
 }
//Validate if All Plans Multi-Choice checkbox is checked
if(await checkAllNumberedFieldsMatch("PlanLegacyPKMC#", "Yes")) {
    this.getField("AllPlansMCCheck").value = "true";
}
 