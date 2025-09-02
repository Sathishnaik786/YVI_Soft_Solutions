import React from 'react'
import Industry_Gov from '../../../../assets/img/Services-icons/Industries_Government.jpg'
import HealthCare from '../../../../assets/img/Services-icons/healthcare.webp'
import Retail from '../../../../assets/img/Services-icons/retail.webp'
import Financial from '../../../../assets/img/Services-icons/financial.webp'
import Manufacturing from '../../../../assets/img/Services-icons/manufacturing.jpg'
import SCM_CBF from '../../../../assets/img/SCM_CBF.png'
import SCM_Analytics from '../../../../assets/img/SCM-Analytics.jpg'
import OracleCloudInfra from '../../../../assets/img/OracleCloudInfra.jpeg'
import CompleteFinancialMgmt from '../../../../assets/img/CompleteFinancialMgmt.jpg'
import AdvancedFinancialAnalytics from '../../../../assets/img/AdvancedFinancialAnalytics.jpg'
import RealtimeAnalytics from '../../../../assets/img/RealtimeAnalytics.jpg'
import OraFinAutoEff from '../../../../assets/img/OraFinAutoEff.jpg'
import OracleFCRM from '../../../../assets/img/Oracle-Fusion-Cloud-Risk-Management.jpg'
import OraclePPMO from '../../../../assets/img/OraclePPMO.png'
import OracleEPMCloud from '../../../../assets/img/OracleEPMCloud.jpg'
import OracleMarketingCloud from '../../../../assets/img/OracleMarketingCloud.jpeg'
import OracleSalesCloud from '../../../../assets/img/OracleSalesCloud.jpeg'
import OracleServiceCloud from '../../../../assets/img/OracleServiceCloud.jpeg'
import Data_Ingestion from '../../../../assets/img/Data_Ingestion.jpg'
import DataStorage from '../../../../assets/img/DataStorage.jpg'
import DataTransformation from '../../../../assets/img/DataTransformation.png'
import DataModelling from '../../../../assets/img/DataModelling.jpg'
import DataMigration from '../../../../assets/img/DataMigration.jpg'
import DataOrchestration from '../../../../assets/img/DataOrchestration.jpg'
import MachineLearningApplications from '../../../../assets/img/machine-learning-applications.jpg'
import BusinessIntelligence from '../../../../assets/img/BusinessIntelligence.jpeg'
import AutomatedReporting from '../../../../assets/img/Automated-Reporting.jpg'
import AIAssistants from '../../../../assets/img/AI-Assistants.png'
import DocumentSummarization from '../../../../assets/img/Document-Summarization.jpg'
import LLMEvaluation from '../../../../assets/img/LLMEvaluation.png'
import RAGApplications from '../../../../assets/img/RAGApplications.jpg'
import ToolAugmentedChatbots from '../../../../assets/img/ToolAugmentedChatbots.jpeg'
import AgenticAI from '../../../../assets/img/AgenticAI.png'
import RPAOperationalCost from '../../../../assets/img/RPAOperationalCost.jpeg'
import RPACustomerService from '../../../../assets/img/RPA-in-Customer-Service.png'
import RPAScalability from '../../../../assets/img/RPAScalability.jpg'
import ResearchUIUX from '../../../../assets/img/ResearchUIUX.png'
import UXDataVisualization from '../../../../assets/img/UXDataVisualization.jpg'
import UIUXConsulting from '../../../../assets/img/UIUX-consulting.jpg'
import UXAudit from '../../../../assets/img/UXAudit.jpg'
import UserExperienceTesting from '../../../../assets/img/UserExperienceTesting.jpg'
import MAD_1 from '../../../../assets/img/MAD_1.jpg'
import MAD_2 from '../../../../assets/img/MAD_2.jpg'
import MAD_3 from '../../../../assets/img/MAD_3.jpg'
import MAD_4 from '../../../../assets/img/MAD_4.jpg'
import MobileAppModernization from '../../../../assets/img/MobileAppModernization.jpg'
import MAD_6 from '../../../../assets/img/MAD_6.jpg'
import AIGeneratedContentDevelopment from '../../../../assets/img/AIGeneratedContentDevelopment.jpg'
import PersonalizedMarketingStrategies from '../../../../assets/img/PersonalizedMarketingStrategies.jpg'
import PredictiveAnalyticsandCampaignPlanning from '../../../../assets/img/PredictiveAnalyticsandCampaignPlanning.jpg'
import AutomatedSearchEngineOptimization from '../../../../assets/img/AutomatedSearchEngineOptimization.jpg'
import CreativeAssetProduction from '../../../../assets/img/CreativeAssetProduction.jpg'
import ExpertiseInGenerativeAI from '../../../../assets/img/ExpertiseInGenerativeAI.jpg'
import CommitmentToInnovation from '../../../../assets/img/CommitmentToInnovation.jpg'
import ScalableSolutions from '../../../../assets/img/ScalableSolutions.jpg'
import DataDrivenApproach from '../../../../assets/img/DataDrivenApproach.jpg'


