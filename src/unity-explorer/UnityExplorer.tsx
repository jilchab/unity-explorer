import React, {useEffect, useState} from "react";
import SplitterLayout from "react-splitter-layout";
import TreeView from "./TreeView"
import UnityYamlParser from './UnityYamlParser'
import PreviewManager from "./PreviewManager"
import arrow from "./tree-arrow.png"


const scene = `
%YAML 1.1\r
%TAG !u! tag:unity3d.com,2011:\r
--- !u!29 &1\r
OcclusionCullingSettings:\r
  m_ObjectHideFlags: 0\r
  serializedVersion: 2\r
  m_OcclusionBakeSettings:\r
    smallestOccluder: 5\r
    smallestHole: 0.25\r
    backfaceThreshold: 100\r
  m_SceneGUID: 00000000000000000000000000000000\r
  m_OcclusionCullingData: {fileID: 0}\r
--- !u!104 &2\r
RenderSettings:\r
  m_ObjectHideFlags: 0\r
  serializedVersion: 9\r
  m_Fog: 1\r
  m_FogColor: {r: 0.2264151, g: 0.16660732, b: 0.10395157, a: 1}\r
  m_FogMode: 3\r
  m_FogDensity: 0.006\r
  m_LinearFogStart: 0\r
  m_LinearFogEnd: 300\r
  m_AmbientSkyColor: {r: 0.10836775, g: 0.06261328, b: 0.023172967, a: 1}\r
  m_AmbientEquatorColor: {r: 0.114, g: 0.125, b: 0.133, a: 1}\r
  m_AmbientGroundColor: {r: 0.047, g: 0.043, b: 0.035, a: 1}\r
  m_AmbientIntensity: 1\r
  m_AmbientMode: 3\r
  m_SubtractiveShadowColor: {r: 0, g: 0, b: 0, a: 1}\r
  m_SkyboxMaterial: {fileID: 10304, guid: 0000000000000000f000000000000000, type: 0}\r
  m_HaloStrength: 0.5\r
  m_FlareStrength: 1\r
  m_FlareFadeSpeed: 3\r
  m_HaloTexture: {fileID: 0}\r
  m_SpotCookie: {fileID: 10001, guid: 0000000000000000e000000000000000, type: 0}\r
  m_DefaultReflectionMode: 0\r
  m_DefaultReflectionResolution: 128\r
  m_ReflectionBounces: 1\r
  m_ReflectionIntensity: 1\r
  m_CustomReflection: {fileID: 0}\r
  m_Sun: {fileID: 0}\r
  m_IndirectSpecularColor: {r: 0.37311953, g: 0.38074014, b: 0.3587274, a: 1}\r
  m_UseRadianceAmbientProbe: 0\r
--- !u!157 &3\r
LightmapSettings:\r
  m_ObjectHideFlags: 0\r
  serializedVersion: 12\r
  m_GIWorkflowMode: 1\r
  m_GISettings:\r
    serializedVersion: 2\r
    m_BounceScale: 1\r
    m_IndirectOutputScale: 1\r
    m_AlbedoBoost: 1\r
    m_EnvironmentLightingMode: 0\r
    m_EnableBakedLightmaps: 1\r
    m_EnableRealtimeLightmaps: 0\r
  m_LightmapEditorSettings:\r
    serializedVersion: 12\r
    m_Resolution: 2\r
    m_BakeResolution: 40\r
    m_AtlasSize: 1024\r
    m_AO: 0\r
    m_AOMaxDistance: 1\r
    m_CompAOExponent: 1\r
    m_CompAOExponentDirect: 0\r
    m_ExtractAmbientOcclusion: 0\r
    m_Padding: 2\r
    m_LightmapParameters: {fileID: 0}\r
    m_LightmapsBakeMode: 1\r
    m_TextureCompression: 1\r
    m_FinalGather: 0\r
    m_FinalGatherFiltering: 1\r
    m_FinalGatherRayCount: 256\r
    m_ReflectionCompression: 2\r
    m_MixedBakeMode: 2\r
    m_BakeBackend: 1\r
    m_PVRSampling: 1\r
    m_PVRDirectSampleCount: 32\r
    m_PVRSampleCount: 500\r
    m_PVRBounces: 2\r
    m_PVREnvironmentSampleCount: 500\r
    m_PVREnvironmentReferencePointCount: 2048\r
    m_PVRFilteringMode: 2\r
    m_PVRDenoiserTypeDirect: 0\r
    m_PVRDenoiserTypeIndirect: 0\r
    m_PVRDenoiserTypeAO: 0\r
    m_PVRFilterTypeDirect: 0\r
    m_PVRFilterTypeIndirect: 0\r
    m_PVRFilterTypeAO: 0\r
    m_PVREnvironmentMIS: 0\r
    m_PVRCulling: 1\r
    m_PVRFilteringGaussRadiusDirect: 1\r
    m_PVRFilteringGaussRadiusIndirect: 5\r
    m_PVRFilteringGaussRadiusAO: 2\r
    m_PVRFilteringAtrousPositionSigmaDirect: 0.5\r
    m_PVRFilteringAtrousPositionSigmaIndirect: 2\r
    m_PVRFilteringAtrousPositionSigmaAO: 1\r
    m_ExportTrainingData: 0\r
    m_TrainingDataDestination: TrainingData\r
    m_LightProbeSampleCountMultiplier: 4\r
  m_LightingDataAsset: {fileID: 112000000, guid: 94b109f58af8d5b48a09f9bb08153b04, type: 2}\r
  m_LightingSettings: {fileID: 4890085278179872738, guid: 3e187c51715a04644b9fb93fe01c2ee9, type: 2}\r
--- !u!196 &4\r
NavMeshSettings:\r
  serializedVersion: 2\r
  m_ObjectHideFlags: 0\r
  m_BuildSettings:\r
    serializedVersion: 2\r
    agentTypeID: 0\r
    agentRadius: 0.5\r
    agentHeight: 2\r
    agentSlope: 45\r
    agentClimb: 0.4\r
    ledgeDropHeight: 0\r
    maxJumpAcrossDistance: 0\r
    minRegionArea: 2\r
    manualCellSize: 0\r
    cellSize: 0.16666667\r
    manualTileSize: 0\r
    tileSize: 256\r
    accuratePlacement: 0\r
    maxJobWorkers: 0\r
    preserveTilesOutsideBounds: 0\r
    debug:\r
      m_Flags: 0\r
  m_NavMeshData: {fileID: 0}\r
--- !u!1 &85177811\r
GameObject:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  serializedVersion: 6\r
  m_Component:\r
  - component: {fileID: 85177812}\r
  - component: {fileID: 85177813}\r
  m_Layer: 0\r
  m_Name: UI\r
  m_TagString: Untagged\r
  m_Icon: {fileID: 0}\r
  m_NavMeshLayer: 0\r
  m_StaticEditorFlags: 0\r
  m_IsActive: 1\r
--- !u!4 &85177812\r
Transform:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 85177811}\r
  m_LocalRotation: {x: 0, y: 0, z: 0, w: 1}\r
  m_LocalPosition: {x: 0, y: 0, z: 0}\r
  m_LocalScale: {x: 1, y: 1, z: 1}\r
  m_Children:\r
  - {fileID: 653380161}\r
  - {fileID: 794614958}\r
  m_Father: {fileID: 0}\r
  m_RootOrder: 4\r
  m_LocalEulerAnglesHint: {x: 0, y: 0, z: 0}\r
--- !u!114 &85177813\r
MonoBehaviour:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 85177811}\r
  m_Enabled: 1\r
  m_EditorHideFlags: 0\r
  m_Script: {fileID: 11500000, guid: 8319c86df51628d499ad1475ae4a5aaa, type: 3}\r
  m_Name: \r
  m_EditorClassIdentifier: \r
  playerController: {fileID: 1729149754909008675}\r
  playerInput: {fileID: 1729149754909008674}\r
  textSwipe: {fileID: 834512656}\r
--- !u!1 &539625796\r
GameObject:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  serializedVersion: 6\r
  m_Component:\r
  - component: {fileID: 539625798}\r
  - component: {fileID: 539625797}\r
  m_Layer: 0\r
  m_Name: Spawner\r
  m_TagString: Untagged\r
  m_Icon: {fileID: 0}\r
  m_NavMeshLayer: 0\r
  m_StaticEditorFlags: 0\r
  m_IsActive: 1\r
--- !u!114 &539625797\r
MonoBehaviour:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 539625796}\r
  m_Enabled: 1\r
  m_EditorHideFlags: 0\r
  m_Script: {fileID: 11500000, guid: 19d74074caa985a4aa1d34acb4a326e7, type: 3}\r
  m_Name: \r
  m_EditorClassIdentifier: \r
  collectible: {fileID: 2065868460}\r
  player: {fileID: 1729149754909008675}\r
--- !u!4 &539625798\r
Transform:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 539625796}\r
  m_LocalRotation: {x: 0, y: 0, z: 0, w: 1}\r
  m_LocalPosition: {x: 2.1683228, y: -1.3515015, z: 10.590928}\r
  m_LocalScale: {x: 1, y: 1, z: 1}\r
  m_Children: []\r
  m_Father: {fileID: 0}\r
  m_RootOrder: 2\r
  m_LocalEulerAnglesHint: {x: 0, y: 0, z: 0}\r
--- !u!1 &653380160\r
GameObject:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  serializedVersion: 6\r
  m_Component:\r
  - component: {fileID: 653380161}\r
  - component: {fileID: 653380164}\r
  - component: {fileID: 653380163}\r
  - component: {fileID: 653380162}\r
  m_Layer: 5\r
  m_Name: Canvas\r
  m_TagString: Untagged\r
  m_Icon: {fileID: 0}\r
  m_NavMeshLayer: 0\r
  m_StaticEditorFlags: 0\r
  m_IsActive: 1\r
--- !u!224 &653380161\r
RectTransform:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 653380160}\r
  m_LocalRotation: {x: 0, y: 0, z: 0, w: 1}\r
  m_LocalPosition: {x: 0, y: 0, z: 0}\r
  m_LocalScale: {x: 0, y: 0, z: 0}\r
  m_Children:\r
  - {fileID: 834512654}\r
  m_Father: {fileID: 85177812}\r
  m_RootOrder: 0\r
  m_LocalEulerAnglesHint: {x: 0, y: 0, z: 0}\r
  m_AnchorMin: {x: 0, y: 0}\r
  m_AnchorMax: {x: 0, y: 0}\r
  m_AnchoredPosition: {x: 0, y: 0}\r
  m_SizeDelta: {x: 0, y: 0}\r
  m_Pivot: {x: 0, y: 0}\r
--- !u!114 &653380162\r
MonoBehaviour:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 653380160}\r
  m_Enabled: 1\r
  m_EditorHideFlags: 0\r
  m_Script: {fileID: 11500000, guid: dc42784cf147c0c48a680349fa168899, type: 3}\r
  m_Name: \r
  m_EditorClassIdentifier: \r
  m_IgnoreReversedGraphics: 1\r
  m_BlockingObjects: 0\r
  m_BlockingMask:\r
    serializedVersion: 2\r
    m_Bits: 4294967295\r
--- !u!114 &653380163\r
MonoBehaviour:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 653380160}\r
  m_Enabled: 1\r
  m_EditorHideFlags: 0\r
  m_Script: {fileID: 11500000, guid: 0cd44c1031e13a943bb63640046fad76, type: 3}\r
  m_Name: \r
  m_EditorClassIdentifier: \r
  m_UiScaleMode: 1\r
  m_ReferencePixelsPerUnit: 100\r
  m_ScaleFactor: 1\r
  m_ReferenceResolution: {x: 1125, y: 2436}\r
  m_ScreenMatchMode: 0\r
  m_MatchWidthOrHeight: 0\r
  m_PhysicalUnit: 3\r
  m_FallbackScreenDPI: 96\r
  m_DefaultSpriteDPI: 96\r
  m_DynamicPixelsPerUnit: 1\r
  m_PresetInfoIsWorld: 0\r
--- !u!223 &653380164\r
Canvas:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 653380160}\r
  m_Enabled: 1\r
  serializedVersion: 3\r
  m_RenderMode: 0\r
  m_Camera: {fileID: 0}\r
  m_PlaneDistance: 100\r
  m_PixelPerfect: 1\r
  m_ReceivesEvents: 1\r
  m_OverrideSorting: 0\r
  m_OverridePixelPerfect: 0\r
  m_SortingBucketNormalizedSize: 0\r
  m_AdditionalShaderChannelsFlag: 0\r
  m_SortingLayerID: 0\r
  m_SortingOrder: 0\r
  m_TargetDisplay: 0\r
--- !u!1 &794614955\r
GameObject:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  serializedVersion: 6\r
  m_Component:\r
  - component: {fileID: 794614958}\r
  - component: {fileID: 794614957}\r
  - component: {fileID: 794614956}\r
  m_Layer: 0\r
  m_Name: EventSystem\r
  m_TagString: Untagged\r
  m_Icon: {fileID: 0}\r
  m_NavMeshLayer: 0\r
  m_StaticEditorFlags: 0\r
  m_IsActive: 1\r
--- !u!114 &794614956\r
MonoBehaviour:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 794614955}\r
  m_Enabled: 1\r
  m_EditorHideFlags: 0\r
  m_Script: {fileID: 11500000, guid: 01614664b831546d2ae94a42149d80ac, type: 3}\r
  m_Name: \r
  m_EditorClassIdentifier: \r
  m_MoveRepeatDelay: 0.5\r
  m_MoveRepeatRate: 0.1\r
  m_ActionsAsset: {fileID: -944628639613478452, guid: ca9f5fa95ffab41fb9a615ab714db018, type: 3}\r
  m_PointAction: {fileID: 1054132383583890850, guid: ca9f5fa95ffab41fb9a615ab714db018, type: 3}\r
  m_MoveAction: {fileID: 3710738434707379630, guid: ca9f5fa95ffab41fb9a615ab714db018, type: 3}\r
  m_SubmitAction: {fileID: 2064916234097673511, guid: ca9f5fa95ffab41fb9a615ab714db018, type: 3}\r
  m_CancelAction: {fileID: -1967631576421560919, guid: ca9f5fa95ffab41fb9a615ab714db018, type: 3}\r
  m_LeftClickAction: {fileID: 8056856818456041789, guid: ca9f5fa95ffab41fb9a615ab714db018, type: 3}\r
  m_MiddleClickAction: {fileID: 3279352641294131588, guid: ca9f5fa95ffab41fb9a615ab714db018, type: 3}\r
  m_RightClickAction: {fileID: 3837173908680883260, guid: ca9f5fa95ffab41fb9a615ab714db018, type: 3}\r
  m_ScrollWheelAction: {fileID: 4502412055082496612, guid: ca9f5fa95ffab41fb9a615ab714db018, type: 3}\r
  m_TrackedDevicePositionAction: {fileID: 4754684134866288074, guid: ca9f5fa95ffab41fb9a615ab714db018, type: 3}\r
  m_TrackedDeviceOrientationAction: {fileID: 1025543830046995696, guid: ca9f5fa95ffab41fb9a615ab714db018, type: 3}\r
  m_DeselectOnBackgroundClick: 1\r
  m_PointerBehavior: 0\r
--- !u!114 &794614957\r
MonoBehaviour:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 794614955}\r
  m_Enabled: 1\r
  m_EditorHideFlags: 0\r
  m_Script: {fileID: 11500000, guid: 76c392e42b5098c458856cdf6ecaaaa1, type: 3}\r
  m_Name: \r
  m_EditorClassIdentifier: \r
  m_FirstSelected: {fileID: 0}\r
  m_sendNavigationEvents: 1\r
  m_DragThreshold: 10\r
--- !u!4 &794614958\r
Transform:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 794614955}\r
  m_LocalRotation: {x: -0, y: -0, z: -0, w: 1}\r
  m_LocalPosition: {x: 0, y: 0, z: 0}\r
  m_LocalScale: {x: 1, y: 1, z: 1}\r
  m_Children: []\r
  m_Father: {fileID: 85177812}\r
  m_RootOrder: 1\r
  m_LocalEulerAnglesHint: {x: 0, y: 0, z: 0}\r
--- !u!1 &834512653\r
GameObject:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  serializedVersion: 6\r
  m_Component:\r
  - component: {fileID: 834512654}\r
  - component: {fileID: 834512657}\r
  - component: {fileID: 834512656}\r
  m_Layer: 5\r
  m_Name: Text\r
  m_TagString: Untagged\r
  m_Icon: {fileID: 0}\r
  m_NavMeshLayer: 0\r
  m_StaticEditorFlags: 0\r
  m_IsActive: 1\r
--- !u!224 &834512654\r
RectTransform:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 834512653}\r
  m_LocalRotation: {x: 0, y: 0, z: 0, w: 1}\r
  m_LocalPosition: {x: 0, y: 0, z: 0}\r
  m_LocalScale: {x: 2, y: 2, z: 1}\r
  m_Children: []\r
  m_Father: {fileID: 653380161}\r
  m_RootOrder: 0\r
  m_LocalEulerAnglesHint: {x: 0, y: 0, z: 0}\r
  m_AnchorMin: {x: 0, y: 0}\r
  m_AnchorMax: {x: 0, y: 0}\r
  m_AnchoredPosition: {x: 45, y: 2017}\r
  m_SizeDelta: {x: 173.8676, y: 92.4038}\r
  m_Pivot: {x: 0, y: 0}\r
--- !u!114 &834512656\r
MonoBehaviour:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 834512653}\r
  m_Enabled: 1\r
  m_EditorHideFlags: 0\r
  m_Script: {fileID: 11500000, guid: 5f7201a12d95ffc409449d95f23cf332, type: 3}\r
  m_Name: \r
  m_EditorClassIdentifier: \r
  m_Material: {fileID: 0}\r
  m_Color: {r: 1, g: 1, b: 1, a: 1}\r
  m_RaycastTarget: 1\r
  m_RaycastPadding: {x: 0, y: 0, z: 0, w: 0}\r
  m_Maskable: 1\r
  m_OnCullStateChanged:\r
    m_PersistentCalls:\r
      m_Calls: []\r
  m_FontData:\r
    m_Font: {fileID: 10102, guid: 0000000000000000e000000000000000, type: 0}\r
    m_FontSize: 72\r
    m_FontStyle: 1\r
    m_BestFit: 0\r
    m_MinSize: 3\r
    m_MaxSize: 180\r
    m_Alignment: 3\r
    m_AlignByGeometry: 0\r
    m_RichText: 1\r
    m_HorizontalOverflow: 1\r
    m_VerticalOverflow: 1\r
    m_LineSpacing: 1\r
  m_Text: 0,00\r
--- !u!222 &834512657\r
CanvasRenderer:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 834512653}\r
  m_CullTransparentMesh: 1\r
--- !u!1 &963194225\r
GameObject:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  serializedVersion: 6\r
  m_Component:\r
  - component: {fileID: 963194228}\r
  - component: {fileID: 963194227}\r
  - component: {fileID: 963194226}\r
  - component: {fileID: 963194229}\r
  - component: {fileID: 963194230}\r
  m_Layer: 0\r
  m_Name: Main Camera\r
  m_TagString: MainCamera\r
  m_Icon: {fileID: 0}\r
  m_NavMeshLayer: 0\r
  m_StaticEditorFlags: 0\r
  m_IsActive: 1\r
--- !u!81 &963194226\r
AudioListener:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 963194225}\r
  m_Enabled: 1\r
--- !u!20 &963194227\r
Camera:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 963194225}\r
  m_Enabled: 1\r
  serializedVersion: 2\r
  m_ClearFlags: 2\r
  m_BackGroundColor: {r: 0.19215687, g: 0.3019608, b: 0.4745098, a: 0}\r
  m_projectionMatrixMode: 1\r
  m_GateFitMode: 2\r
  m_FOVAxisMode: 0\r
  m_SensorSize: {x: 36, y: 24}\r
  m_LensShift: {x: 0, y: 0}\r
  m_FocalLength: 50\r
  m_NormalizedViewPortRect:\r
    serializedVersion: 2\r
    x: 0\r
    y: 0\r
    width: 1\r
    height: 1\r
  near clip plane: 0.3\r
  far clip plane: 1000\r
  field of view: 60\r
  orthographic: 0\r
  orthographic size: 5\r
  m_Depth: -1\r
  m_CullingMask:\r
    serializedVersion: 2\r
    m_Bits: 4294967295\r
  m_RenderingPath: -1\r
  m_TargetTexture: {fileID: 0}\r
  m_TargetDisplay: 0\r
  m_TargetEye: 3\r
  m_HDR: 1\r
  m_AllowMSAA: 1\r
  m_AllowDynamicResolution: 0\r
  m_ForceIntoRT: 0\r
  m_OcclusionCulling: 1\r
  m_StereoConvergence: 10\r
  m_StereoSeparation: 0.022\r
--- !u!4 &963194228\r
Transform:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 963194225}\r
  m_LocalRotation: {x: 0, y: 0, z: 0, w: 1}\r
  m_LocalPosition: {x: 0, y: 0, z: -10}\r
  m_LocalScale: {x: 1, y: 1, z: 1}\r
  m_Children: []\r
  m_Father: {fileID: 1988159134}\r
  m_RootOrder: 1\r
  m_LocalEulerAnglesHint: {x: 0, y: 0, z: 0}\r
--- !u!114 &963194229\r
MonoBehaviour:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 963194225}\r
  m_Enabled: 1\r
  m_EditorHideFlags: 0\r
  m_Script: {fileID: 11500000, guid: a79441f348de89743a2939f4d699eac1, type: 3}\r
  m_Name: \r
  m_EditorClassIdentifier: \r
  m_RenderShadows: 1\r
  m_RequiresDepthTextureOption: 2\r
  m_RequiresOpaqueTextureOption: 2\r
  m_CameraType: 0\r
  m_Cameras: []\r
  m_RendererIndex: -1\r
  m_VolumeLayerMask:\r
    serializedVersion: 2\r
    m_Bits: 1\r
  m_VolumeTrigger: {fileID: 0}\r
  m_RenderPostProcessing: 0\r
  m_Antialiasing: 0\r
  m_AntialiasingQuality: 2\r
  m_StopNaN: 0\r
  m_Dithering: 0\r
  m_ClearDepth: 1\r
  m_AllowXRRendering: 1\r
  m_RequiresDepthTexture: 0\r
  m_RequiresColorTexture: 0\r
  m_Version: 2\r
--- !u!114 &963194230\r
MonoBehaviour:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 963194225}\r
  m_Enabled: 1\r
  m_EditorHideFlags: 0\r
  m_Script: {fileID: 11500000, guid: 7285ea1111868734bbb3a8376c3e2e9a, type: 3}\r
  m_Name: \r
  m_EditorClassIdentifier: \r
  player: {fileID: 1729149754909008675}\r
  minDistance: 10\r
  maxDistance: 14\r
  angle: 15\r
  rotationSpeed: 3\r
  shakeForce: 0.05\r
--- !u!1 &1051290927\r
GameObject:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  serializedVersion: 6\r
  m_Component:\r
  - component: {fileID: 1051290929}\r
  - component: {fileID: 1051290928}\r
  m_Layer: 0\r
  m_Name: Point Light\r
  m_TagString: Untagged\r
  m_Icon: {fileID: 0}\r
  m_NavMeshLayer: 0\r
  m_StaticEditorFlags: 0\r
  m_IsActive: 1\r
--- !u!108 &1051290928\r
Light:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 1051290927}\r
  m_Enabled: 1\r
  serializedVersion: 10\r
  m_Type: 2\r
  m_Shape: 0\r
  m_Color: {r: 1, g: 0.72163296, b: 0.30817604, a: 1}\r
  m_Intensity: 4000\r
  m_Range: 110\r
  m_SpotAngle: 30\r
  m_InnerSpotAngle: 21.80208\r
  m_CookieSize: 10\r
  m_Shadows:\r
    m_Type: 1\r
    m_Resolution: -1\r
    m_CustomResolution: -1\r
    m_Strength: 1\r
    m_Bias: 0.05\r
    m_NormalBias: 0.4\r
    m_NearPlane: 0.2\r
    m_CullingMatrixOverride:\r
      e00: 1\r
      e01: 0\r
      e02: 0\r
      e03: 0\r
      e10: 0\r
      e11: 1\r
      e12: 0\r
      e13: 0\r
      e20: 0\r
      e21: 0\r
      e22: 1\r
      e23: 0\r
      e30: 0\r
      e31: 0\r
      e32: 0\r
      e33: 1\r
    m_UseCullingMatrixOverride: 0\r
  m_Cookie: {fileID: 0}\r
  m_DrawHalo: 0\r
  m_Flare: {fileID: 0}\r
  m_RenderMode: 0\r
  m_CullingMask:\r
    serializedVersion: 2\r
    m_Bits: 4294967295\r
  m_RenderingLayerMask: 1\r
  m_Lightmapping: 1\r
  m_LightShadowCasterMode: 0\r
  m_AreaSize: {x: 1, y: 1}\r
  m_BounceIntensity: 1\r
  m_ColorTemperature: 6570\r
  m_UseColorTemperature: 0\r
  m_BoundingSphereOverride: {x: 0, y: 0, z: 3.1e-44, w: NaN}\r
  m_UseBoundingSphereOverride: 0\r
  m_UseViewFrustumForShadowCasterCull: 1\r
  m_ShadowRadius: 0\r
  m_ShadowAngle: 0\r
--- !u!4 &1051290929\r
Transform:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 1051290927}\r
  m_LocalRotation: {x: -0.6427876, y: -0, z: -0, w: 0.7660445}\r
  m_LocalPosition: {x: 0, y: 0, z: 0}\r
  m_LocalScale: {x: 0.40000004, y: 0.39999998, z: 0.39999998}\r
  m_Children: []\r
  m_Father: {fileID: 2766731427227954887}\r
  m_RootOrder: 0\r
  m_LocalEulerAnglesHint: {x: 0, y: 0, z: 0}\r
--- !u!1 &1988159133\r
GameObject:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  serializedVersion: 6\r
  m_Component:\r
  - component: {fileID: 1988159134}\r
  m_Layer: 0\r
  m_Name: Player\r
  m_TagString: Untagged\r
  m_Icon: {fileID: 0}\r
  m_NavMeshLayer: 0\r
  m_StaticEditorFlags: 0\r
  m_IsActive: 1\r
--- !u!4 &1988159134\r
Transform:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 1988159133}\r
  m_LocalRotation: {x: 0, y: 0, z: 0, w: 1}\r
  m_LocalPosition: {x: -20, y: -42, z: -33}\r
  m_LocalScale: {x: 1, y: 1, z: 1}\r
  m_Children:\r
  - {fileID: 2068555373077232027}\r
  - {fileID: 963194228}\r
  - {fileID: 2452460011257742326}\r
  m_Father: {fileID: 0}\r
  m_RootOrder: 0\r
  m_LocalEulerAnglesHint: {x: 0, y: 0, z: 0}\r
--- !u!1 &2065868460\r
GameObject:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  serializedVersion: 6\r
  m_Component:\r
  - component: {fileID: 2065868464}\r
  - component: {fileID: 2065868463}\r
  - component: {fileID: 2065868462}\r
  - component: {fileID: 2065868461}\r
  - component: {fileID: 2065868465}\r
  m_Layer: 0\r
  m_Name: Collectible\r
  m_TagString: Untagged\r
  m_Icon: {fileID: 0}\r
  m_NavMeshLayer: 0\r
  m_StaticEditorFlags: 0\r
  m_IsActive: 0\r
--- !u!135 &2065868461\r
SphereCollider:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 2065868460}\r
  m_Material: {fileID: 0}\r
  m_IsTrigger: 1\r
  m_Enabled: 1\r
  serializedVersion: 2\r
  m_Radius: 0.5\r
  m_Center: {x: 0, y: 0, z: 0}\r
--- !u!23 &2065868462\r
MeshRenderer:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 2065868460}\r
  m_Enabled: 1\r
  m_CastShadows: 1\r
  m_ReceiveShadows: 1\r
  m_DynamicOccludee: 1\r
  m_MotionVectors: 1\r
  m_LightProbeUsage: 1\r
  m_ReflectionProbeUsage: 1\r
  m_RayTracingMode: 2\r
  m_RayTraceProcedural: 0\r
  m_RenderingLayerMask: 1\r
  m_RendererPriority: 0\r
  m_Materials:\r
  - {fileID: 2100000, guid: 985f9c4a7c534a64ea08095b03ad2636, type: 2}\r
  m_StaticBatchInfo:\r
    firstSubMesh: 0\r
    subMeshCount: 0\r
  m_StaticBatchRoot: {fileID: 0}\r
  m_ProbeAnchor: {fileID: 0}\r
  m_LightProbeVolumeOverride: {fileID: 0}\r
  m_ScaleInLightmap: 1\r
  m_ReceiveGI: 1\r
  m_PreserveUVs: 0\r
  m_IgnoreNormalsForChartDetection: 0\r
  m_ImportantGI: 0\r
  m_StitchLightmapSeams: 1\r
  m_SelectedEditorRenderState: 3\r
  m_MinimumChartSize: 4\r
  m_AutoUVMaxDistance: 0.5\r
  m_AutoUVMaxAngle: 89\r
  m_LightmapParameters: {fileID: 0}\r
  m_SortingLayerID: 0\r
  m_SortingLayer: 0\r
  m_SortingOrder: 0\r
  m_AdditionalVertexStreams: {fileID: 0}\r
--- !u!33 &2065868463\r
MeshFilter:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 2065868460}\r
  m_Mesh: {fileID: 10207, guid: 0000000000000000e000000000000000, type: 0}\r
--- !u!4 &2065868464\r
Transform:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 2065868460}\r
  m_LocalRotation: {x: 0, y: 0, z: 0, w: 1}\r
  m_LocalPosition: {x: -21.05, y: -40.25, z: -28.78}\r
  m_LocalScale: {x: 1, y: 1, z: 1}\r
  m_Children: []\r
  m_Father: {fileID: 0}\r
  m_RootOrder: 3\r
  m_LocalEulerAnglesHint: {x: 0, y: 0, z: 0}\r
--- !u!54 &2065868465\r
Rigidbody:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 2065868460}\r
  serializedVersion: 2\r
  m_Mass: 1\r
  m_Drag: 0\r
  m_AngularDrag: 0.05\r
  m_UseGravity: 0\r
  m_IsKinematic: 0\r
  m_Interpolate: 0\r
  m_Constraints: 0\r
  m_CollisionDetection: 0\r
--- !u!4 &543450651591913439\r
Transform:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 919132147940816229}\r
  m_LocalRotation: {x: 0, y: 0, z: 0, w: 1}\r
  m_LocalPosition: {x: 0, y: 0, z: 0}\r
  m_LocalScale: {x: 2.5, y: 2.5, z: 2.5}\r
  m_Children:\r
  - {fileID: 1160393557401340896}\r
  - {fileID: 2766731427227954887}\r
  - {fileID: 8632055957068046034}\r
  m_Father: {fileID: 0}\r
  m_RootOrder: 1\r
  m_LocalEulerAnglesHint: {x: 0, y: 0, z: 0}\r
--- !u!1 &919132147940816229\r
GameObject:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  serializedVersion: 6\r
  m_Component:\r
  - component: {fileID: 543450651591913439}\r
  m_Layer: 0\r
  m_Name: Sphere_Stage\r
  m_TagString: Untagged\r
  m_Icon: {fileID: 0}\r
  m_NavMeshLayer: 0\r
  m_StaticEditorFlags: 0\r
  m_IsActive: 1\r
--- !u!4 &1059177041413534725\r
Transform:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 2329871539869701722}\r
  m_LocalRotation: {x: 0.7071068, y: 0.7071068, z: 0.000000030908623, w: -0.000000030908623}\r
  m_LocalPosition: {x: 0.77, y: -0.31, z: 0.01}\r
  m_LocalScale: {x: 1, y: 1, z: 1}\r
  m_Children: []\r
  m_Father: {fileID: 6089327839473868883}\r
  m_RootOrder: 2\r
  m_LocalEulerAnglesHint: {x: 180, y: 0, z: -10}\r
--- !u!4 &1160393557401340896\r
Transform:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 1443944353546084959}\r
  m_LocalRotation: {x: 0, y: 0, z: 0, w: 1}\r
  m_LocalPosition: {x: -0, y: 0, z: 0}\r
  m_LocalScale: {x: 1, y: 1, z: 1}\r
  m_Children: []\r
  m_Father: {fileID: 543450651591913439}\r
  m_RootOrder: 0\r
  m_LocalEulerAnglesHint: {x: 0, y: 0, z: 0}\r
--- !u!1 &1443944353546084959\r
GameObject:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  serializedVersion: 6\r
  m_Component:\r
  - component: {fileID: 1160393557401340896}\r
  - component: {fileID: 2063558152876091235}\r
  - component: {fileID: 2290698609745160263}\r
  - component: {fileID: 1443944353546084960}\r
  - component: {fileID: 1443944353546084961}\r
  m_Layer: 0\r
  m_Name: Electrode\r
  m_TagString: Untagged\r
  m_Icon: {fileID: 0}\r
  m_NavMeshLayer: 0\r
  m_StaticEditorFlags: 0\r
  m_IsActive: 1\r
--- !u!114 &1443944353546084960\r
MonoBehaviour:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 1443944353546084959}\r
  m_Enabled: 1\r
  m_EditorHideFlags: 0\r
  m_Script: {fileID: 11500000, guid: a8bf8a65e1d998543aed1bdf6bf64cef, type: 3}\r
  m_Name: \r
  m_EditorClassIdentifier: \r
  rotationSpeed: 30\r
--- !u!64 &1443944353546084961\r
MeshCollider:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 1443944353546084959}\r
  m_Material: {fileID: 0}\r
  m_IsTrigger: 0\r
  m_Enabled: 1\r
  serializedVersion: 4\r
  m_Convex: 0\r
  m_CookingOptions: 30\r
  m_Mesh: {fileID: -928167896908107560, guid: e93d038171fa43f4db4aac681a34720d, type: 3}\r
--- !u!33 &1451339856083489918\r
MeshFilter:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 6673794558693895581}\r
  m_Mesh: {fileID: 6664959949897491518, guid: e93d038171fa43f4db4aac681a34720d, type: 3}\r
--- !u!33 &1560278432415304787\r
MeshFilter:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 2973277140703648076}\r
  m_Mesh: {fileID: -5067002097883855535, guid: ae67248afa006ac46abe4c8e71504fb1, type: 3}\r
--- !u!1 &1715049327456334650\r
GameObject:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  serializedVersion: 6\r
  m_Component:\r
  - component: {fileID: 4223073790941679950}\r
  m_Layer: 0\r
  m_Name: Bottom\r
  m_TagString: Untagged\r
  m_Icon: {fileID: 0}\r
  m_NavMeshLayer: 0\r
  m_StaticEditorFlags: 0\r
  m_IsActive: 1\r
--- !u!1 &1729149754909008673\r
GameObject:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  serializedVersion: 6\r
  m_Component:\r
  - component: {fileID: 2068555373077232027}\r
  - component: {fileID: 1729149754909008675}\r
  - component: {fileID: 1729149754909008674}\r
  - component: {fileID: 1729149754909008677}\r
  - component: {fileID: 1729149754909008676}\r
  - component: {fileID: 1729149754909008678}\r
  m_Layer: 0\r
  m_Name: Aeronef\r
  m_TagString: Untagged\r
  m_Icon: {fileID: 0}\r
  m_NavMeshLayer: 0\r
  m_StaticEditorFlags: 0\r
  m_IsActive: 1\r
--- !u!114 &1729149754909008674\r
MonoBehaviour:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 1729149754909008673}\r
  m_Enabled: 1\r
  m_EditorHideFlags: 0\r
  m_Script: {fileID: 11500000, guid: 638b89d60b84a8c4e90b816ff1442c32, type: 3}\r
  m_Name: \r
  m_EditorClassIdentifier: \r
  playerController: {fileID: 1729149754909008675}\r
  maxSwipeTime: 0.1\r
  minSwipeDelta: 100\r
  joystickDZValue: 0.1\r
  joystickDZRadius: 10\r
  joystickMaxRadius: 25\r
--- !u!114 &1729149754909008675\r
MonoBehaviour:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 1729149754909008673}\r
  m_Enabled: 1\r
  m_EditorHideFlags: 0\r
  m_Script: {fileID: 11500000, guid: ea6af3e4907e872429ceb1256697564b, type: 3}\r
  m_Name: \r
  m_EditorClassIdentifier: \r
  controlSettings:\r
    minSpeed: 5\r
    maxSpeed: 20\r
    accelerationRate: 5\r
    decelerationRate: 1\r
    rotationSpeed: 90\r
    spinSpeed: 1\r
    spinAngle: 1000\r
    invertXAxis: 0\r
    invertYAxis: 0\r
  radar: {fileID: 2973277140703648076}\r
  spawner: {fileID: 539625797}\r
--- !u!54 &1729149754909008676\r
Rigidbody:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 1729149754909008673}\r
  serializedVersion: 2\r
  m_Mass: 1\r
  m_Drag: 0\r
  m_AngularDrag: 0.05\r
  m_UseGravity: 0\r
  m_IsKinematic: 0\r
  m_Interpolate: 0\r
  m_Constraints: 0\r
  m_CollisionDetection: 0\r
--- !u!136 &1729149754909008677\r
CapsuleCollider:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 1729149754909008673}\r
  m_Material: {fileID: 0}\r
  m_IsTrigger: 0\r
  m_Enabled: 1\r
  m_Radius: 1.79\r
  m_Height: 5\r
  m_Direction: 2\r
  m_Center: {x: 0, y: 0, z: 0}\r
--- !u!114 &1729149754909008678\r
MonoBehaviour:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 1729149754909008673}\r
  m_Enabled: 1\r
  m_EditorHideFlags: 0\r
  m_Script: {fileID: 11500000, guid: a8dfb702011fb49449ba91c2b6430054, type: 3}\r
  m_Name: \r
  m_EditorClassIdentifier: \r
  playerController: {fileID: 1729149754909008675}\r
  wingsCtrl: {fileID: 8834904849547191120}\r
--- !u!33 &2063558152876091235\r
MeshFilter:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 1443944353546084959}\r
  m_Mesh: {fileID: -928167896908107560, guid: e93d038171fa43f4db4aac681a34720d, type: 3}\r
--- !u!4 &2068555373077232027\r
Transform:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 1729149754909008673}\r
  m_LocalRotation: {x: -0, y: -0, z: -0, w: 1}\r
  m_LocalPosition: {x: 0, y: 0, z: 0}\r
  m_LocalScale: {x: 1, y: 1, z: 1}\r
  m_Children:\r
  - {fileID: 6918700505821980933}\r
  m_Father: {fileID: 1988159134}\r
  m_RootOrder: 0\r
  m_LocalEulerAnglesHint: {x: 0, y: 0, z: 0}\r
--- !u!23 &2290698609745160263\r
MeshRenderer:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 1443944353546084959}\r
  m_Enabled: 1\r
  m_CastShadows: 1\r
  m_ReceiveShadows: 1\r
  m_DynamicOccludee: 1\r
  m_MotionVectors: 1\r
  m_LightProbeUsage: 1\r
  m_ReflectionProbeUsage: 1\r
  m_RayTracingMode: 2\r
  m_RayTraceProcedural: 0\r
  m_RenderingLayerMask: 1\r
  m_RendererPriority: 0\r
  m_Materials:\r
  - {fileID: 2100000, guid: 2fdf679bc1ab2c546a78479da719174e, type: 2}\r
  m_StaticBatchInfo:\r
    firstSubMesh: 0\r
    subMeshCount: 0\r
  m_StaticBatchRoot: {fileID: 0}\r
  m_ProbeAnchor: {fileID: 0}\r
  m_LightProbeVolumeOverride: {fileID: 0}\r
  m_ScaleInLightmap: 1\r
  m_ReceiveGI: 1\r
  m_PreserveUVs: 0\r
  m_IgnoreNormalsForChartDetection: 0\r
  m_ImportantGI: 0\r
  m_StitchLightmapSeams: 1\r
  m_SelectedEditorRenderState: 3\r
  m_MinimumChartSize: 4\r
  m_AutoUVMaxDistance: 0.5\r
  m_AutoUVMaxAngle: 89\r
  m_LightmapParameters: {fileID: 0}\r
  m_SortingLayerID: 0\r
  m_SortingLayer: 0\r
  m_SortingOrder: 0\r
  m_AdditionalVertexStreams: {fileID: 0}\r
--- !u!1 &2329871539869701722\r
GameObject:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  serializedVersion: 6\r
  m_Component:\r
  - component: {fileID: 1059177041413534725}\r
  m_Layer: 0\r
  m_Name: Right\r
  m_TagString: Untagged\r
  m_Icon: {fileID: 0}\r
  m_NavMeshLayer: 0\r
  m_StaticEditorFlags: 0\r
  m_IsActive: 1\r
--- !u!4 &2452460011257742326\r
Transform:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 2973277140703648076}\r
  m_LocalRotation: {x: 0.7071068, y: 0, z: 0, w: 0.7071068}\r
  m_LocalPosition: {x: 0, y: 0, z: 2}\r
  m_LocalScale: {x: 100, y: 100, z: 100}\r
  m_Children: []\r
  m_Father: {fileID: 1988159134}\r
  m_RootOrder: 2\r
  m_LocalEulerAnglesHint: {x: 90, y: 0, z: 0}\r
--- !u!4 &2766731427227954887\r
Transform:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 6673794558693895581}\r
  m_LocalRotation: {x: 0, y: 0, z: 0, w: 1}\r
  m_LocalPosition: {x: -0, y: 0, z: 0}\r
  m_LocalScale: {x: 0.99999994, y: 0.99999994, z: 1}\r
  m_Children:\r
  - {fileID: 1051290929}\r
  m_Father: {fileID: 543450651591913439}\r
  m_RootOrder: 1\r
  m_LocalEulerAnglesHint: {x: 0, y: 0, z: 0}\r
--- !u!1 &2973277140703648076\r
GameObject:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  serializedVersion: 6\r
  m_Component:\r
  - component: {fileID: 2452460011257742326}\r
  - component: {fileID: 1560278432415304787}\r
  - component: {fileID: 3621966941775837337}\r
  m_Layer: 0\r
  m_Name: compass\r
  m_TagString: Untagged\r
  m_Icon: {fileID: 0}\r
  m_NavMeshLayer: 0\r
  m_StaticEditorFlags: 0\r
  m_IsActive: 1\r
--- !u!23 &3621966941775837337\r
MeshRenderer:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 2973277140703648076}\r
  m_Enabled: 1\r
  m_CastShadows: 1\r
  m_ReceiveShadows: 1\r
  m_DynamicOccludee: 1\r
  m_MotionVectors: 1\r
  m_LightProbeUsage: 1\r
  m_ReflectionProbeUsage: 1\r
  m_RayTracingMode: 2\r
  m_RayTraceProcedural: 0\r
  m_RenderingLayerMask: 1\r
  m_RendererPriority: 0\r
  m_Materials:\r
  - {fileID: 2100000, guid: 2fdf679bc1ab2c546a78479da719174e, type: 2}\r
  m_StaticBatchInfo:\r
    firstSubMesh: 0\r
    subMeshCount: 0\r
  m_StaticBatchRoot: {fileID: 0}\r
  m_ProbeAnchor: {fileID: 0}\r
  m_LightProbeVolumeOverride: {fileID: 0}\r
  m_ScaleInLightmap: 1\r
  m_ReceiveGI: 1\r
  m_PreserveUVs: 0\r
  m_IgnoreNormalsForChartDetection: 0\r
  m_ImportantGI: 0\r
  m_StitchLightmapSeams: 1\r
  m_SelectedEditorRenderState: 3\r
  m_MinimumChartSize: 4\r
  m_AutoUVMaxDistance: 0.5\r
  m_AutoUVMaxAngle: 89\r
  m_LightmapParameters: {fileID: 0}\r
  m_SortingLayerID: 0\r
  m_SortingLayer: 0\r
  m_SortingOrder: 0\r
  m_AdditionalVertexStreams: {fileID: 0}\r
--- !u!4 &4223073790941679950\r
Transform:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 1715049327456334650}\r
  m_LocalRotation: {x: 0.76604444, y: 0, z: 0, w: 0.64278764}\r
  m_LocalPosition: {x: 0, y: -0.3, z: 0.77}\r
  m_LocalScale: {x: 1, y: 1, z: 1}\r
  m_Children: []\r
  m_Father: {fileID: 6089327839473868883}\r
  m_RootOrder: 0\r
  m_LocalEulerAnglesHint: {x: 180, y: 0, z: 0}\r
--- !u!1 &5393900722223429907\r
GameObject:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  serializedVersion: 6\r
  m_Component:\r
  - component: {fileID: 6234216331097060538}\r
  m_Layer: 0\r
  m_Name: Top\r
  m_TagString: Untagged\r
  m_Icon: {fileID: 0}\r
  m_NavMeshLayer: 0\r
  m_StaticEditorFlags: 0\r
  m_IsActive: 1\r
--- !u!4 &5716228944240681418\r
Transform:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 8066011889471309281}\r
  m_LocalRotation: {x: 0.7071068, y: -0.7071068, z: -0.000000030908623, w: -0.000000030908623}\r
  m_LocalPosition: {x: -0.77, y: -0.31, z: -0.01}\r
  m_LocalScale: {x: 1, y: 1.0000004, z: 1}\r
  m_Children: []\r
  m_Father: {fileID: 6089327839473868883}\r
  m_RootOrder: 1\r
  m_LocalEulerAnglesHint: {x: 180, y: 0, z: 10}\r
--- !u!4 &6089327839473868883\r
Transform:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 6306218986691049962}\r
  m_LocalRotation: {x: 0, y: 0, z: 0, w: 1}\r
  m_LocalPosition: {x: 0, y: 0, z: 0}\r
  m_LocalScale: {x: 1, y: 1, z: 1}\r
  m_Children:\r
  - {fileID: 4223073790941679950}\r
  - {fileID: 5716228944240681418}\r
  - {fileID: 1059177041413534725}\r
  - {fileID: 6234216331097060538}\r
  m_Father: {fileID: 6918700505821980933}\r
  m_RootOrder: 0\r
  m_LocalEulerAnglesHint: {x: 0, y: 0, z: 0}\r
--- !u!4 &6234216331097060538\r
Transform:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 5393900722223429907}\r
  m_LocalRotation: {x: -0.76604444, y: 0, z: 0, w: 0.64278764}\r
  m_LocalPosition: {x: 0, y: -0.29, z: -0.78}\r
  m_LocalScale: {x: 1, y: 1, z: 1}\r
  m_Children: []\r
  m_Father: {fileID: 6089327839473868883}\r
  m_RootOrder: 3\r
  m_LocalEulerAnglesHint: {x: -160, y: 0, z: 0}\r
--- !u!1 &6306218986691049962\r
GameObject:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  serializedVersion: 6\r
  m_Component:\r
  - component: {fileID: 6089327839473868883}\r
  m_Layer: 0\r
  m_Name: Root\r
  m_TagString: Untagged\r
  m_Icon: {fileID: 0}\r
  m_NavMeshLayer: 0\r
  m_StaticEditorFlags: 0\r
  m_IsActive: 1\r
--- !u!23 &6317578923328007502\r
MeshRenderer:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 8204707764439930786}\r
  m_Enabled: 1\r
  m_CastShadows: 1\r
  m_ReceiveShadows: 1\r
  m_DynamicOccludee: 1\r
  m_MotionVectors: 1\r
  m_LightProbeUsage: 1\r
  m_ReflectionProbeUsage: 1\r
  m_RayTracingMode: 2\r
  m_RayTraceProcedural: 0\r
  m_RenderingLayerMask: 1\r
  m_RendererPriority: 0\r
  m_Materials:\r
  - {fileID: 2100000, guid: 2fdf679bc1ab2c546a78479da719174e, type: 2}\r
  m_StaticBatchInfo:\r
    firstSubMesh: 0\r
    subMeshCount: 0\r
  m_StaticBatchRoot: {fileID: 0}\r
  m_ProbeAnchor: {fileID: 0}\r
  m_LightProbeVolumeOverride: {fileID: 0}\r
  m_ScaleInLightmap: 1\r
  m_ReceiveGI: 1\r
  m_PreserveUVs: 0\r
  m_IgnoreNormalsForChartDetection: 0\r
  m_ImportantGI: 0\r
  m_StitchLightmapSeams: 1\r
  m_SelectedEditorRenderState: 3\r
  m_MinimumChartSize: 4\r
  m_AutoUVMaxDistance: 0.5\r
  m_AutoUVMaxAngle: 89\r
  m_LightmapParameters: {fileID: 0}\r
  m_SortingLayerID: 0\r
  m_SortingLayer: 0\r
  m_SortingOrder: 0\r
  m_AdditionalVertexStreams: {fileID: 0}\r
--- !u!1 &6673794558693895581\r
GameObject:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  serializedVersion: 6\r
  m_Component:\r
  - component: {fileID: 2766731427227954887}\r
  - component: {fileID: 1451339856083489918}\r
  - component: {fileID: 7006262956484124589}\r
  - component: {fileID: 6673794558693895582}\r
  m_Layer: 0\r
  m_Name: Gem\r
  m_TagString: Untagged\r
  m_Icon: {fileID: 0}\r
  m_NavMeshLayer: 0\r
  m_StaticEditorFlags: 0\r
  m_IsActive: 1\r
--- !u!64 &6673794558693895582\r
MeshCollider:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 6673794558693895581}\r
  m_Material: {fileID: 0}\r
  m_IsTrigger: 0\r
  m_Enabled: 1\r
  serializedVersion: 4\r
  m_Convex: 0\r
  m_CookingOptions: 30\r
  m_Mesh: {fileID: 6664959949897491518, guid: e93d038171fa43f4db4aac681a34720d, type: 3}\r
--- !u!4 &6918700505821980933\r
Transform:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 8834904849547191119}\r
  m_LocalRotation: {x: 0.7071068, y: 0, z: 0, w: 0.7071068}\r
  m_LocalPosition: {x: -0, y: 0, z: 0}\r
  m_LocalScale: {x: 1, y: 1, z: 1}\r
  m_Children:\r
  - {fileID: 6089327839473868883}\r
  m_Father: {fileID: 2068555373077232027}\r
  m_RootOrder: 0\r
  m_LocalEulerAnglesHint: {x: 90, y: 0, z: 0}\r
--- !u!23 &7006262956484124589\r
MeshRenderer:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 6673794558693895581}\r
  m_Enabled: 1\r
  m_CastShadows: 1\r
  m_ReceiveShadows: 1\r
  m_DynamicOccludee: 1\r
  m_MotionVectors: 1\r
  m_LightProbeUsage: 1\r
  m_ReflectionProbeUsage: 1\r
  m_RayTracingMode: 2\r
  m_RayTraceProcedural: 0\r
  m_RenderingLayerMask: 1\r
  m_RendererPriority: 0\r
  m_Materials:\r
  - {fileID: 2100000, guid: 985f9c4a7c534a64ea08095b03ad2636, type: 2}\r
  m_StaticBatchInfo:\r
    firstSubMesh: 0\r
    subMeshCount: 0\r
  m_StaticBatchRoot: {fileID: 0}\r
  m_ProbeAnchor: {fileID: 0}\r
  m_LightProbeVolumeOverride: {fileID: 0}\r
  m_ScaleInLightmap: 1\r
  m_ReceiveGI: 1\r
  m_PreserveUVs: 0\r
  m_IgnoreNormalsForChartDetection: 0\r
  m_ImportantGI: 0\r
  m_StitchLightmapSeams: 1\r
  m_SelectedEditorRenderState: 3\r
  m_MinimumChartSize: 4\r
  m_AutoUVMaxDistance: 0.5\r
  m_AutoUVMaxAngle: 89\r
  m_LightmapParameters: {fileID: 0}\r
  m_SortingLayerID: 0\r
  m_SortingLayer: 0\r
  m_SortingOrder: 0\r
  m_AdditionalVertexStreams: {fileID: 0}\r
--- !u!33 &7754171747025074513\r
MeshFilter:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 8204707764439930786}\r
  m_Mesh: {fileID: 4711208715938537054, guid: e93d038171fa43f4db4aac681a34720d, type: 3}\r
--- !u!1 &8066011889471309281\r
GameObject:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  serializedVersion: 6\r
  m_Component:\r
  - component: {fileID: 5716228944240681418}\r
  m_Layer: 0\r
  m_Name: Left\r
  m_TagString: Untagged\r
  m_Icon: {fileID: 0}\r
  m_NavMeshLayer: 0\r
  m_StaticEditorFlags: 0\r
  m_IsActive: 1\r
--- !u!1 &8204707764439930786\r
GameObject:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  serializedVersion: 6\r
  m_Component:\r
  - component: {fileID: 8632055957068046034}\r
  - component: {fileID: 7754171747025074513}\r
  - component: {fileID: 6317578923328007502}\r
  - component: {fileID: 8204707764439930787}\r
  m_Layer: 0\r
  m_Name: Sphere\r
  m_TagString: Untagged\r
  m_Icon: {fileID: 0}\r
  m_NavMeshLayer: 0\r
  m_StaticEditorFlags: 0\r
  m_IsActive: 1\r
--- !u!64 &8204707764439930787\r
MeshCollider:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 8204707764439930786}\r
  m_Material: {fileID: 0}\r
  m_IsTrigger: 0\r
  m_Enabled: 1\r
  serializedVersion: 4\r
  m_Convex: 0\r
  m_CookingOptions: 30\r
  m_Mesh: {fileID: 4711208715938537054, guid: e93d038171fa43f4db4aac681a34720d, type: 3}\r
--- !u!4 &8632055957068046034\r
Transform:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 8204707764439930786}\r
  m_LocalRotation: {x: 0, y: 0, z: 0, w: 1}\r
  m_LocalPosition: {x: -0, y: 0, z: 0}\r
  m_LocalScale: {x: 1.7799753, y: 1.7799753, z: 1.7799753}\r
  m_Children: []\r
  m_Father: {fileID: 543450651591913439}\r
  m_RootOrder: 2\r
  m_LocalEulerAnglesHint: {x: 0, y: 0, z: 0}\r
--- !u!1 &8834904849547191119\r
GameObject:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  serializedVersion: 6\r
  m_Component:\r
  - component: {fileID: 6918700505821980933}\r
  - component: {fileID: 8834904849547191120}\r
  - component: {fileID: 8834904849547191121}\r
  m_Layer: 0\r
  m_Name: Armature\r
  m_TagString: Untagged\r
  m_Icon: {fileID: 0}\r
  m_NavMeshLayer: 0\r
  m_StaticEditorFlags: 0\r
  m_IsActive: 1\r
--- !u!114 &8834904849547191120\r
MonoBehaviour:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 8834904849547191119}\r
  m_Enabled: 1\r
  m_EditorHideFlags: 0\r
  m_Script: {fileID: 11500000, guid: c22d7ff68238f5544aa6b25320956bc4, type: 3}\r
  m_Name: \r
  m_EditorClassIdentifier: \r
  vibration:\r
    enable: 0\r
    speed: 30\r
    delta: 0.01\r
  topWing: {fileID: 6234216331097060538}\r
  bottomWing: {fileID: 4223073790941679950}\r
  leftWing: {fileID: 5716228944240681418}\r
  rightWing: {fileID: 1059177041413534725}\r
  _top: 1\r
  _bottom: 1\r
  _left: 1\r
  _right: 1\r
--- !u!137 &8834904849547191121\r
SkinnedMeshRenderer:\r
  m_ObjectHideFlags: 0\r
  m_CorrespondingSourceObject: {fileID: 0}\r
  m_PrefabInstance: {fileID: 0}\r
  m_PrefabAsset: {fileID: 0}\r
  m_GameObject: {fileID: 8834904849547191119}\r
  m_Enabled: 1\r
  m_CastShadows: 1\r
  m_ReceiveShadows: 1\r
  m_DynamicOccludee: 1\r
  m_MotionVectors: 1\r
  m_LightProbeUsage: 1\r
  m_ReflectionProbeUsage: 1\r
  m_RayTracingMode: 3\r
  m_RayTraceProcedural: 0\r
  m_RenderingLayerMask: 1\r
  m_RendererPriority: 0\r
  m_Materials:\r
  - {fileID: 2100000, guid: 31321ba15b8f8eb4c954353edc038b1d, type: 2}\r
  m_StaticBatchInfo:\r
    firstSubMesh: 0\r
    subMeshCount: 0\r
  m_StaticBatchRoot: {fileID: 0}\r
  m_ProbeAnchor: {fileID: 0}\r
  m_LightProbeVolumeOverride: {fileID: 0}\r
  m_ScaleInLightmap: 1\r
  m_ReceiveGI: 1\r
  m_PreserveUVs: 0\r
  m_IgnoreNormalsForChartDetection: 0\r
  m_ImportantGI: 0\r
  m_StitchLightmapSeams: 1\r
  m_SelectedEditorRenderState: 3\r
  m_MinimumChartSize: 4\r
  m_AutoUVMaxDistance: 0.5\r
  m_AutoUVMaxAngle: 89\r
  m_LightmapParameters: {fileID: 0}\r
  m_SortingLayerID: 0\r
  m_SortingLayer: 0\r
  m_SortingOrder: 0\r
  serializedVersion: 2\r
  m_Quality: 0\r
  m_UpdateWhenOffscreen: 0\r
  m_SkinnedMotionVectors: 1\r
  m_Mesh: {fileID: -5183794586737351, guid: b97bf33e7986d6945905c5efbf7451be, type: 3}\r
  m_Bones:\r
  - {fileID: 6089327839473868883}\r
  - {fileID: 5716228944240681418}\r
  - {fileID: 6234216331097060538}\r
  - {fileID: 1059177041413534725}\r
  - {fileID: 4223073790941679950}\r
  m_BlendShapeWeights: []\r
  m_RootBone: {fileID: 6089327839473868883}\r
  m_AABB:\r
    m_Center: {x: 0, y: 0, z: 0}\r
    m_Extent: {x: 3, y: 3, z: 3}\r
  m_DirtyAABB: 0\r
`

