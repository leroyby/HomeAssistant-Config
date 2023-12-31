# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: client.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import custom_components.mbapi2020.proto.protos_pb2 as protos__pb2
import custom_components.mbapi2020.proto.service_activation_pb2 as service__activation__pb2
import custom_components.mbapi2020.proto.user_events_pb2 as user__events__pb2
import custom_components.mbapi2020.proto.vehicle_commands_pb2 as vehicle__commands__pb2
import custom_components.mbapi2020.proto.vehicle_events_pb2 as vehicle__events__pb2
import custom_components.mbapi2020.proto.vehicleapi_pb2 as vehicleapi__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x0c\x63lient.proto\x12\x05proto\x1a\x0cprotos.proto\x1a\x18service-activation.proto\x1a\x11user-events.proto\x1a\x16vehicle-commands.proto\x1a\x14vehicle-events.proto\x1a\x10vehicleapi.proto\"\xa8\x0c\n\rClientMessage\x12\x13\n\x0btracking_id\x18\x05 \x01(\t\x12\x37\n\x12unsubscribeRequest\x18\x02 \x01(\x0b\x32\x19.proto.UnsubscribeRequestH\x00\x12/\n\x0e\x63ommandRequest\x18\x03 \x01(\x0b\x32\x15.proto.CommandRequestH\x00\x12.\n\x0etracking_event\x18\x04 \x01(\x0b\x32\x14.proto.TrackingEventH\x00\x12\x35\n\rping_interval\x18\x06 \x01(\x0b\x32\x1c.proto.ConfigurePingIntervalH\x00\x12?\n\x17\x61\x63knowledge_vep_request\x18\x07 \x01(\x0b\x32\x1c.proto.AcknowledgeVEPRequestH\x00\x12`\n)acknowledge_service_status_updates_by_vin\x18\t \x01(\x0b\x32+.proto.AcknowledgeServiceStatusUpdatesByVINH\x00\x12R\n!acknowledge_service_status_update\x18\r \x01(\x0b\x32%.proto.AcknowledgeServiceStatusUpdateH\x00\x12H\n\x1c\x61\x63knowledge_user_data_update\x18\n \x01(\x0b\x32 .proto.AcknowledgeUserDataUpdateH\x00\x12N\n\x1f\x61\x63knowledge_user_picture_update\x18\x0b \x01(\x0b\x32#.proto.AcknowledgeUserPictureUpdateH\x00\x12\x46\n\x1b\x61\x63knowledge_user_pin_update\x18\x0c \x01(\x0b\x32\x1f.proto.AcknowledgeUserPINUpdateH\x00\x12>\n\x17update_user_jwt_request\x18\x0e \x01(\x0b\x32\x1b.proto.UpdateUserJWTRequestH\x00\x12\x66\n,acknowledge_user_vehicle_auth_changed_update\x18\x0f \x01(\x0b\x32..proto.AcknowledgeUserVehicleAuthChangedUpdateH\x00\x12\x82\x01\n<acknowledge_ability_to_get_vehicle_master_data_from_rest_api\x18\x10 \x01(\x0b\x32:.proto.AcknowledgeAbilityToGetVehicleMasterDataFromRestAPIH\x00\x12G\n\x1b\x61\x63knowledge_vehicle_updated\x18\x11 \x01(\x0b\x32 .proto.AcknowledgeVehicleUpdatedH\x00\x12V\n#acknowledge_preferred_dealer_change\x18\x12 \x01(\x0b\x32\'.proto.AcknowledgePreferredDealerChangeH\x00\x12n\n0acknowledge_apptwin_command_status_update_by_vin\x18\x13 \x01(\x0b\x32\x32.proto.AcknowledgeAppTwinCommandStatusUpdatesByVINH\x00\x12\x1f\n\x06logout\x18\x14 \x01(\x0b\x32\r.proto.LogoutH\x00\x12R\n!apptwin_pending_commands_response\x18\x15 \x01(\x0b\x32%.proto.AppTwinPendingCommandsResponseH\x00\x12K\n\x1e\x61\x63knowledge_vep_updates_by_vin\x18\x16 \x01(\x0b\x32!.proto.AcknowledgeVEPUpdatesByVINH\x00\x12K\n\x1d\x61\x63knowledge_assigned_vehicles\x18\x17 \x01(\x0b\x32\".proto.AcknowledgeAssignedVehiclesH\x00\x42\x05\n\x03msgJ\x04\x08\x08\x10\t\"\x08\n\x06LogoutB\x1c\n\x1a\x63om.daimler.mbcarkit.protob\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'client_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\032com.daimler.mbcarkit.proto'
  _CLIENTMESSAGE._serialized_start=147
  _CLIENTMESSAGE._serialized_end=1723
  _LOGOUT._serialized_start=1725
  _LOGOUT._serialized_end=1733
# @@protoc_insertion_point(module_scope)