import { Graph } from "react-d3-graph";
import React from 'react';
import {
  MdImportantDevices,
  // MdCardGiftcard,
  MdLoyalty,
} from 'react-icons/md';
import {ToastsContainer, ToastsContainerPosition, ToastsStore} from 'react-toasts';

// graph payload (with minimalist structure)
const data1 = {
	links: [{
			source: "1108",
			target: "spark_launcher"
		},
		{
			source: "1108",
			target: "com.twitter.spam.scalding.fake_accounts.SevenDayRetentionBatchJob"
		},
		{
			source: "1108",
			target: "com.twitter.ssa.business_dau.job.business_uaf.SsaBusinessTreatmentUafJob1"
		},
		{
			source: "com.twitter.ssa.business_dau.job.business_uaf.SsaBusinessTreatmentUafJob2",
			target: "118718"
		},
		{
			source: "118718",
			target: "com.twitter.ssa.business_dau.job.business_uaf.SsaBusinessTreatmentDauToVerticaJob1"
		},
		{
			source: "118718",
			target: "com.twitter.ssa.business_dau.job.business_uaf.SsaBusinessTreatmentDauToVerticaJob2"
		}
	],
	nodes: [{
			id: "1108",
			domain: "HDFS",
			role: "unknown",
			environment: 2,
type: "dataset"
		},
		{
			id: "spark_launcher",
			domain: "spark",
			role: "hjain",
			environment: 2,
type: "app",symbolType : "square"
		},
		{
			id: "com.twitter.spam.scalding.fake_accounts.SevenDayRetentionBatchJob",
			domain: "scalding",
			role: "abuse",
			environment: 2,
type: "app",symbolType : "square"
		},
		{
			id: "com.twitter.ssa.business_dau.job.business_uaf.SsaBusinessTreatmentUafJob1",
			domain: "scalding",
			role: "ssa-business-dau",
			environment: 2,
type: "app", symbolType : "square"
		},
		{
			id: "com.twitter.ssa.business_dau.job.business_uaf.SsaBusinessTreatmentUafJob2",
			domain: "scalding",
			role: "ssa-business-dau",
			environment: 2,
            type: "app",
            symbolType : "square"
		},
		{
			id: "118718",
			domain: "HDFS",
			role: "unknown",
			environment: 2,
            type: "dataset"
		},
		{
			id: "com.twitter.ssa.business_dau.job.business_uaf.SsaBusinessTreatmentDauToVerticaJob1",
			domain: "scalding",
			role: "ssa-business-dau",
			environment: 2,
type: "app", symbolType : "square"
		},
		{
			id: "com.twitter.ssa.business_dau.job.business_uaf.SsaBusinessTreatmentDauToVerticaJob2",
			domain: "scalding",
			role: "ssa-business-dau",
			environment: 2,
type: "app", symbolType : "square"
		}
	]
};