const UnityExplorer = () => {

  const [yaml, setYaml] = useState<string>(scene);

  const handleMessage = (event: MessageEvent) => {
    setYaml(event.data.payload as string);
  };

  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const yamlObj = UnityYamlParser.Parse(scene);

  let pm: PreviewManager;

  pm = new PreviewManager(yamlObj!);

  return (
    <div>
      <SplitterLayout
        percentage
        primaryMinSize={33}
        secondaryMinSize={33}
      >
        <div>
          <TreeView tree={pm.tree}/>
        </div>
        <div style={{margin:"5px"}}>
          <ComponentView/>
        </div>
      </SplitterLayout>
    </div>
  );
}

const ComponentView = () => {

  const [yaml, setYaml] = useState<string>(scene);

  return (
    <div style={{display:"flex", flexDirection:"column", padding:"10px"}}>
      <div style={{flexGrow: 100, backgroundColor:"black"}}>
        <img src={arrow} alt=">" style={{width:"10px", transform: "Rotate(180deg)"}}/>
        Transform
      </div>
      <div style={{display:"flex", flexGrow: 100}}> 
        <div>
          Position:
        </div> 
        x
        <input size={1} style={{flexGrow: 1, flexBasis: 0}}/>
        y
        <input size={1} style={{flexGrow: 1, flexBasis: 0}}/>
        z
        <input size={1} style={{flexGrow: 1, flexBasis: 0}}/>
      </div>
    </div>
  )
}


// const vscode = (global as any).acquireVsCodeApi();
// const alert = (message: string) => {
//   vscode.postMessage({
//       command: 'alert',
//       payload: `${message}`
//   });
//}

export default UnityExplorer;