const CardOne = ({image,headingText,content,dataAOS,classname}) => {
    const images={
        'Industry_Gov.jpg' : Industry_Gov,
        'HealthCare.webp' : HealthCare,
        'retail.webp' : Retail,
        'Financial.webp' : Financial,
        'Manufacturing.jpg' : Manufacturing,
        'SCM_CBF.png' : SCM_CBF,
        'SCM_Analytics.jpg' : SCM_Analytics,
        'OracleCloudInfra.jpeg' : OracleCloudInfra,
        'CompleteFinancialMgmt.jpg' : CompleteFinancialMgmt,
        'AdvancedFinancialAnalytics.jpg' : AdvancedFinancialAnalytics,
        'RealtimeAnalytics.jpg' : RealtimeAnalytics,
        'OraFinAutoEff.jpg' : OraFinAutoEff,
        'OracleFCRM.jpg' : OracleFCRM,
        'OraclePPMO.png' : OraclePPMO,
        'OracleEPMCloud.jpg' : OracleEPMCloud,
        'OracleMarketingCloud.jpeg' : OracleMarketingCloud,
        'OracleSalesCloud.jpeg' : OracleSalesCloud,
        'OracleServiceCloud.jpeg' : OracleServiceCloud,
        'Data_Ingestion.jpg': Data_Ingestion,
        'DataStorage.jpg': DataStorage,
        'DataTransformation.png': DataTransformation,
        'DataModelling.jpg': DataModelling,
        'DataMigration.jpg': DataMigration,
        'DataOrchestration.jpg': DataOrchestration,
        'MachineLearningApplications.jpg': MachineLearningApplications,
        'BusinessIntelligence.jpeg': BusinessIntelligence,
        'Automated-Reporting.jpg': AutomatedReporting,
        'AI-Assistants.png': AIAssistants,
        'Document-Summarization.jpg': DocumentSummarization,
        'LLMEvaluation.png': LLMEvaluation,
        'RAGApplications.jpg': RAGApplications,
        'ToolAugmentedChatbots.jpeg': ToolAugmentedChatbots,
        'AgenticAI.png': AgenticAI,
        'RPAOperationalCost.jpeg': RPAOperationalCost,
        'RPA-in-Customer-Service.png': RPACustomerService,
        'RPAScalability.jpg': RPAScalability,
        'ResearchUIUX.png': ResearchUIUX,
        'UXDataVisualization.jpg': UXDataVisualization,
        'UIUX-consulting.jpg': UIUXConsulting,
        'UXAudit.jpg': UXAudit,
        'UserExperienceTesting.jpg': UserExperienceTesting,
        'MAD_1.jpg': MAD_1,
        'MAD_2.jpg': MAD_2,
        'MAD_3.jpg': MAD_3,
        'MAD_4.jpg': MAD_4,
        'MobileAppModernization.jpg': MobileAppModernization,
        'MAD_6.jpg': MAD_6,
        'AIGeneratedContentDevelopment.jpg': AIGeneratedContentDevelopment,
        'PersonalizedMarketingStrategies.jpg': PersonalizedMarketingStrategies,
        'PredictiveAnalyticsandCampaignPlanning.jpg': PredictiveAnalyticsandCampaignPlanning,
        'AutomatedSearchEngineOptimization.jpg': AutomatedSearchEngineOptimization,
        'CreativeAssetProduction.jpg': CreativeAssetProduction,
        'ExpertiseInGenerativeAI.jpg': ExpertiseInGenerativeAI,
        'CommitmentToInnovation.jpg': CommitmentToInnovation,
        'ScalableSolutions.jpg': ScalableSolutions,
        'DataDrivenApproach.jpg': DataDrivenApproach
    }  
  return (
    
      <div className={`col-xl-${classname||4} col-md-6 d-flex aos-init aos-animate`} data-aos="zoom-out"  data-aos-delay={dataAOS||0}>
            <div className="service-item position-relative bg_white_light">
              <div> <img src={images[image]} className="img-fluid" alt=""/></div>
              <h4><span className="stretched-link">{headingText}</span></h4>
              <p>
                {content}
              </p>

            </div>
          </div>
    
  )
}

export default CardOne