const data = {
               "links": [
                 {
                   "source": "viewfs://hadoop-proc-nn.atla.twitter.com/logs/tfe_inc_auth_requests/yyyy/mm/dd/hh",
                   "target": "logpipeline-replicator-proc-atla"
                 },
                 {
                   "source": "com.twitter.coremetrics.active_users.user_audits.tfe.UserAuditsTfeBatchJob",
                   "target": "viewfs://hadoop-proc-nn.atla.twitter.com/logs/tfe_inc_auth_requests/yyyy/mm/dd/hh"
                 },
                 {
                   "source": "viewfs://hadoop-proc-nn.atla.twitter.com/logs/tfe_inc_auth_requests/yyyy/mm/dd/hh",
                   "target": "dal-backfill-tool"
                 },
                 {
                   "source": "com.twitter.coremetrics.active_users.user_audits.tfe.UserAuditsTfeBatchJob",
                   "target": "viewfs://hadoop-proc-nn.atla.twitter.com/logs/tfe_inc_auth_requests/yyyy/mm/dd/hh"
                 },
                 {
                   "source": "viewfs://hadoop-proc-nn.atla.twitter.com/logs/tfe_inc_auth_requests/yyyy/mm/dd/hh",
                   "target": "demux-replicator-release-proc-atla"
                 },
                 {
                   "source": "com.twitter.coremetrics.active_users.user_audits.tfe.UserAuditsTfeBatchJob",
                   "target": "viewfs://hadoop-proc-nn.atla.twitter.com/logs/tfe_inc_auth_requests/yyyy/mm/dd/hh"
                 },
                 {
                   "source": "viewfs://hadoop-proc-nn.atla.twitter.com/user/coremetrics/active_users/user_audits/tfe/yyyy/mm/dd",
                   "target": "com.twitter.coremetrics.active_users.user_audits.tfe.UserAuditsTfeBatchJob"
                 },
                 {
                   "source": "com.twitter.data_quality.jobs.user_audits_final.UserAuditsFinalBatchJob",
                   "target": "viewfs://hadoop-proc-nn.atla.twitter.com/user/coremetrics/active_users/user_audits/tfe/yyyy/mm/dd"
                 },
                 {
                   "source": "viewfs://hadoop-dw2-nn.smf1.twitter.com/user/analytics/data/user_audits_final/yyyy/mm/dd",
                   "target": "com.twitter.data_quality.jobs.user_audits_final.UserAuditsFinalBatchJob"
                 },
                 {
                   "source": "viewfs://hadoop-proc-nn.atla.twitter.com/logs/user_updates/yyyy/mm/dd/hh",
                   "target": "demux-replicator-release-proc-atla"
                 },
                 {
                   "source": "User Id Snapshot",
                   "target": "viewfs://hadoop-proc-nn.atla.twitter.com/logs/user_updates/yyyy/mm/dd/hh"
                 },
                 {
                   "source": "viewfs://hadoop-proc-nn.atla.twitter.com/logs/user_updates/yyyy/mm/dd/hh",
                   "target": "dal-backfill-tool"
                 },
                 {
                   "source": "User Id Snapshot",
                   "target": "viewfs://hadoop-proc-nn.atla.twitter.com/logs/user_updates/yyyy/mm/dd/hh"
                 },
                 {
                   "source": "viewfs://hadoop-proc-nn.atla.twitter.com/user/gizmoduck/data/user_id_snapshot/yyyy-mm-dd-hh",
                   "target": "User Id Snapshot"
                 },
                 {
                   "source": "com.twitter.gizmoduck.snapshot.StableSnapshotJob",
                   "target": "viewfs://hadoop-proc-nn.atla.twitter.com/user/gizmoduck/data/user_id_snapshot/yyyy-mm-dd-hh"
                 },
                 {
                   "source": "viewfs://hadoop-proc-nn.atla.twitter.com/user/gizmoduck/data/stable_user_snapshot/yyyy-mm-dd-hh/0",
                   "target": "com.twitter.gizmoduck.snapshot.StableSnapshotJob"
                 },
                 {
                   "source": "User Snapshot",
                   "target": "viewfs://hadoop-proc-nn.atla.twitter.com/user/gizmoduck/data/stable_user_snapshot/yyyy-mm-dd-hh/0"
                 },
                 {
                   "source": "User Snapshot",
                   "target": "viewfs://hadoop-proc-nn.atla.twitter.com/user/gizmoduck/data/user_snapshot/yyyy-mm-dd-hh"
                 },
                 {
                   "source": "User Snapshot",
                   "target": "viewfs://hadoop-proc-nn.atla.twitter.com/logs/user_updates/yyyy/mm/dd/hh"
                 },
                 {
                   "source": "viewfs://hadoop-proc-nn.atla.twitter.com/user/gizmoduck/data/user_snapshot/yyyy-mm-dd-hh",
                   "target": "User Snapshot"
                 },
                 {
                   "source": "viewfs://hadoop-proc-nn.atla.twitter.com/logs/gizmoduck_user_modifications/yyyy/mm/dd/hh",
                   "target": "logpipeline-replicator-proc-atla"
                 },
                 {
                   "source": "User Snapshot",
                   "target": "viewfs://hadoop-proc-nn.atla.twitter.com/logs/gizmoduck_user_modifications/yyyy/mm/dd/hh"
                 },
                 {
                   "source": "usersource.snapshot.combined",
                   "target": "viewfs://hadoop-proc-nn.atla.twitter.com/user/gizmoduck/data/user_snapshot/yyyy-mm-dd-hh"
                 },
                 {
                   "source": "viewfs://hadoop-proc-nn.atla.twitter.com/user/gizmoduck/data/user_snapshot/yyyy-mm-dd-hh",
                   "target": "proc-user"
                 },
                 {
                   "source": "viewfs://hadoop-proc-nn.atla.twitter.com/user/usersource/snapshot/combined/yyyy/mm/dd/hh",
                   "target": "usersource.snapshot.combined"
                 },
                 {
                   "source": "com.twitter.data_quality.jobs.user_audits_final.UserAuditsFinalBatchJob",
                   "target": "viewfs://hadoop-proc-nn.atla.twitter.com/user/usersource/snapshot/combined/yyyy/mm/dd/hh"
                 }
               ],
               "nodes": [
                 {
                   "name": 1118,
                   "id": "viewfs://hadoop-proc-nn.atla.twitter.com/logs/tfe_inc_auth_requests/yyyy/mm/dd/hh",
                   "domain": "HDFS",
                   "role": "unknown",
                   "metadata": {
                     "id": 1118,
                     "logicalDatasetId": 488,
                     "storageType": {
                       "name": "HDFS"
                     },
                     "url": {
                       "url": "viewfs://hadoop-proc-nn.atla.twitter.com/logs/tfe_inc_auth_requests/yyyy/mm/dd/hh"
                     },
                     "segmentType": 1,
                     "location": {
                       "locationType": {
                         "name": "hadoop-cluster"
                       },
                       "name": "proc-atla"
                     },
                     "creation": {
                       "role": "unknown",
                       "time": {
                         "millis": 1447291939000
                       },
                       "appType": "unknown"
                     },
                     "activeStateInfo": {
                       "activeState": 1,
                       "activeStateUpdatedAt": {
                         "millis": 1447291939000
                       }
                     }
                   },
                   "type": "dataset",
                   "symbolType": "circle"
                 },
                 {
                   "name": "logpipeline-replicator-proc-atla",
                   "id": "logpipeline-replicator-proc-atla",
                   "domain": "logs",
                   "role": "datapipeline",
                   "metadata": {
                     "name": "logpipeline-replicator-proc-atla",
                     "domain": "logs",
                     "role": "datapipeline",
                     "environment": 2
                   },
                   "type": "app",
                   "symbolType": "square"
                 },
                 {
                   "name": "com.twitter.coremetrics.active_users.user_audits.tfe.UserAuditsTfeBatchJob",
                   "id": "com.twitter.coremetrics.active_users.user_audits.tfe.UserAuditsTfeBatchJob",
                   "domain": "scalding",
                   "role": "coremetrics",
                   "metadata": {
                     "name": "com.twitter.coremetrics.active_users.user_audits.tfe.UserAuditsTfeBatchJob",
                     "domain": "scalding",
                     "role": "coremetrics",
                     "environment": 2
                   },
                   "type": "app",
                   "symbolType": "square"
                 },
                 {
                   "name": "dal-backfill-tool",
                   "id": "dal-backfill-tool",
                   "domain": "ad-hoc",
                   "role": "analytics",
                   "metadata": {
                     "name": "dal-backfill-tool",
                     "domain": "ad-hoc",
                     "role": "analytics",
                     "environment": 2
                   },
                   "type": "app",
                   "symbolType": "square"
                 },
                 {
                   "name": "demux-replicator-release-proc-atla",
                   "id": "demux-replicator-release-proc-atla",
                   "domain": "logs",
                   "role": "datapipeline",
                   "metadata": {
                     "name": "demux-replicator-release-proc-atla",
                     "domain": "logs",
                     "role": "datapipeline",
                     "environment": 2
                   },
                   "type": "app",
                   "symbolType": "square"
                 },
                 {
                   "name": 5982,
                   "id": "viewfs://hadoop-proc-nn.atla.twitter.com/user/coremetrics/active_users/user_audits/tfe/yyyy/mm/dd",
                   "domain": "HDFS",
                   "role": "unknown",
                   "metadata": {
                     "id": 5982,
                     "logicalDatasetId": 4145,
                     "storageType": {
                       "name": "HDFS"
                     },
                     "url": {
                       "url": "viewfs://hadoop-proc-nn.atla.twitter.com/user/coremetrics/active_users/user_audits/tfe/yyyy/mm/dd"
                     },
                     "segmentType": 1,
                     "location": {
                       "locationType": {
                         "name": "hadoop-cluster"
                       },
                       "name": "proc-atla"
                     },
                     "creation": {
                       "role": "unknown",
                       "time": {
                         "millis": 1487366279000
                       },
                       "appType": "unknown"
                     },
                     "activeStateInfo": {
                       "activeState": 1,
                       "activeStateUpdatedAt": {
                         "millis": 1487366279000
                       }
                     }
                   },
                   "type": "dataset",
                   "symbolType": "circle"
                 },
                 {
                   "name": "com.twitter.data_quality.jobs.user_audits_final.UserAuditsFinalBatchJob",
                   "id": "com.twitter.data_quality.jobs.user_audits_final.UserAuditsFinalBatchJob",
                   "domain": "scalding",
                   "role": "coremetrics",
                   "metadata": {
                     "name": "com.twitter.data_quality.jobs.user_audits_final.UserAuditsFinalBatchJob",
                     "domain": "scalding",
                     "role": "coremetrics",
                     "environment": 2
                   },
                   "type": "app",
                   "symbolType": "square"
                 },
                 {
                   "name": 1716,
                   "id": "viewfs://hadoop-dw2-nn.smf1.twitter.com/user/analytics/data/user_audits_final/yyyy/mm/dd",
                   "domain": "HDFS",
                   "role": "unknown",
                   "metadata": {
                     "id": 1716,
                     "logicalDatasetId": 1108,
                     "storageType": {
                       "name": "HDFS"
                     },
                     "url": {
                       "url": "viewfs://hadoop-dw2-nn.smf1.twitter.com/user/analytics/data/user_audits_final/yyyy/mm/dd"
                     },
                     "segmentType": 1,
                     "location": {
                       "locationType": {
                         "name": "hadoop-cluster"
                       },
                       "name": "dw2-smf1"
                     },
                     "creation": {
                       "role": "unknown",
                       "time": {
                         "millis": 1459148485000
                       },
                       "appType": "unknown"
                     },
                     "activeStateInfo": {
                       "activeState": 1,
                       "activeStateUpdatedAt": {
                         "millis": 1459148485000
                       }
                     }
                   },
                   "type": "dataset",
                   "symbolType": "circle"
                 },
                 {
                   "name": 736,
                   "id": "viewfs://hadoop-proc-nn.atla.twitter.com/logs/user_updates/yyyy/mm/dd/hh",
                   "domain": "HDFS",
                   "role": "unknown",
                   "metadata": {
                     "id": 736,
                     "logicalDatasetId": 513,
                     "storageType": {
                       "name": "HDFS"
                     },
                     "url": {
                       "url": "viewfs://hadoop-proc-nn.atla.twitter.com/logs/user_updates/yyyy/mm/dd/hh"
                     },
                     "segmentType": 1,
                     "location": {
                       "locationType": {
                         "name": "hadoop-cluster"
                       },
                       "name": "proc-atla"
                     },
                     "creation": {
                       "role": "unknown",
                       "time": {
                         "millis": 1446769068000
                       },
                       "appType": "unknown"
                     },
                     "activeStateInfo": {
                       "activeState": 1,
                       "activeStateUpdatedAt": {
                         "millis": 1446769068000
                       }
                     }
                   },
                   "type": "dataset",
                   "symbolType": "circle"
                 },
                 {
                   "name": "User Id Snapshot",
                   "id": "User Id Snapshot",
                   "domain": "scalding",
                   "role": "gizmoduck",
                   "metadata": {
                     "name": "User Id Snapshot",
                     "domain": "scalding",
                     "role": "gizmoduck",
                     "environment": 2
                   },
                   "type": "app",
                   "symbolType": "square"
                 },
                 {
                   "name": 33268,
                   "id": "viewfs://hadoop-proc-nn.atla.twitter.com/user/gizmoduck/data/user_id_snapshot/yyyy-mm-dd-hh",
                   "domain": "HDFS",
                   "role": "unknown",
                   "metadata": {
                     "id": 33268,
                     "logicalDatasetId": 10213,
                     "storageType": {
                       "name": "HDFS"
                     },
                     "url": {
                       "url": "viewfs://hadoop-proc-nn.atla.twitter.com/user/gizmoduck/data/user_id_snapshot/yyyy-mm-dd-hh"
                     },
                     "segmentType": 2,
                     "location": {
                       "locationType": {
                         "name": "hadoop-cluster"
                       },
                       "name": "proc-atla"
                     },
                     "creation": {
                       "role": "unknown",
                       "time": {
                         "millis": 1532405002000
                       },
                       "appType": "unknown"
                     },
                     "activeStateInfo": {
                       "activeState": 1,
                       "activeStateUpdatedAt": {
                         "millis": 1539816048000
                       }
                     }
                   },
                   "type": "dataset",
                   "symbolType": "circle"
                 },
                 {
                   "name": "com.twitter.gizmoduck.snapshot.StableSnapshotJob",
                   "id": "com.twitter.gizmoduck.snapshot.StableSnapshotJob",
                   "domain": "scalding",
                   "role": "gizmoduck",
                   "metadata": {
                     "name": "com.twitter.gizmoduck.snapshot.StableSnapshotJob",
                     "domain": "scalding",
                     "role": "gizmoduck",
                     "environment": 2
                   },
                   "type": "app",
                   "symbolType": "square"
                 },
                 {
                   "name": 99536,
                   "id": "viewfs://hadoop-proc-nn.atla.twitter.com/user/gizmoduck/data/stable_user_snapshot/yyyy-mm-dd-hh/0",
                   "domain": "HDFS",
                   "role": "unknown",
                   "metadata": {
                     "id": 99536,
                     "logicalDatasetId": 72458,
                     "storageType": {
                       "name": "HDFS"
                     },
                     "url": {
                       "url": "viewfs://hadoop-proc-nn.atla.twitter.com/user/gizmoduck/data/stable_user_snapshot/yyyy-mm-dd-hh/0"
                     },
                     "segmentType": 2,
                     "location": {
                       "locationType": {
                         "name": "hadoop-cluster"
                       },
                       "name": "proc-atla"
                     },
                     "creation": {
                       "role": "unknown",
                       "time": {
                         "millis": 1554249922000
                       },
                       "appType": "unknown"
                     },
                     "activeStateInfo": {
                       "activeState": 1,
                       "activeStateUpdatedAt": {
                         "millis": 1554249922000
                       }
                     }
                   },
                   "type": "dataset",
                   "symbolType": "circle"
                 },
                 {
                   "name": "User Snapshot",
                   "id": "User Snapshot",
                   "domain": "scalding",
                   "role": "gizmoduck",
                   "metadata": {
                     "name": "User Snapshot",
                     "domain": "scalding",
                     "role": "gizmoduck",
                     "environment": 2
                   },
                   "type": "app",
                   "symbolType": "square"
                 },
                 {
                   "name": 32972,
                   "id": "viewfs://hadoop-proc-nn.atla.twitter.com/user/gizmoduck/data/user_snapshot/yyyy-mm-dd-hh",
                   "domain": "HDFS",
                   "role": "unknown",
                   "metadata": {
                     "id": 32972,
                     "logicalDatasetId": 9920,
                     "storageType": {
                       "name": "HDFS"
                     },
                     "url": {
                       "url": "viewfs://hadoop-proc-nn.atla.twitter.com/user/gizmoduck/data/user_snapshot/yyyy-mm-dd-hh"
                     },
                     "segmentType": 2,
                     "location": {
                       "locationType": {
                         "name": "hadoop-cluster"
                       },
                       "name": "proc-atla"
                     },
                     "creation": {
                       "role": "unknown",
                       "time": {
                         "millis": 1532393092000
                       },
                       "appType": "unknown"
                     },
                     "activeStateInfo": {
                       "activeState": 1,
                       "activeStateUpdatedAt": {
                         "millis": 1536684347000
                       }
                     }
                   },
                   "type": "dataset",
                   "symbolType": "circle"
                 },
                 {
                   "name": 592,
                   "id": "viewfs://hadoop-proc-nn.atla.twitter.com/logs/gizmoduck_user_modifications/yyyy/mm/dd/hh",
                   "domain": "HDFS",
                   "role": "unknown",
                   "metadata": {
                     "id": 592,
                     "logicalDatasetId": 376,
                     "storageType": {
                       "name": "HDFS"
                     },
                     "url": {
                       "url": "viewfs://hadoop-proc-nn.atla.twitter.com/logs/gizmoduck_user_modifications/yyyy/mm/dd/hh"
                     },
                     "segmentType": 1,
                     "location": {
                       "locationType": {
                         "name": "hadoop-cluster"
                       },
                       "name": "proc-atla"
                     },
                     "creation": {
                       "role": "unknown",
                       "time": {
                         "millis": 1446768740000
                       },
                       "appType": "unknown"
                     },
                     "activeStateInfo": {
                       "activeState": 1,
                       "activeStateUpdatedAt": {
                         "millis": 1446768740000
                       }
                     }
                   },
                   "type": "dataset",
                   "symbolType": "circle"
                 },
                 {
                   "name": "usersource.snapshot.combined",
                   "id": "usersource.snapshot.combined",
                   "domain": "scalding",
                   "role": "usersource",
                   "metadata": {
                     "name": "usersource.snapshot.combined",
                     "domain": "scalding",
                     "role": "usersource",
                     "environment": 2
                   },
                   "type": "app",
                   "symbolType": "square"
                 },
                 {
                   "name": "proc-user",
                   "id": "proc-user",
                   "domain": "replicator",
                   "role": "oxpecker",
                   "metadata": {
                     "name": "proc-user",
                     "domain": "replicator",
                     "role": "oxpecker",
                     "environment": 2
                   },
                   "type": "app",
                   "symbolType": "square"
                 },
                 {
                   "name": 2004,
                   "id": "viewfs://hadoop-proc-nn.atla.twitter.com/user/usersource/snapshot/combined/yyyy/mm/dd/hh",
                   "domain": "HDFS",
                   "role": "unknown",
                   "metadata": {
                     "id": 2004,
                     "logicalDatasetId": 1314,
                     "storageType": {
                       "name": "HDFS"
                     },
                     "url": {
                       "url": "viewfs://hadoop-proc-nn.atla.twitter.com/user/usersource/snapshot/combined/yyyy/mm/dd/hh"
                     },
                     "segmentType": 2,
                     "location": {
                       "locationType": {
                         "name": "hadoop-cluster"
                       },
                       "name": "proc-atla"
                     },
                     "creation": {
                       "role": "unknown",
                       "time": {
                         "millis": 1461792388000
                       },
                       "appType": "unknown"
                     },
                     "activeStateInfo": {
                       "activeState": 1,
                       "activeStateUpdatedAt": {
                         "millis": 1461792388000
                       }
                     }
                   },
                   "type": "dataset",
                   "symbolType": "circle"
                 }
               ]
             }



// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
 collapsible: true,
 height: 400,
 width: 1500,
directed: true,
highlightDegree: 2,
    highlightOpacity: 0.2,
    linkHighlightBehavior: true,
    maxZoom: 12,
    minZoom: 0.05,
    nodeHighlightBehavior: true,
    panAndZoom: false,
    staticGraph: false,
    automaticRearrangeAfterDropNode: true,
    collapsible: true,
    nodeHighlightBehavior: true,
    node: {
        color: "#6a82fb" ,
        highlightStrokeColor: "#fc5c7d",
        labelProperty: n => (n.type == 'app' ? `APP: ${n.name}` : `DB: ${n.domain}`),
        color: "#fc5c7d",
                fontColor: "black",
                fontSize: 10,
                fontWeight: "normal",
                highlightColor: "red",
                highlightFontSize: 14,
                highlightFontWeight: "bold",
                highlightStrokeWidth: 1.5,
                mouseCursor: "crosshair",
                opacity: 0.9,
                renderLabel: true,
                size: 300,
                strokeColor: "none",
                strokeWidth: 1.5,
                svg: "",
                symbolType: "circle",
                viewGenerator: null,
    },
    link: {
        highlightColor: "#fc5c7d",
        mouseCursor: "cursor",
                opacity: 1,
                semanticStrokeWidth: true,
                strokeWidth: 2,
                type: "STRAIGHT"
    }
};

// graph event callbacks
const onClickGraph = function() {
    window.alert(`Clicked the graph background`);
};

const onClickNode = function(nodeId) {
ToastsStore.info(`Location: ${nodeId} \n\n Owner: Core Data and Metrics \n\n Description: Stores user details`);
    //window.alert(`Storage Details: ${nodeId} \n Owner: Core Data and Metrics \n Description: Store user details`);
};

const onDoubleClickNode = function(nodeId) {
    window.alert(`Double clicked node ${nodeId}`);
};

//const onRightClickNode = function(event, nodeId) {
//    window.alert(`Right clicked node ${nodeId}`);
//};
//
//const onMouseOverNode = function(nodeId) {
//    window.alert(`Mouse over node ${nodeId}`);
//};

//const onMouseOutNode = function(nodeId) {
//    window.alert(`Mouse out node ${nodeId}`);
//};

const onClickLink = function(source, target) {
    window.alert(`Clicked link between ${source} and ${target}`);
};

const onRightClickLink = function(event, source, target) {
    window.alert(`Right clicked link between ${source} and ${target}`);
};

const onMouseOverLink = function(source, target) {
    window.alert(`Mouse over in link between ${source} and ${target}`);
};

const onMouseOutLink = function(source, target) {
    window.alert(`Mouse out link between ${source} and ${target}`);
};

const onNodePositionChange = function(nodeId, x, y) {
    window.alert(`Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`);
};
export default class DatasetLineageGraph extends React.Component {
    render() {
        return <div><Graph
    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
    data={data}
    config={myConfig}
    onClickNode={onClickNode}
    //onClickGraph={onClickGraph}
    onClickLink={onClickLink}
    //onRightClickLink={onRightClickLink}
    //onNodePositionChange={onNodePositionChange}
/><ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_CENTER} lightBackground/></div>;
    }
}
