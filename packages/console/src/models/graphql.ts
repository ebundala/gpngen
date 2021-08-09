
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

import { FileUpload } from 'graphql-upload';

export enum AddressType {
    administrative_area_level_1 = "administrative_area_level_1",
    administrative_area_level_2 = "administrative_area_level_2",
    administrative_area_level_3 = "administrative_area_level_3",
    administrative_area_level_4 = "administrative_area_level_4",
    administrative_area_level_5 = "administrative_area_level_5",
    airport = "airport",
    bus_station = "bus_station",
    church = "church",
    colloquial_area = "colloquial_area",
    country = "country",
    establishment = "establishment",
    floor = "floor",
    food = "food",
    intersection = "intersection",
    locality = "locality",
    lodging = "lodging",
    natural_feature = "natural_feature",
    neighborhood = "neighborhood",
    park = "park",
    place_of_worship = "place_of_worship",
    plus_code = "plus_code",
    point_of_interest = "point_of_interest",
    political = "political",
    post_box = "post_box",
    postal_code = "postal_code",
    postal_town = "postal_town",
    premise = "premise",
    room = "room",
    route = "route",
    store = "store",
    street_address = "street_address",
    street_number = "street_number",
    sublocality = "sublocality",
    sublocality_level_1 = "sublocality_level_1",
    sublocality_level_2 = "sublocality_level_2",
    sublocality_level_3 = "sublocality_level_3",
    sublocality_level_4 = "sublocality_level_4",
    sublocality_level_5 = "sublocality_level_5",
    subpremise = "subpremise",
    train_station = "train_station",
    transit_station = "transit_station",
    ward = "ward"
}

export enum AttachmentScalarFieldEnum {
    attachmentType = "attachmentType",
    createdAt = "createdAt",
    downloadable = "downloadable",
    duration = "duration",
    encoding = "encoding",
    filename = "filename",
    id = "id",
    mimetype = "mimetype",
    path = "path",
    placement = "placement",
    size = "size",
    updatedAt = "updatedAt"
}

export enum AttachmentType {
    AUDIO = "AUDIO",
    DOCUMENT = "DOCUMENT",
    IMAGE = "IMAGE",
    VIDEO = "VIDEO"
}

export enum AuthMode {
    EMAIL = "EMAIL",
    OAUTH = "OAUTH",
    PHONE = "PHONE"
}

export enum CasbinRuleScalarFieldEnum {
    createdAt = "createdAt",
    id = "id",
    ptype = "ptype",
    updatedAt = "updatedAt",
    v0 = "v0",
    v1 = "v1",
    v2 = "v2",
    v3 = "v3",
    v4 = "v4",
    v5 = "v5"
}

export enum DeliveryMode {
    PICKUP = "PICKUP",
    SHIPPING = "SHIPPING",
    VIRTUAL = "VIRTUAL"
}

export enum DeviceScalarFieldEnum {
    device_id = "device_id",
    fcm_id = "fcm_id",
    type = "type",
    userId = "userId"
}

export enum DirectionsReponseStatus {
    INVALID_REQUEST = "INVALID_REQUEST",
    MAX_ROUTE_LENGTH_EXCEEDED = "MAX_ROUTE_LENGTH_EXCEEDED",
    MAX_WAYPOINTS_EXCEEDED = "MAX_WAYPOINTS_EXCEEDED",
    NOT_FOUND = "NOT_FOUND",
    OK = "OK",
    OVER_DAILY_LIMIT = "OVER_DAILY_LIMIT",
    OVER_QUERY_LIMIT = "OVER_QUERY_LIMIT",
    REQUEST_DENIED = "REQUEST_DENIED",
    UNKNOWN_ERROR = "UNKNOWN_ERROR",
    ZERO_RESULTS = "ZERO_RESULTS"
}

export enum Gender {
    FEMALE = "FEMALE",
    MALE = "MALE",
    UNSPECIFIED = "UNSPECIFIED"
}

export enum GeocodedWaypointStatus {
    OK = "OK",
    ZERO_RESULTS = "ZERO_RESULTS"
}

export enum ImageSize {
    biggest = "biggest",
    large = "large",
    medium = "medium",
    small = "small",
    smallest = "smallest"
}

export enum InviteScalarFieldEnum {
    createdAt = "createdAt",
    id = "id",
    inviteeId = "inviteeId",
    inviterId = "inviterId",
    message = "message",
    organizationId = "organizationId",
    state = "state",
    type = "type",
    updatedAt = "updatedAt",
    url = "url"
}

export enum InviteType {
    INSTALL = "INSTALL",
    ORGANIZATION = "ORGANIZATION"
}

export enum Language {
    ar = "ar",
    be = "be",
    bg = "bg",
    bn = "bn",
    bs = "bs",
    ca = "ca",
    cs = "cs",
    cy = "cy",
    da = "da",
    de = "de",
    el = "el",
    en = "en",
    en_GB = "en_GB",
    en_US = "en_US",
    es = "es",
    es_419 = "es_419",
    et = "et",
    eu = "eu",
    fa = "fa",
    fi = "fi",
    fr = "fr",
    fr_CA = "fr_CA",
    gl = "gl",
    gu = "gu",
    he = "he",
    hi = "hi",
    hr = "hr",
    hu = "hu",
    id = "id",
    is = "is",
    it = "it",
    iw = "iw",
    ja = "ja",
    kn = "kn",
    ko = "ko",
    lt = "lt",
    lv = "lv",
    ml = "ml",
    mr = "mr",
    ms = "ms",
    nl = "nl",
    no = "no",
    pl = "pl",
    pt = "pt",
    pt_BR = "pt_BR",
    ro = "ro",
    ru = "ru",
    sk = "sk",
    sl = "sl",
    sr = "sr",
    sv = "sv",
    sw = "sw",
    ta = "ta",
    te = "te",
    th = "th",
    tl = "tl",
    tr = "tr",
    uk = "uk",
    vi = "vi",
    zh_CN = "zh_CN",
    zh_TW = "zh_TW"
}

export enum LocationScalarFieldEnum {
    createdAt = "createdAt",
    id = "id",
    lat = "lat",
    lon = "lon",
    name = "name",
    state = "state",
    updatedAt = "updatedAt"
}

export enum LocationType {
    APPROXIMATE = "APPROXIMATE",
    GEOMETRIC_CENTER = "GEOMETRIC_CENTER",
    RANGE_INTERPOLATED = "RANGE_INTERPOLATED",
    ROOFTOP = "ROOFTOP"
}

export enum Maneuver {
    ferry = "ferry",
    ferry_train = "ferry_train",
    fork_left = "fork_left",
    fork_right = "fork_right",
    merge = "merge",
    ramp_left = "ramp_left",
    ramp_right = "ramp_right",
    roundabout_left = "roundabout_left",
    roundabout_right = "roundabout_right",
    straight = "straight",
    turn_left = "turn_left",
    turn_right = "turn_right",
    turn_sharp_left = "turn_sharp_left",
    turn_sharp_right = "turn_sharp_right",
    turn_slight_left = "turn_slight_left",
    turn_slight_right = "turn_slight_right",
    uturn_left = "uturn_left",
    uturn_right = "uturn_right"
}

export enum MpesaPaymentScalarFieldEnum {
    createdAt = "createdAt",
    id = "id",
    input_Amount = "input_Amount",
    input_Country = "input_Country",
    input_Currency = "input_Currency",
    input_CustomerMSISDN = "input_CustomerMSISDN",
    input_PurchasedItemsDesc = "input_PurchasedItemsDesc",
    input_ServiceProviderCode = "input_ServiceProviderCode",
    input_ThirdPartyConversationID = "input_ThirdPartyConversationID",
    input_TransactionReference = "input_TransactionReference",
    output_ConversationID = "output_ConversationID",
    output_ResponseCode = "output_ResponseCode",
    output_ResponseDesc = "output_ResponseDesc",
    output_ThirdPartyConversationID = "output_ThirdPartyConversationID",
    output_TransactionID = "output_TransactionID",
    state = "state",
    updatedAt = "updatedAt"
}

export enum NotificationType {
    INVITE_ACCEPTED = "INVITE_ACCEPTED",
    INVITE_RECIEVED = "INVITE_RECIEVED",
    INVITE_REJECTED = "INVITE_REJECTED",
    ORDER_ACCEPTED = "ORDER_ACCEPTED",
    ORDER_CANCELLED = "ORDER_CANCELLED",
    ORDER_DELIVERED = "ORDER_DELIVERED",
    ORDER_DISPATCHED = "ORDER_DISPATCHED",
    ORDER_PAYED = "ORDER_PAYED",
    ORDER_RECIEVED = "ORDER_RECIEVED",
    ORDER_UPDATED = "ORDER_UPDATED",
    REVIEW_RECIEVED = "REVIEW_RECIEVED",
    REVIEW_UPDATED = "REVIEW_UPDATED"
}

export enum OrderScalarFieldEnum {
    createdAt = "createdAt",
    deliveryMode = "deliveryMode",
    id = "id",
    locationId = "locationId",
    notes = "notes",
    organizationId = "organizationId",
    ownerId = "ownerId",
    providerId = "providerId",
    quantity = "quantity",
    receiptId = "receiptId",
    serviceId = "serviceId",
    state = "state",
    updatedAt = "updatedAt"
}

export enum OrganizationScalarFieldEnum {
    createdAt = "createdAt",
    description = "description",
    id = "id",
    locationId = "locationId",
    logoId = "logoId",
    name = "name",
    ownerId = "ownerId",
    state = "state",
    updatedAt = "updatedAt"
}

export enum PaymentMethodScalarFieldEnum {
    attachmentId = "attachmentId",
    createdAt = "createdAt",
    description = "description",
    id = "id",
    name = "name",
    state = "state",
    updatedAt = "updatedAt"
}

export enum QueryMode {
    "default" = "default",
    insensitive = "insensitive"
}

export enum RatingScalarFieldEnum {
    comment = "comment",
    createdAt = "createdAt",
    id = "id",
    organizationId = "organizationId",
    ownerId = "ownerId",
    updatedAt = "updatedAt",
    userId = "userId",
    value = "value"
}

export enum ReverseGeocodingLocationType {
    APPROXIMATE = "APPROXIMATE",
    GEOMETRIC_CENTER = "GEOMETRIC_CENTER",
    RANGE_INTERPOLATED = "RANGE_INTERPOLATED",
    ROOFTOP = "ROOFTOP"
}

export enum Role {
    ANONYMOUS = "ANONYMOUS",
    CONSUMER = "CONSUMER",
    MANAGER = "MANAGER",
    PROVIDER = "PROVIDER",
    SUPERUSER = "SUPERUSER"
}

export enum SelcomDisbursementScalarFieldEnum {
    amount = "amount",
    createdAt = "createdAt",
    id = "id",
    reference = "reference",
    resultCode = "resultCode",
    state = "state",
    status = "status",
    transId = "transId",
    updatedAt = "updatedAt",
    userId = "userId",
    utilitycode = "utilitycode",
    utilityref = "utilityref",
    validation = "validation"
}

export enum SelcomPaymentScalarFieldEnum {
    amount = "amount",
    createdAt = "createdAt",
    id = "id",
    msisdn = "msisdn",
    operator = "operator",
    orderId = "orderId",
    reference = "reference",
    resultCode = "resultCode",
    state = "state",
    status = "status",
    transId = "transId",
    updatedAt = "updatedAt",
    utilityref = "utilityref",
    validation = "validation"
}

export enum SelcomPaymentStatus {
    FAILED = "FAILED",
    PENDING = "PENDING",
    SUCCESS = "SUCCESS"
}

export enum SelcomUtilityCode {
    AMCASHIN = "AMCASHIN",
    EZCASHIN = "EZCASHIN",
    HPCASHIN = "HPCASHIN",
    SPCASHIN = "SPCASHIN",
    TPCASHIN = "TPCASHIN",
    TTCASHIN = "TTCASHIN",
    VMCASHIN = "VMCASHIN"
}

export enum ServiceCategoryScalarFieldEnum {
    createdAt = "createdAt",
    id = "id",
    imageId = "imageId",
    name = "name",
    state = "state",
    updatedAt = "updatedAt"
}

export enum ServiceScalarFieldEnum {
    createdAt = "createdAt",
    description = "description",
    id = "id",
    imageId = "imageId",
    name = "name",
    organizationId = "organizationId",
    price = "price",
    serviceCategoryId = "serviceCategoryId",
    state = "state",
    updatedAt = "updatedAt"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum State {
    APPROVED = "APPROVED",
    ARCHIVED = "ARCHIVED",
    COMPLETED = "COMPLETED",
    DELETED = "DELETED",
    PENDING = "PENDING",
    REJECTED = "REJECTED",
    REVIEW = "REVIEW"
}

export enum TrafficModel {
    best_guess = "best_guess",
    optimistic = "optimistic",
    pessimistic = "pessimistic"
}

export enum TransactionScalarFieldEnum {
    createdAt = "createdAt",
    id = "id",
    mpesaPaymentId = "mpesaPaymentId",
    paymentMethode = "paymentMethode",
    selcomDisbursementId = "selcomDisbursementId",
    selcomPaymentId = "selcomPaymentId",
    state = "state",
    type = "type",
    updatedAt = "updatedAt",
    userId = "userId"
}

export enum TransactionType {
    DISBURSEMENT = "DISBURSEMENT",
    PAYMENT = "PAYMENT"
}

export enum TransitMode {
    bus = "bus",
    rail = "rail",
    subway = "subway",
    train = "train",
    tram = "tram"
}

export enum TransitRoutingPreference {
    fewer_transfers = "fewer_transfers",
    less_walking = "less_walking"
}

export enum TravelMode {
    bicycling = "bicycling",
    driving = "driving",
    transit = "transit",
    walking = "walking"
}

export enum TravelRestriction {
    ferries = "ferries",
    highways = "highways",
    indoor = "indoor",
    tolls = "tolls",
    traffic = "traffic"
}

export enum UnitSystem {
    IMPERIAL = "IMPERIAL",
    METRIC = "METRIC"
}

export enum UserScalarFieldEnum {
    avatorId = "avatorId",
    createdAt = "createdAt",
    dateOfBirth = "dateOfBirth",
    disabled = "disabled",
    displayName = "displayName",
    email = "email",
    emailVerified = "emailVerified",
    gender = "gender",
    id = "id",
    locationId = "locationId",
    organizationId = "organizationId",
    phoneNumber = "phoneNumber",
    role = "role",
    state = "state",
    updatedAt = "updatedAt"
}

export enum VehicleType {
    BUS = "BUS",
    CABLE_CAR = "CABLE_CAR",
    COMMUTER_TRAIN = "COMMUTER_TRAIN",
    FERRY = "FERRY",
    FUNICULAR = "FUNICULAR",
    GONDOLA_LIFT = "GONDOLA_LIFT",
    HEAVY_RAIL = "HEAVY_RAIL",
    HIGH_SPEED_TRAIN = "HIGH_SPEED_TRAIN",
    INTERCITY_BUS = "INTERCITY_BUS",
    METRO_RAIL = "METRO_RAIL",
    MONORAIL = "MONORAIL",
    OTHER = "OTHER",
    RAIL = "RAIL",
    SHARE_TAXI = "SHARE_TAXI",
    SUBWAY = "SUBWAY",
    TRAM = "TRAM",
    TROLLEYBUS = "TROLLEYBUS"
}

export class AttachmentAvgOrderByAggregateInput {
    duration?: Nullable<SortOrder>;
    size?: Nullable<SortOrder>;
}

export class AttachmentCountOrderByAggregateInput {
    attachmentType?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    downloadable?: Nullable<SortOrder>;
    duration?: Nullable<SortOrder>;
    encoding?: Nullable<SortOrder>;
    filename?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    mimetype?: Nullable<SortOrder>;
    path?: Nullable<SortOrder>;
    placement?: Nullable<SortOrder>;
    size?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class AttachmentCreateInput {
    attachmentType?: Nullable<AttachmentType>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    organizations?: Nullable<OrganizationCreateNestedManyWithoutLogoInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedOneWithoutLogoInput>;
    placement?: Nullable<string>;
    serviceCategory?: Nullable<ServiceCategoryCreateNestedOneWithoutImageInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateManyInput {
    attachmentType?: Nullable<AttachmentType>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path: Upload;
    placement?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentCreateNestedOneWithoutOrdersInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutOrdersInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutOrdersInput>;
}

export class AttachmentCreateNestedOneWithoutOrganizationsInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutOrganizationsInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutOrganizationsInput>;
}

export class AttachmentCreateNestedOneWithoutPaymentMethodsInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutPaymentMethodsInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutPaymentMethodsInput>;
}

export class AttachmentCreateNestedOneWithoutServiceCategoryInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutServiceCategoryInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutServiceCategoryInput>;
}

export class AttachmentCreateNestedOneWithoutServicesInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutServicesInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutServicesInput>;
}

export class AttachmentCreateNestedOneWithoutUsersInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutUsersInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutUsersInput>;
}

export class AttachmentCreateOrConnectWithoutOrdersInput {
    create: AttachmentUncheckedCreateWithoutOrdersInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutOrganizationsInput {
    create: AttachmentUncheckedCreateWithoutOrganizationsInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutPaymentMethodsInput {
    create: AttachmentUncheckedCreateWithoutPaymentMethodsInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutServiceCategoryInput {
    create: AttachmentUncheckedCreateWithoutServiceCategoryInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutServicesInput {
    create: AttachmentUncheckedCreateWithoutServicesInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateOrConnectWithoutUsersInput {
    create: AttachmentUncheckedCreateWithoutUsersInput;
    where: AttachmentWhereUniqueInput;
}

export class AttachmentCreateWithoutOrdersInput {
    attachmentType?: Nullable<AttachmentType>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    organizations?: Nullable<OrganizationCreateNestedManyWithoutLogoInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedOneWithoutLogoInput>;
    placement?: Nullable<string>;
    serviceCategory?: Nullable<ServiceCategoryCreateNestedOneWithoutImageInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutOrganizationsInput {
    attachmentType?: Nullable<AttachmentType>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedOneWithoutLogoInput>;
    placement?: Nullable<string>;
    serviceCategory?: Nullable<ServiceCategoryCreateNestedOneWithoutImageInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutPaymentMethodsInput {
    attachmentType?: Nullable<AttachmentType>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    organizations?: Nullable<OrganizationCreateNestedManyWithoutLogoInput>;
    path: string;
    placement?: Nullable<string>;
    serviceCategory?: Nullable<ServiceCategoryCreateNestedOneWithoutImageInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutServiceCategoryInput {
    attachmentType?: Nullable<AttachmentType>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    organizations?: Nullable<OrganizationCreateNestedManyWithoutLogoInput>;
    path: string;
    paymentMethods?: Nullable<PaymentMethodCreateNestedOneWithoutLogoInput>;
    placement?: Nullable<string>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutServicesInput {
    attachmentType?: Nullable<AttachmentType>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    organizations?: Nullable<OrganizationCreateNestedManyWithoutLogoInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedOneWithoutLogoInput>;
    placement?: Nullable<string>;
    serviceCategory?: Nullable<ServiceCategoryCreateNestedOneWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentCreateWithoutUsersInput {
    attachmentType?: Nullable<AttachmentType>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderCreateNestedManyWithoutReceiptInput>;
    organizations?: Nullable<OrganizationCreateNestedManyWithoutLogoInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodCreateNestedOneWithoutLogoInput>;
    placement?: Nullable<string>;
    serviceCategory?: Nullable<ServiceCategoryCreateNestedOneWithoutImageInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentMaxOrderByAggregateInput {
    attachmentType?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    downloadable?: Nullable<SortOrder>;
    duration?: Nullable<SortOrder>;
    encoding?: Nullable<SortOrder>;
    filename?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    mimetype?: Nullable<SortOrder>;
    path?: Nullable<SortOrder>;
    placement?: Nullable<SortOrder>;
    size?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class AttachmentMinOrderByAggregateInput {
    attachmentType?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    downloadable?: Nullable<SortOrder>;
    duration?: Nullable<SortOrder>;
    encoding?: Nullable<SortOrder>;
    filename?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    mimetype?: Nullable<SortOrder>;
    path?: Nullable<SortOrder>;
    placement?: Nullable<SortOrder>;
    size?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class AttachmentOrderByInput {
    attachmentType?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    downloadable?: Nullable<SortOrder>;
    duration?: Nullable<SortOrder>;
    encoding?: Nullable<SortOrder>;
    filename?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    mimetype?: Nullable<SortOrder>;
    path?: Nullable<SortOrder>;
    placement?: Nullable<SortOrder>;
    size?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class AttachmentOrderByWithAggregationInput {
    _avg?: Nullable<AttachmentAvgOrderByAggregateInput>;
    _count?: Nullable<AttachmentCountOrderByAggregateInput>;
    _max?: Nullable<AttachmentMaxOrderByAggregateInput>;
    _min?: Nullable<AttachmentMinOrderByAggregateInput>;
    _sum?: Nullable<AttachmentSumOrderByAggregateInput>;
    attachmentType?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    downloadable?: Nullable<SortOrder>;
    duration?: Nullable<SortOrder>;
    encoding?: Nullable<SortOrder>;
    filename?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    mimetype?: Nullable<SortOrder>;
    path?: Nullable<SortOrder>;
    placement?: Nullable<SortOrder>;
    size?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class AttachmentRelationFilter {
    is?: Nullable<AttachmentWhereInput>;
    isNot?: Nullable<AttachmentWhereInput>;
}

export class AttachmentScalarWhereWithAggregatesInput {
    AND?: Nullable<AttachmentScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<AttachmentScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<AttachmentScalarWhereWithAggregatesInput[]>;
    attachmentType?: Nullable<EnumAttachmentTypeWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    downloadable?: Nullable<BoolWithAggregatesFilter>;
    duration?: Nullable<IntWithAggregatesFilter>;
    encoding?: Nullable<StringNullableWithAggregatesFilter>;
    filename?: Nullable<StringNullableWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    mimetype?: Nullable<StringNullableWithAggregatesFilter>;
    path?: Nullable<StringWithAggregatesFilter>;
    placement?: Nullable<StringWithAggregatesFilter>;
    size?: Nullable<IntWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class AttachmentSumOrderByAggregateInput {
    duration?: Nullable<SortOrder>;
    size?: Nullable<SortOrder>;
}

export class AttachmentUncheckedCreateInput {
    attachmentType?: Nullable<AttachmentType>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    organizations?: Nullable<OrganizationUncheckedCreateNestedManyWithoutLogoInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedOneWithoutLogoInput>;
    placement?: Nullable<string>;
    serviceCategory?: Nullable<ServiceCategoryUncheckedCreateNestedOneWithoutImageInput>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutOrdersInput {
    attachmentType?: Nullable<AttachmentType>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    organizations?: Nullable<OrganizationUncheckedCreateNestedManyWithoutLogoInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedOneWithoutLogoInput>;
    placement?: Nullable<string>;
    serviceCategory?: Nullable<ServiceCategoryUncheckedCreateNestedOneWithoutImageInput>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutOrganizationsInput {
    attachmentType?: Nullable<AttachmentType>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedOneWithoutLogoInput>;
    placement?: Nullable<string>;
    serviceCategory?: Nullable<ServiceCategoryUncheckedCreateNestedOneWithoutImageInput>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutPaymentMethodsInput {
    attachmentType?: Nullable<AttachmentType>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    organizations?: Nullable<OrganizationUncheckedCreateNestedManyWithoutLogoInput>;
    path: string;
    placement?: Nullable<string>;
    serviceCategory?: Nullable<ServiceCategoryUncheckedCreateNestedOneWithoutImageInput>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutServiceCategoryInput {
    attachmentType?: Nullable<AttachmentType>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    organizations?: Nullable<OrganizationUncheckedCreateNestedManyWithoutLogoInput>;
    path: string;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedOneWithoutLogoInput>;
    placement?: Nullable<string>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutServicesInput {
    attachmentType?: Nullable<AttachmentType>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    organizations?: Nullable<OrganizationUncheckedCreateNestedManyWithoutLogoInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedOneWithoutLogoInput>;
    placement?: Nullable<string>;
    serviceCategory?: Nullable<ServiceCategoryUncheckedCreateNestedOneWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserUncheckedCreateNestedManyWithoutAvatorInput>;
}

export class AttachmentUncheckedCreateWithoutUsersInput {
    attachmentType?: Nullable<AttachmentType>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutReceiptInput>;
    organizations?: Nullable<OrganizationUncheckedCreateNestedManyWithoutLogoInput>;
    path: Upload;
    paymentMethods?: Nullable<PaymentMethodUncheckedCreateNestedOneWithoutLogoInput>;
    placement?: Nullable<string>;
    serviceCategory?: Nullable<ServiceCategoryUncheckedCreateNestedOneWithoutImageInput>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutImageInput>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentUncheckedUpdateInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    organizations?: Nullable<OrganizationUncheckedUpdateManyWithoutLogoInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateOneWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    serviceCategory?: Nullable<ServiceCategoryUncheckedUpdateOneWithoutImageInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateManyInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AttachmentUncheckedUpdateWithoutOrdersInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUncheckedUpdateManyWithoutLogoInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateOneWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    serviceCategory?: Nullable<ServiceCategoryUncheckedUpdateOneWithoutImageInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutOrganizationsInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateOneWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    serviceCategory?: Nullable<ServiceCategoryUncheckedUpdateOneWithoutImageInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutPaymentMethodsInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    organizations?: Nullable<OrganizationUncheckedUpdateManyWithoutLogoInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    serviceCategory?: Nullable<ServiceCategoryUncheckedUpdateOneWithoutImageInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutServiceCategoryInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    organizations?: Nullable<OrganizationUncheckedUpdateManyWithoutLogoInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateOneWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutServicesInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    organizations?: Nullable<OrganizationUncheckedUpdateManyWithoutLogoInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateOneWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    serviceCategory?: Nullable<ServiceCategoryUncheckedUpdateOneWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUncheckedUpdateManyWithoutAvatorInput>;
}

export class AttachmentUncheckedUpdateWithoutUsersInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutReceiptInput>;
    organizations?: Nullable<OrganizationUncheckedUpdateManyWithoutLogoInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUncheckedUpdateOneWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    serviceCategory?: Nullable<ServiceCategoryUncheckedUpdateOneWithoutImageInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AttachmentUpdateInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    organizations?: Nullable<OrganizationUpdateManyWithoutLogoInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateOneWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    serviceCategory?: Nullable<ServiceCategoryUpdateOneWithoutImageInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateManyMutationInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AttachmentUpdateOneRequiredWithoutOrganizationsInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutOrganizationsInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutOrganizationsInput>;
    update?: Nullable<AttachmentUncheckedUpdateWithoutOrganizationsInput>;
    upsert?: Nullable<AttachmentUpsertWithoutOrganizationsInput>;
}

export class AttachmentUpdateOneRequiredWithoutPaymentMethodsInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutPaymentMethodsInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutPaymentMethodsInput>;
    update?: Nullable<AttachmentUncheckedUpdateWithoutPaymentMethodsInput>;
    upsert?: Nullable<AttachmentUpsertWithoutPaymentMethodsInput>;
}

export class AttachmentUpdateOneRequiredWithoutServiceCategoryInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutServiceCategoryInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutServiceCategoryInput>;
    update?: Nullable<AttachmentUncheckedUpdateWithoutServiceCategoryInput>;
    upsert?: Nullable<AttachmentUpsertWithoutServiceCategoryInput>;
}

export class AttachmentUpdateOneRequiredWithoutServicesInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutServicesInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutServicesInput>;
    update?: Nullable<AttachmentUncheckedUpdateWithoutServicesInput>;
    upsert?: Nullable<AttachmentUpsertWithoutServicesInput>;
}

export class AttachmentUpdateOneWithoutOrdersInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutOrdersInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutOrdersInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<AttachmentUncheckedUpdateWithoutOrdersInput>;
    upsert?: Nullable<AttachmentUpsertWithoutOrdersInput>;
}

export class AttachmentUpdateOneWithoutUsersInput {
    connect?: Nullable<AttachmentWhereUniqueInput>;
    connectOrCreate?: Nullable<AttachmentCreateOrConnectWithoutUsersInput>;
    create?: Nullable<AttachmentUncheckedCreateWithoutUsersInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<AttachmentUncheckedUpdateWithoutUsersInput>;
    upsert?: Nullable<AttachmentUpsertWithoutUsersInput>;
}

export class AttachmentUpdateWithoutOrdersInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUpdateManyWithoutLogoInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateOneWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    serviceCategory?: Nullable<ServiceCategoryUpdateOneWithoutImageInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutOrganizationsInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateOneWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    serviceCategory?: Nullable<ServiceCategoryUpdateOneWithoutImageInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutPaymentMethodsInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    organizations?: Nullable<OrganizationUpdateManyWithoutLogoInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    serviceCategory?: Nullable<ServiceCategoryUpdateOneWithoutImageInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutServiceCategoryInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    organizations?: Nullable<OrganizationUpdateManyWithoutLogoInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateOneWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutServicesInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    organizations?: Nullable<OrganizationUpdateManyWithoutLogoInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateOneWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    serviceCategory?: Nullable<ServiceCategoryUpdateOneWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateManyWithoutAvatorInput>;
}

export class AttachmentUpdateWithoutUsersInput {
    attachmentType?: Nullable<EnumAttachmentTypeFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    downloadable?: Nullable<BoolFieldUpdateOperationsInput>;
    duration?: Nullable<IntFieldUpdateOperationsInput>;
    encoding?: Nullable<NullableStringFieldUpdateOperationsInput>;
    filename?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mimetype?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutReceiptInput>;
    organizations?: Nullable<OrganizationUpdateManyWithoutLogoInput>;
    path?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethods?: Nullable<PaymentMethodUpdateOneWithoutLogoInput>;
    placement?: Nullable<StringFieldUpdateOperationsInput>;
    serviceCategory?: Nullable<ServiceCategoryUpdateOneWithoutImageInput>;
    services?: Nullable<ServiceUpdateManyWithoutImageInput>;
    size?: Nullable<IntFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class AttachmentUpsertWithoutOrdersInput {
    create: AttachmentUncheckedCreateWithoutOrdersInput;
    update: AttachmentUncheckedUpdateWithoutOrdersInput;
}

export class AttachmentUpsertWithoutOrganizationsInput {
    create: AttachmentUncheckedCreateWithoutOrganizationsInput;
    update: AttachmentUncheckedUpdateWithoutOrganizationsInput;
}

export class AttachmentUpsertWithoutPaymentMethodsInput {
    create: AttachmentUncheckedCreateWithoutPaymentMethodsInput;
    update: AttachmentUncheckedUpdateWithoutPaymentMethodsInput;
}

export class AttachmentUpsertWithoutServiceCategoryInput {
    create: AttachmentUncheckedCreateWithoutServiceCategoryInput;
    update: AttachmentUncheckedUpdateWithoutServiceCategoryInput;
}

export class AttachmentUpsertWithoutServicesInput {
    create: AttachmentUncheckedCreateWithoutServicesInput;
    update: AttachmentUncheckedUpdateWithoutServicesInput;
}

export class AttachmentUpsertWithoutUsersInput {
    create: AttachmentUncheckedCreateWithoutUsersInput;
    update: AttachmentUncheckedUpdateWithoutUsersInput;
}

export class AttachmentWhereInput {
    AND?: Nullable<AttachmentWhereInput[]>;
    NOT?: Nullable<AttachmentWhereInput[]>;
    OR?: Nullable<AttachmentWhereInput[]>;
    attachmentType?: Nullable<EnumAttachmentTypeFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    downloadable?: Nullable<BoolFilter>;
    duration?: Nullable<IntFilter>;
    encoding?: Nullable<StringNullableFilter>;
    filename?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    mimetype?: Nullable<StringNullableFilter>;
    orders?: Nullable<OrderListRelationFilter>;
    organizations?: Nullable<OrganizationListRelationFilter>;
    path?: Nullable<StringFilter>;
    paymentMethods?: Nullable<PaymentMethodWhereInput>;
    placement?: Nullable<StringFilter>;
    serviceCategory?: Nullable<ServiceCategoryWhereInput>;
    services?: Nullable<ServiceListRelationFilter>;
    size?: Nullable<IntFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    users?: Nullable<UserListRelationFilter>;
}

export class AttachmentWhereUniqueInput {
    id?: Nullable<string>;
}

export class AuthInput {
    email: string;
    password: string;
}

export class BoolFieldUpdateOperationsInput {
    set?: Nullable<boolean>;
}

export class BoolFilter {
    equals?: Nullable<boolean>;
    not?: Nullable<NestedBoolFilter>;
}

export class BoolWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedBoolFilter>;
    _min?: Nullable<NestedBoolFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<boolean>;
    max?: Nullable<NestedBoolFilter>;
    min?: Nullable<NestedBoolFilter>;
    not?: Nullable<NestedBoolWithAggregatesFilter>;
}

export class CasbinRuleAvgOrderByAggregateInput {
    id?: Nullable<SortOrder>;
}

export class CasbinRuleCountOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    ptype?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    v0?: Nullable<SortOrder>;
    v1?: Nullable<SortOrder>;
    v2?: Nullable<SortOrder>;
    v3?: Nullable<SortOrder>;
    v4?: Nullable<SortOrder>;
    v5?: Nullable<SortOrder>;
}

export class CasbinRuleCreateInput {
    createdAt?: Nullable<DateTime>;
    ptype: string;
    updatedAt?: Nullable<DateTime>;
    v0?: Nullable<string>;
    v1?: Nullable<string>;
    v2?: Nullable<string>;
    v3?: Nullable<string>;
    v4?: Nullable<string>;
    v5?: Nullable<string>;
}

export class CasbinRuleCreateManyInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<number>;
    ptype: string;
    updatedAt?: Nullable<DateTime>;
    v0?: Nullable<string>;
    v1?: Nullable<string>;
    v2?: Nullable<string>;
    v3?: Nullable<string>;
    v4?: Nullable<string>;
    v5?: Nullable<string>;
}

export class CasbinRuleMaxOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    ptype?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    v0?: Nullable<SortOrder>;
    v1?: Nullable<SortOrder>;
    v2?: Nullable<SortOrder>;
    v3?: Nullable<SortOrder>;
    v4?: Nullable<SortOrder>;
    v5?: Nullable<SortOrder>;
}

export class CasbinRuleMinOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    ptype?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    v0?: Nullable<SortOrder>;
    v1?: Nullable<SortOrder>;
    v2?: Nullable<SortOrder>;
    v3?: Nullable<SortOrder>;
    v4?: Nullable<SortOrder>;
    v5?: Nullable<SortOrder>;
}

export class CasbinRuleOrderByInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    ptype?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    v0?: Nullable<SortOrder>;
    v1?: Nullable<SortOrder>;
    v2?: Nullable<SortOrder>;
    v3?: Nullable<SortOrder>;
    v4?: Nullable<SortOrder>;
    v5?: Nullable<SortOrder>;
}

export class CasbinRuleOrderByWithAggregationInput {
    _avg?: Nullable<CasbinRuleAvgOrderByAggregateInput>;
    _count?: Nullable<CasbinRuleCountOrderByAggregateInput>;
    _max?: Nullable<CasbinRuleMaxOrderByAggregateInput>;
    _min?: Nullable<CasbinRuleMinOrderByAggregateInput>;
    _sum?: Nullable<CasbinRuleSumOrderByAggregateInput>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    ptype?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    v0?: Nullable<SortOrder>;
    v1?: Nullable<SortOrder>;
    v2?: Nullable<SortOrder>;
    v3?: Nullable<SortOrder>;
    v4?: Nullable<SortOrder>;
    v5?: Nullable<SortOrder>;
}

export class CasbinRuleScalarWhereWithAggregatesInput {
    AND?: Nullable<CasbinRuleScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<CasbinRuleScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<CasbinRuleScalarWhereWithAggregatesInput[]>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<IntWithAggregatesFilter>;
    ptype?: Nullable<StringWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
    v0?: Nullable<StringNullableWithAggregatesFilter>;
    v1?: Nullable<StringNullableWithAggregatesFilter>;
    v2?: Nullable<StringNullableWithAggregatesFilter>;
    v3?: Nullable<StringNullableWithAggregatesFilter>;
    v4?: Nullable<StringNullableWithAggregatesFilter>;
    v5?: Nullable<StringNullableWithAggregatesFilter>;
}

export class CasbinRuleSumOrderByAggregateInput {
    id?: Nullable<SortOrder>;
}

export class CasbinRuleUncheckedCreateInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<number>;
    ptype: string;
    updatedAt?: Nullable<DateTime>;
    v0?: Nullable<string>;
    v1?: Nullable<string>;
    v2?: Nullable<string>;
    v3?: Nullable<string>;
    v4?: Nullable<string>;
    v5?: Nullable<string>;
}

export class CasbinRuleUncheckedUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<IntFieldUpdateOperationsInput>;
    ptype?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    v0?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v1?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v2?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v3?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v4?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v5?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class CasbinRuleUncheckedUpdateManyInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<IntFieldUpdateOperationsInput>;
    ptype?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    v0?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v1?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v2?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v3?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v4?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v5?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class CasbinRuleUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    ptype?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    v0?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v1?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v2?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v3?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v4?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v5?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class CasbinRuleUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    ptype?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    v0?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v1?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v2?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v3?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v4?: Nullable<NullableStringFieldUpdateOperationsInput>;
    v5?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class CasbinRuleWhereInput {
    AND?: Nullable<CasbinRuleWhereInput[]>;
    NOT?: Nullable<CasbinRuleWhereInput[]>;
    OR?: Nullable<CasbinRuleWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<IntFilter>;
    ptype?: Nullable<StringFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    v0?: Nullable<StringNullableFilter>;
    v1?: Nullable<StringNullableFilter>;
    v2?: Nullable<StringNullableFilter>;
    v3?: Nullable<StringNullableFilter>;
    v4?: Nullable<StringNullableFilter>;
    v5?: Nullable<StringNullableFilter>;
}

export class CasbinRuleWhereUniqueInput {
    id?: Nullable<number>;
}

export class DateTimeFieldUpdateOperationsInput {
    set?: Nullable<DateTime>;
}

export class DateTimeFilter {
    equals?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    not?: Nullable<NestedDateTimeFilter>;
    notIn?: Nullable<DateTime[]>;
}

export class DateTimeNullableFilter {
    equals?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    not?: Nullable<NestedDateTimeNullableFilter>;
    notIn?: Nullable<DateTime[]>;
}

export class DateTimeNullableWithAggregatesFilter {
    _count?: Nullable<NestedIntNullableFilter>;
    _max?: Nullable<NestedDateTimeNullableFilter>;
    _min?: Nullable<NestedDateTimeNullableFilter>;
    count?: Nullable<NestedIntNullableFilter>;
    equals?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    max?: Nullable<NestedDateTimeNullableFilter>;
    min?: Nullable<NestedDateTimeNullableFilter>;
    not?: Nullable<NestedDateTimeNullableWithAggregatesFilter>;
    notIn?: Nullable<DateTime[]>;
}

export class DateTimeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedDateTimeFilter>;
    _min?: Nullable<NestedDateTimeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    max?: Nullable<NestedDateTimeFilter>;
    min?: Nullable<NestedDateTimeFilter>;
    not?: Nullable<NestedDateTimeWithAggregatesFilter>;
    notIn?: Nullable<DateTime[]>;
}

export class DeviceCountOrderByAggregateInput {
    device_id?: Nullable<SortOrder>;
    fcm_id?: Nullable<SortOrder>;
    type?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
}

export class DeviceCreateInput {
    device_id: string;
    fcm_id?: Nullable<string>;
    type?: Nullable<string>;
    user?: Nullable<UserCreateNestedOneWithoutDeviceInput>;
}

export class DeviceCreateManyInput {
    device_id: string;
    fcm_id?: Nullable<string>;
    type?: Nullable<string>;
    userId?: Nullable<string>;
}

export class DeviceCreateNestedOneWithoutUserInput {
    connect?: Nullable<DeviceWhereUniqueInput>;
    connectOrCreate?: Nullable<DeviceCreateOrConnectWithoutUserInput>;
    create?: Nullable<DeviceUncheckedCreateWithoutUserInput>;
}

export class DeviceCreateOrConnectWithoutUserInput {
    create: DeviceUncheckedCreateWithoutUserInput;
    where: DeviceWhereUniqueInput;
}

export class DeviceCreateWithoutUserInput {
    device_id: string;
    fcm_id?: Nullable<string>;
    type?: Nullable<string>;
}

export class DeviceMaxOrderByAggregateInput {
    device_id?: Nullable<SortOrder>;
    fcm_id?: Nullable<SortOrder>;
    type?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
}

export class DeviceMinOrderByAggregateInput {
    device_id?: Nullable<SortOrder>;
    fcm_id?: Nullable<SortOrder>;
    type?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
}

export class DeviceOrderByInput {
    device_id?: Nullable<SortOrder>;
    fcm_id?: Nullable<SortOrder>;
    type?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
}

export class DeviceOrderByWithAggregationInput {
    _count?: Nullable<DeviceCountOrderByAggregateInput>;
    _max?: Nullable<DeviceMaxOrderByAggregateInput>;
    _min?: Nullable<DeviceMinOrderByAggregateInput>;
    device_id?: Nullable<SortOrder>;
    fcm_id?: Nullable<SortOrder>;
    type?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
}

export class DeviceRelationFilter {
    is?: Nullable<DeviceWhereInput>;
    isNot?: Nullable<DeviceWhereInput>;
}

export class DeviceScalarWhereWithAggregatesInput {
    AND?: Nullable<DeviceScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<DeviceScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<DeviceScalarWhereWithAggregatesInput[]>;
    device_id?: Nullable<StringWithAggregatesFilter>;
    fcm_id?: Nullable<StringNullableWithAggregatesFilter>;
    type?: Nullable<StringWithAggregatesFilter>;
    userId?: Nullable<StringNullableWithAggregatesFilter>;
}

export class DeviceUncheckedCreateInput {
    device_id: string;
    fcm_id?: Nullable<string>;
    type?: Nullable<string>;
    userId?: Nullable<string>;
}

export class DeviceUncheckedCreateNestedOneWithoutUserInput {
    connect?: Nullable<DeviceWhereUniqueInput>;
    connectOrCreate?: Nullable<DeviceCreateOrConnectWithoutUserInput>;
    create?: Nullable<DeviceUncheckedCreateWithoutUserInput>;
}

export class DeviceUncheckedCreateWithoutUserInput {
    device_id: string;
    fcm_id?: Nullable<string>;
    type?: Nullable<string>;
}

export class DeviceUncheckedUpdateInput {
    device_id?: Nullable<StringFieldUpdateOperationsInput>;
    fcm_id?: Nullable<NullableStringFieldUpdateOperationsInput>;
    type?: Nullable<StringFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class DeviceUncheckedUpdateManyInput {
    device_id?: Nullable<StringFieldUpdateOperationsInput>;
    fcm_id?: Nullable<NullableStringFieldUpdateOperationsInput>;
    type?: Nullable<StringFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class DeviceUncheckedUpdateOneWithoutUserInput {
    connect?: Nullable<DeviceWhereUniqueInput>;
    connectOrCreate?: Nullable<DeviceCreateOrConnectWithoutUserInput>;
    create?: Nullable<DeviceUncheckedCreateWithoutUserInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<DeviceUncheckedUpdateWithoutUserInput>;
    upsert?: Nullable<DeviceUpsertWithoutUserInput>;
}

export class DeviceUncheckedUpdateWithoutUserInput {
    device_id?: Nullable<StringFieldUpdateOperationsInput>;
    fcm_id?: Nullable<NullableStringFieldUpdateOperationsInput>;
    type?: Nullable<StringFieldUpdateOperationsInput>;
}

export class DeviceUpdateInput {
    device_id?: Nullable<StringFieldUpdateOperationsInput>;
    fcm_id?: Nullable<NullableStringFieldUpdateOperationsInput>;
    type?: Nullable<StringFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateOneWithoutDeviceInput>;
}

export class DeviceUpdateManyMutationInput {
    device_id?: Nullable<StringFieldUpdateOperationsInput>;
    fcm_id?: Nullable<NullableStringFieldUpdateOperationsInput>;
    type?: Nullable<StringFieldUpdateOperationsInput>;
}

export class DeviceUpdateOneWithoutUserInput {
    connect?: Nullable<DeviceWhereUniqueInput>;
    connectOrCreate?: Nullable<DeviceCreateOrConnectWithoutUserInput>;
    create?: Nullable<DeviceUncheckedCreateWithoutUserInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<DeviceUncheckedUpdateWithoutUserInput>;
    upsert?: Nullable<DeviceUpsertWithoutUserInput>;
}

export class DeviceUpdateWithoutUserInput {
    device_id?: Nullable<StringFieldUpdateOperationsInput>;
    fcm_id?: Nullable<NullableStringFieldUpdateOperationsInput>;
    type?: Nullable<StringFieldUpdateOperationsInput>;
}

export class DeviceUpsertWithoutUserInput {
    create: DeviceUncheckedCreateWithoutUserInput;
    update: DeviceUncheckedUpdateWithoutUserInput;
}

export class DeviceWhereInput {
    AND?: Nullable<DeviceWhereInput[]>;
    NOT?: Nullable<DeviceWhereInput[]>;
    OR?: Nullable<DeviceWhereInput[]>;
    device_id?: Nullable<StringFilter>;
    fcm_id?: Nullable<StringNullableFilter>;
    type?: Nullable<StringFilter>;
    user?: Nullable<UserWhereInput>;
    userId?: Nullable<StringNullableFilter>;
}

export class DeviceWhereUniqueInput {
    device_id?: Nullable<string>;
    fcm_id?: Nullable<string>;
}

export class EnumAttachmentTypeFieldUpdateOperationsInput {
    set?: Nullable<AttachmentType>;
}

export class EnumAttachmentTypeFilter {
    equals?: Nullable<AttachmentType>;
    in?: Nullable<AttachmentType[]>;
    not?: Nullable<NestedEnumAttachmentTypeFilter>;
    notIn?: Nullable<AttachmentType[]>;
}

export class EnumAttachmentTypeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumAttachmentTypeFilter>;
    _min?: Nullable<NestedEnumAttachmentTypeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<AttachmentType>;
    in?: Nullable<AttachmentType[]>;
    max?: Nullable<NestedEnumAttachmentTypeFilter>;
    min?: Nullable<NestedEnumAttachmentTypeFilter>;
    not?: Nullable<NestedEnumAttachmentTypeWithAggregatesFilter>;
    notIn?: Nullable<AttachmentType[]>;
}

export class EnumDeliveryModeNullableListFilter {
    equals?: Nullable<DeliveryMode[]>;
    has?: Nullable<DeliveryMode>;
    hasEvery?: Nullable<DeliveryMode[]>;
    hasSome?: Nullable<DeliveryMode[]>;
    isEmpty?: Nullable<boolean>;
}

export class EnumGenderFieldUpdateOperationsInput {
    set?: Nullable<Gender>;
}

export class EnumGenderFilter {
    equals?: Nullable<Gender>;
    in?: Nullable<Gender[]>;
    not?: Nullable<NestedEnumGenderFilter>;
    notIn?: Nullable<Gender[]>;
}

export class EnumGenderWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumGenderFilter>;
    _min?: Nullable<NestedEnumGenderFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<Gender>;
    in?: Nullable<Gender[]>;
    max?: Nullable<NestedEnumGenderFilter>;
    min?: Nullable<NestedEnumGenderFilter>;
    not?: Nullable<NestedEnumGenderWithAggregatesFilter>;
    notIn?: Nullable<Gender[]>;
}

export class EnumInviteTypeFieldUpdateOperationsInput {
    set?: Nullable<InviteType>;
}

export class EnumInviteTypeFilter {
    equals?: Nullable<InviteType>;
    in?: Nullable<InviteType[]>;
    not?: Nullable<NestedEnumInviteTypeFilter>;
    notIn?: Nullable<InviteType[]>;
}

export class EnumInviteTypeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumInviteTypeFilter>;
    _min?: Nullable<NestedEnumInviteTypeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<InviteType>;
    in?: Nullable<InviteType[]>;
    max?: Nullable<NestedEnumInviteTypeFilter>;
    min?: Nullable<NestedEnumInviteTypeFilter>;
    not?: Nullable<NestedEnumInviteTypeWithAggregatesFilter>;
    notIn?: Nullable<InviteType[]>;
}

export class EnumRoleFieldUpdateOperationsInput {
    set?: Nullable<Role>;
}

export class EnumRoleFilter {
    equals?: Nullable<Role>;
    in?: Nullable<Role[]>;
    not?: Nullable<NestedEnumRoleFilter>;
    notIn?: Nullable<Role[]>;
}

export class EnumRoleWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumRoleFilter>;
    _min?: Nullable<NestedEnumRoleFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<Role>;
    in?: Nullable<Role[]>;
    max?: Nullable<NestedEnumRoleFilter>;
    min?: Nullable<NestedEnumRoleFilter>;
    not?: Nullable<NestedEnumRoleWithAggregatesFilter>;
    notIn?: Nullable<Role[]>;
}

export class EnumSelcomPaymentStatusFieldUpdateOperationsInput {
    set?: Nullable<SelcomPaymentStatus>;
}

export class EnumSelcomPaymentStatusFilter {
    equals?: Nullable<SelcomPaymentStatus>;
    in?: Nullable<SelcomPaymentStatus[]>;
    not?: Nullable<NestedEnumSelcomPaymentStatusFilter>;
    notIn?: Nullable<SelcomPaymentStatus[]>;
}

export class EnumSelcomPaymentStatusWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumSelcomPaymentStatusFilter>;
    _min?: Nullable<NestedEnumSelcomPaymentStatusFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<SelcomPaymentStatus>;
    in?: Nullable<SelcomPaymentStatus[]>;
    max?: Nullable<NestedEnumSelcomPaymentStatusFilter>;
    min?: Nullable<NestedEnumSelcomPaymentStatusFilter>;
    not?: Nullable<NestedEnumSelcomPaymentStatusWithAggregatesFilter>;
    notIn?: Nullable<SelcomPaymentStatus[]>;
}

export class EnumSelcomUtilityCodeFieldUpdateOperationsInput {
    set?: Nullable<SelcomUtilityCode>;
}

export class EnumSelcomUtilityCodeFilter {
    equals?: Nullable<SelcomUtilityCode>;
    in?: Nullable<SelcomUtilityCode[]>;
    not?: Nullable<NestedEnumSelcomUtilityCodeFilter>;
    notIn?: Nullable<SelcomUtilityCode[]>;
}

export class EnumSelcomUtilityCodeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumSelcomUtilityCodeFilter>;
    _min?: Nullable<NestedEnumSelcomUtilityCodeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<SelcomUtilityCode>;
    in?: Nullable<SelcomUtilityCode[]>;
    max?: Nullable<NestedEnumSelcomUtilityCodeFilter>;
    min?: Nullable<NestedEnumSelcomUtilityCodeFilter>;
    not?: Nullable<NestedEnumSelcomUtilityCodeWithAggregatesFilter>;
    notIn?: Nullable<SelcomUtilityCode[]>;
}

export class EnumStateFieldUpdateOperationsInput {
    set?: Nullable<State>;
}

export class EnumStateFilter {
    equals?: Nullable<State>;
    in?: Nullable<State[]>;
    not?: Nullable<NestedEnumStateFilter>;
    notIn?: Nullable<State[]>;
}

export class EnumStateWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumStateFilter>;
    _min?: Nullable<NestedEnumStateFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<State>;
    in?: Nullable<State[]>;
    max?: Nullable<NestedEnumStateFilter>;
    min?: Nullable<NestedEnumStateFilter>;
    not?: Nullable<NestedEnumStateWithAggregatesFilter>;
    notIn?: Nullable<State[]>;
}

export class EnumTransactionTypeFieldUpdateOperationsInput {
    set?: Nullable<TransactionType>;
}

export class EnumTransactionTypeFilter {
    equals?: Nullable<TransactionType>;
    in?: Nullable<TransactionType[]>;
    not?: Nullable<NestedEnumTransactionTypeFilter>;
    notIn?: Nullable<TransactionType[]>;
}

export class EnumTransactionTypeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumTransactionTypeFilter>;
    _min?: Nullable<NestedEnumTransactionTypeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<TransactionType>;
    in?: Nullable<TransactionType[]>;
    max?: Nullable<NestedEnumTransactionTypeFilter>;
    min?: Nullable<NestedEnumTransactionTypeFilter>;
    not?: Nullable<NestedEnumTransactionTypeWithAggregatesFilter>;
    notIn?: Nullable<TransactionType[]>;
}

export class FloatFieldUpdateOperationsInput {
    decrement?: Nullable<number>;
    divide?: Nullable<number>;
    increment?: Nullable<number>;
    multiply?: Nullable<number>;
    set?: Nullable<number>;
}

export class FloatFilter {
    equals?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    not?: Nullable<NestedFloatFilter>;
    notIn?: Nullable<number[]>;
}

export class FloatWithAggregatesFilter {
    _avg?: Nullable<NestedFloatFilter>;
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedFloatFilter>;
    _min?: Nullable<NestedFloatFilter>;
    _sum?: Nullable<NestedFloatFilter>;
    avg?: Nullable<NestedFloatFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    max?: Nullable<NestedFloatFilter>;
    min?: Nullable<NestedFloatFilter>;
    not?: Nullable<NestedFloatWithAggregatesFilter>;
    notIn?: Nullable<number[]>;
    sum?: Nullable<NestedFloatFilter>;
}

export class GeocodeComponentsInput {
    administrative_area?: Nullable<string>;
    country?: Nullable<string>;
    postal_code?: Nullable<string>;
    route?: Nullable<string>;
}

export class GeocodeInput {
    address?: Nullable<string>;
    bounds?: Nullable<LatLngBoundsInput>;
    components?: Nullable<GeocodeComponentsInput>;
    language?: Nullable<string>;
    place_id?: Nullable<string>;
    region?: Nullable<string>;
}

export class IntFieldUpdateOperationsInput {
    decrement?: Nullable<number>;
    divide?: Nullable<number>;
    increment?: Nullable<number>;
    multiply?: Nullable<number>;
    set?: Nullable<number>;
}

export class IntFilter {
    equals?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    not?: Nullable<NestedIntFilter>;
    notIn?: Nullable<number[]>;
}

export class IntWithAggregatesFilter {
    _avg?: Nullable<NestedFloatFilter>;
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedIntFilter>;
    _min?: Nullable<NestedIntFilter>;
    _sum?: Nullable<NestedIntFilter>;
    avg?: Nullable<NestedFloatFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    max?: Nullable<NestedIntFilter>;
    min?: Nullable<NestedIntFilter>;
    not?: Nullable<NestedIntWithAggregatesFilter>;
    notIn?: Nullable<number[]>;
    sum?: Nullable<NestedIntFilter>;
}

export class InviteCountOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    inviteeId?: Nullable<SortOrder>;
    inviterId?: Nullable<SortOrder>;
    message?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    type?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    url?: Nullable<SortOrder>;
}

export class InviteCreateInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    invitee: UserCreateNestedOneWithoutInvitedInput;
    inviter: UserCreateNestedOneWithoutInvitesInput;
    message: string;
    organization?: Nullable<OrganizationCreateNestedOneWithoutInvitesInput>;
    state?: Nullable<State>;
    type?: Nullable<InviteType>;
    updatedAt?: Nullable<DateTime>;
    url?: Nullable<string>;
}

export class InviteCreateManyInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    inviteeId: string;
    inviterId: string;
    message: string;
    organizationId?: Nullable<string>;
    state?: Nullable<State>;
    type?: Nullable<InviteType>;
    updatedAt?: Nullable<DateTime>;
    url?: Nullable<string>;
}

export class InviteCreateManyInviteeInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    inviterId: string;
    message: string;
    organizationId?: Nullable<string>;
    state?: Nullable<State>;
    type?: Nullable<InviteType>;
    updatedAt?: Nullable<DateTime>;
    url?: Nullable<string>;
}

export class InviteCreateManyInviteeInputEnvelope {
    data: InviteCreateManyInviteeInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class InviteCreateManyInviterInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    inviteeId: string;
    message: string;
    organizationId?: Nullable<string>;
    state?: Nullable<State>;
    type?: Nullable<InviteType>;
    updatedAt?: Nullable<DateTime>;
    url?: Nullable<string>;
}

export class InviteCreateManyInviterInputEnvelope {
    data: InviteCreateManyInviterInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class InviteCreateManyOrganizationInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    inviteeId: string;
    inviterId: string;
    message: string;
    state?: Nullable<State>;
    type?: Nullable<InviteType>;
    updatedAt?: Nullable<DateTime>;
    url?: Nullable<string>;
}

export class InviteCreateManyOrganizationInputEnvelope {
    data: InviteCreateManyOrganizationInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class InviteCreateNestedManyWithoutInviteeInput {
    connect?: Nullable<InviteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<InviteCreateOrConnectWithoutInviteeInput[]>;
    create?: Nullable<InviteCreateWithoutInviteeInput[]>;
    createMany?: Nullable<InviteCreateManyInviteeInputEnvelope>;
}

export class InviteCreateNestedManyWithoutInviterInput {
    connect?: Nullable<InviteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<InviteCreateOrConnectWithoutInviterInput[]>;
    create?: Nullable<InviteCreateWithoutInviterInput[]>;
    createMany?: Nullable<InviteCreateManyInviterInputEnvelope>;
}

export class InviteCreateNestedManyWithoutOrganizationInput {
    connect?: Nullable<InviteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<InviteCreateOrConnectWithoutOrganizationInput[]>;
    create?: Nullable<InviteCreateWithoutOrganizationInput[]>;
    createMany?: Nullable<InviteCreateManyOrganizationInputEnvelope>;
}

export class InviteCreateOrConnectWithoutInviteeInput {
    create: InviteUncheckedCreateWithoutInviteeInput;
    where: InviteWhereUniqueInput;
}

export class InviteCreateOrConnectWithoutInviterInput {
    create: InviteUncheckedCreateWithoutInviterInput;
    where: InviteWhereUniqueInput;
}

export class InviteCreateOrConnectWithoutOrganizationInput {
    create: InviteUncheckedCreateWithoutOrganizationInput;
    where: InviteWhereUniqueInput;
}

export class InviteCreateWithoutInviteeInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    inviter: UserCreateNestedOneWithoutInvitesInput;
    message: string;
    organization?: Nullable<OrganizationCreateNestedOneWithoutInvitesInput>;
    state?: Nullable<State>;
    type?: Nullable<InviteType>;
    updatedAt?: Nullable<DateTime>;
    url?: Nullable<string>;
}

export class InviteCreateWithoutInviterInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    invitee: UserCreateNestedOneWithoutInvitedInput;
    message: string;
    organization?: Nullable<OrganizationCreateNestedOneWithoutInvitesInput>;
    state?: Nullable<State>;
    type?: Nullable<InviteType>;
    updatedAt?: Nullable<DateTime>;
    url?: Nullable<string>;
}

export class InviteCreateWithoutOrganizationInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    invitee: UserCreateNestedOneWithoutInvitedInput;
    inviter: UserCreateNestedOneWithoutInvitesInput;
    message: string;
    state?: Nullable<State>;
    type?: Nullable<InviteType>;
    updatedAt?: Nullable<DateTime>;
    url?: Nullable<string>;
}

export class InviteListRelationFilter {
    every?: Nullable<InviteWhereInput>;
    none?: Nullable<InviteWhereInput>;
    some?: Nullable<InviteWhereInput>;
}

export class InviteMaxOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    inviteeId?: Nullable<SortOrder>;
    inviterId?: Nullable<SortOrder>;
    message?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    type?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    url?: Nullable<SortOrder>;
}

export class InviteMinOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    inviteeId?: Nullable<SortOrder>;
    inviterId?: Nullable<SortOrder>;
    message?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    type?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    url?: Nullable<SortOrder>;
}

export class InviteOrderByInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    inviteeId?: Nullable<SortOrder>;
    inviterId?: Nullable<SortOrder>;
    message?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    type?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    url?: Nullable<SortOrder>;
}

export class InviteOrderByWithAggregationInput {
    _count?: Nullable<InviteCountOrderByAggregateInput>;
    _max?: Nullable<InviteMaxOrderByAggregateInput>;
    _min?: Nullable<InviteMinOrderByAggregateInput>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    inviteeId?: Nullable<SortOrder>;
    inviterId?: Nullable<SortOrder>;
    message?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    type?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    url?: Nullable<SortOrder>;
}

export class InviteScalarWhereInput {
    AND?: Nullable<InviteScalarWhereInput[]>;
    NOT?: Nullable<InviteScalarWhereInput[]>;
    OR?: Nullable<InviteScalarWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    inviteeId?: Nullable<StringFilter>;
    inviterId?: Nullable<StringFilter>;
    message?: Nullable<StringFilter>;
    organizationId?: Nullable<StringNullableFilter>;
    state?: Nullable<EnumStateFilter>;
    type?: Nullable<EnumInviteTypeFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    url?: Nullable<StringNullableFilter>;
}

export class InviteScalarWhereWithAggregatesInput {
    AND?: Nullable<InviteScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<InviteScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<InviteScalarWhereWithAggregatesInput[]>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    inviteeId?: Nullable<StringWithAggregatesFilter>;
    inviterId?: Nullable<StringWithAggregatesFilter>;
    message?: Nullable<StringWithAggregatesFilter>;
    organizationId?: Nullable<StringNullableWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    type?: Nullable<EnumInviteTypeWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
    url?: Nullable<StringNullableWithAggregatesFilter>;
}

export class InviteUncheckedCreateInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    inviteeId: string;
    inviterId: string;
    message: string;
    organizationId?: Nullable<string>;
    state?: Nullable<State>;
    type?: Nullable<InviteType>;
    updatedAt?: Nullable<DateTime>;
    url?: Nullable<string>;
}

export class InviteUncheckedCreateNestedManyWithoutInviteeInput {
    connect?: Nullable<InviteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<InviteCreateOrConnectWithoutInviteeInput[]>;
    create?: Nullable<InviteCreateWithoutInviteeInput[]>;
    createMany?: Nullable<InviteCreateManyInviteeInputEnvelope>;
}

export class InviteUncheckedCreateNestedManyWithoutInviterInput {
    connect?: Nullable<InviteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<InviteCreateOrConnectWithoutInviterInput[]>;
    create?: Nullable<InviteCreateWithoutInviterInput[]>;
    createMany?: Nullable<InviteCreateManyInviterInputEnvelope>;
}

export class InviteUncheckedCreateNestedManyWithoutOrganizationInput {
    connect?: Nullable<InviteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<InviteCreateOrConnectWithoutOrganizationInput[]>;
    create?: Nullable<InviteCreateWithoutOrganizationInput[]>;
    createMany?: Nullable<InviteCreateManyOrganizationInputEnvelope>;
}

export class InviteUncheckedCreateWithoutInviteeInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    inviterId: string;
    message: string;
    organizationId?: Nullable<string>;
    state?: Nullable<State>;
    type?: Nullable<InviteType>;
    updatedAt?: Nullable<DateTime>;
    url?: Nullable<string>;
}

export class InviteUncheckedCreateWithoutInviterInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    inviteeId: string;
    message: string;
    organizationId?: Nullable<string>;
    state?: Nullable<State>;
    type?: Nullable<InviteType>;
    updatedAt?: Nullable<DateTime>;
    url?: Nullable<string>;
}

export class InviteUncheckedCreateWithoutOrganizationInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    inviteeId: string;
    inviterId: string;
    message: string;
    state?: Nullable<State>;
    type?: Nullable<InviteType>;
    updatedAt?: Nullable<DateTime>;
    url?: Nullable<string>;
}

export class InviteUncheckedUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    inviteeId?: Nullable<StringFieldUpdateOperationsInput>;
    inviterId?: Nullable<StringFieldUpdateOperationsInput>;
    message?: Nullable<StringFieldUpdateOperationsInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumInviteTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    url?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class InviteUncheckedUpdateManyInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    inviteeId?: Nullable<StringFieldUpdateOperationsInput>;
    inviterId?: Nullable<StringFieldUpdateOperationsInput>;
    message?: Nullable<StringFieldUpdateOperationsInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumInviteTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    url?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class InviteUncheckedUpdateManyWithoutInvitedInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    inviterId?: Nullable<StringFieldUpdateOperationsInput>;
    message?: Nullable<StringFieldUpdateOperationsInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumInviteTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    url?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class InviteUncheckedUpdateManyWithoutInviteeInput {
    connect?: Nullable<InviteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<InviteCreateOrConnectWithoutInviteeInput[]>;
    create?: Nullable<InviteCreateWithoutInviteeInput[]>;
    createMany?: Nullable<InviteCreateManyInviteeInputEnvelope>;
    delete?: Nullable<InviteWhereUniqueInput[]>;
    deleteMany?: Nullable<InviteScalarWhereInput[]>;
    disconnect?: Nullable<InviteWhereUniqueInput[]>;
    set?: Nullable<InviteWhereUniqueInput[]>;
    update?: Nullable<InviteUpdateWithWhereUniqueWithoutInviteeInput[]>;
    updateMany?: Nullable<InviteUpdateManyWithWhereWithoutInviteeInput[]>;
    upsert?: Nullable<InviteUpsertWithWhereUniqueWithoutInviteeInput[]>;
}

export class InviteUncheckedUpdateManyWithoutInviterInput {
    connect?: Nullable<InviteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<InviteCreateOrConnectWithoutInviterInput[]>;
    create?: Nullable<InviteCreateWithoutInviterInput[]>;
    createMany?: Nullable<InviteCreateManyInviterInputEnvelope>;
    delete?: Nullable<InviteWhereUniqueInput[]>;
    deleteMany?: Nullable<InviteScalarWhereInput[]>;
    disconnect?: Nullable<InviteWhereUniqueInput[]>;
    set?: Nullable<InviteWhereUniqueInput[]>;
    update?: Nullable<InviteUpdateWithWhereUniqueWithoutInviterInput[]>;
    updateMany?: Nullable<InviteUpdateManyWithWhereWithoutInviterInput[]>;
    upsert?: Nullable<InviteUpsertWithWhereUniqueWithoutInviterInput[]>;
}

export class InviteUncheckedUpdateManyWithoutInvitesInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    inviteeId?: Nullable<StringFieldUpdateOperationsInput>;
    message?: Nullable<StringFieldUpdateOperationsInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumInviteTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    url?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class InviteUncheckedUpdateManyWithoutOrganizationInput {
    connect?: Nullable<InviteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<InviteCreateOrConnectWithoutOrganizationInput[]>;
    create?: Nullable<InviteCreateWithoutOrganizationInput[]>;
    createMany?: Nullable<InviteCreateManyOrganizationInputEnvelope>;
    delete?: Nullable<InviteWhereUniqueInput[]>;
    deleteMany?: Nullable<InviteScalarWhereInput[]>;
    disconnect?: Nullable<InviteWhereUniqueInput[]>;
    set?: Nullable<InviteWhereUniqueInput[]>;
    update?: Nullable<InviteUpdateWithWhereUniqueWithoutOrganizationInput[]>;
    updateMany?: Nullable<InviteUpdateManyWithWhereWithoutOrganizationInput[]>;
    upsert?: Nullable<InviteUpsertWithWhereUniqueWithoutOrganizationInput[]>;
}

export class InviteUncheckedUpdateWithoutInviteeInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    inviterId?: Nullable<StringFieldUpdateOperationsInput>;
    message?: Nullable<StringFieldUpdateOperationsInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumInviteTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    url?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class InviteUncheckedUpdateWithoutInviterInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    inviteeId?: Nullable<StringFieldUpdateOperationsInput>;
    message?: Nullable<StringFieldUpdateOperationsInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumInviteTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    url?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class InviteUncheckedUpdateWithoutOrganizationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    inviteeId?: Nullable<StringFieldUpdateOperationsInput>;
    inviterId?: Nullable<StringFieldUpdateOperationsInput>;
    message?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumInviteTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    url?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class InviteUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invitee?: Nullable<UserUpdateOneRequiredWithoutInvitedInput>;
    inviter?: Nullable<UserUpdateOneRequiredWithoutInvitesInput>;
    message?: Nullable<StringFieldUpdateOperationsInput>;
    organization?: Nullable<OrganizationUpdateOneWithoutInvitesInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumInviteTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    url?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class InviteUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    message?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumInviteTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    url?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class InviteUpdateManyWithWhereWithoutInviteeInput {
    data: InviteUncheckedUpdateManyWithoutInvitedInput;
    where: InviteScalarWhereInput;
}

export class InviteUpdateManyWithWhereWithoutInviterInput {
    data: InviteUncheckedUpdateManyWithoutInvitesInput;
    where: InviteScalarWhereInput;
}

export class InviteUpdateManyWithWhereWithoutOrganizationInput {
    data: InviteUncheckedUpdateManyWithoutInvitesInput;
    where: InviteScalarWhereInput;
}

export class InviteUpdateManyWithoutInviteeInput {
    connect?: Nullable<InviteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<InviteCreateOrConnectWithoutInviteeInput[]>;
    create?: Nullable<InviteCreateWithoutInviteeInput[]>;
    createMany?: Nullable<InviteCreateManyInviteeInputEnvelope>;
    delete?: Nullable<InviteWhereUniqueInput[]>;
    deleteMany?: Nullable<InviteScalarWhereInput[]>;
    disconnect?: Nullable<InviteWhereUniqueInput[]>;
    set?: Nullable<InviteWhereUniqueInput[]>;
    update?: Nullable<InviteUpdateWithWhereUniqueWithoutInviteeInput[]>;
    updateMany?: Nullable<InviteUpdateManyWithWhereWithoutInviteeInput[]>;
    upsert?: Nullable<InviteUpsertWithWhereUniqueWithoutInviteeInput[]>;
}

export class InviteUpdateManyWithoutInviterInput {
    connect?: Nullable<InviteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<InviteCreateOrConnectWithoutInviterInput[]>;
    create?: Nullable<InviteCreateWithoutInviterInput[]>;
    createMany?: Nullable<InviteCreateManyInviterInputEnvelope>;
    delete?: Nullable<InviteWhereUniqueInput[]>;
    deleteMany?: Nullable<InviteScalarWhereInput[]>;
    disconnect?: Nullable<InviteWhereUniqueInput[]>;
    set?: Nullable<InviteWhereUniqueInput[]>;
    update?: Nullable<InviteUpdateWithWhereUniqueWithoutInviterInput[]>;
    updateMany?: Nullable<InviteUpdateManyWithWhereWithoutInviterInput[]>;
    upsert?: Nullable<InviteUpsertWithWhereUniqueWithoutInviterInput[]>;
}

export class InviteUpdateManyWithoutOrganizationInput {
    connect?: Nullable<InviteWhereUniqueInput[]>;
    connectOrCreate?: Nullable<InviteCreateOrConnectWithoutOrganizationInput[]>;
    create?: Nullable<InviteCreateWithoutOrganizationInput[]>;
    createMany?: Nullable<InviteCreateManyOrganizationInputEnvelope>;
    delete?: Nullable<InviteWhereUniqueInput[]>;
    deleteMany?: Nullable<InviteScalarWhereInput[]>;
    disconnect?: Nullable<InviteWhereUniqueInput[]>;
    set?: Nullable<InviteWhereUniqueInput[]>;
    update?: Nullable<InviteUpdateWithWhereUniqueWithoutOrganizationInput[]>;
    updateMany?: Nullable<InviteUpdateManyWithWhereWithoutOrganizationInput[]>;
    upsert?: Nullable<InviteUpsertWithWhereUniqueWithoutOrganizationInput[]>;
}

export class InviteUpdateWithWhereUniqueWithoutInviteeInput {
    data: InviteUncheckedUpdateWithoutInviteeInput;
    where: InviteWhereUniqueInput;
}

export class InviteUpdateWithWhereUniqueWithoutInviterInput {
    data: InviteUncheckedUpdateWithoutInviterInput;
    where: InviteWhereUniqueInput;
}

export class InviteUpdateWithWhereUniqueWithoutOrganizationInput {
    data: InviteUncheckedUpdateWithoutOrganizationInput;
    where: InviteWhereUniqueInput;
}

export class InviteUpdateWithoutInviteeInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    inviter?: Nullable<UserUpdateOneRequiredWithoutInvitesInput>;
    message?: Nullable<StringFieldUpdateOperationsInput>;
    organization?: Nullable<OrganizationUpdateOneWithoutInvitesInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumInviteTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    url?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class InviteUpdateWithoutInviterInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invitee?: Nullable<UserUpdateOneRequiredWithoutInvitedInput>;
    message?: Nullable<StringFieldUpdateOperationsInput>;
    organization?: Nullable<OrganizationUpdateOneWithoutInvitesInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumInviteTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    url?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class InviteUpdateWithoutOrganizationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invitee?: Nullable<UserUpdateOneRequiredWithoutInvitedInput>;
    inviter?: Nullable<UserUpdateOneRequiredWithoutInvitesInput>;
    message?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumInviteTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    url?: Nullable<NullableStringFieldUpdateOperationsInput>;
}

export class InviteUpsertWithWhereUniqueWithoutInviteeInput {
    create: InviteUncheckedCreateWithoutInviteeInput;
    update: InviteUncheckedUpdateWithoutInviteeInput;
    where: InviteWhereUniqueInput;
}

export class InviteUpsertWithWhereUniqueWithoutInviterInput {
    create: InviteUncheckedCreateWithoutInviterInput;
    update: InviteUncheckedUpdateWithoutInviterInput;
    where: InviteWhereUniqueInput;
}

export class InviteUpsertWithWhereUniqueWithoutOrganizationInput {
    create: InviteUncheckedCreateWithoutOrganizationInput;
    update: InviteUncheckedUpdateWithoutOrganizationInput;
    where: InviteWhereUniqueInput;
}

export class InviteWhereInput {
    AND?: Nullable<InviteWhereInput[]>;
    NOT?: Nullable<InviteWhereInput[]>;
    OR?: Nullable<InviteWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    invitee?: Nullable<UserWhereInput>;
    inviteeId?: Nullable<StringFilter>;
    inviter?: Nullable<UserWhereInput>;
    inviterId?: Nullable<StringFilter>;
    message?: Nullable<StringFilter>;
    organization?: Nullable<OrganizationWhereInput>;
    organizationId?: Nullable<StringNullableFilter>;
    state?: Nullable<EnumStateFilter>;
    type?: Nullable<EnumInviteTypeFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    url?: Nullable<StringNullableFilter>;
}

export class InviteWhereUniqueInput {
    id?: Nullable<string>;
}

export class LatLngBoundsInput {
    northeast: LatLngInput;
    southwest: LatLngInput;
}

export class LatLngInput {
    lat: number;
    lng: number;
}

export class LatLon {
    lat: number;
    lon: number;
}

export class LocationAvgOrderByAggregateInput {
    lat?: Nullable<SortOrder>;
    lon?: Nullable<SortOrder>;
}

export class LocationCountOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    lat?: Nullable<SortOrder>;
    lon?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class LocationCreateInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat: number;
    lon: number;
    name?: Nullable<string>;
    order?: Nullable<OrderCreateNestedOneWithoutLocationInput>;
    organizations?: Nullable<OrganizationCreateNestedManyWithoutLocationInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedManyWithoutLocationInput>;
}

export class LocationCreateManyInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat: number;
    lon: number;
    name?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class LocationCreateNestedOneWithoutOrderInput {
    connect?: Nullable<LocationWhereUniqueInput>;
    connectOrCreate?: Nullable<LocationCreateOrConnectWithoutOrderInput>;
    create?: Nullable<LocationUncheckedCreateWithoutOrderInput>;
}

export class LocationCreateNestedOneWithoutOrganizationsInput {
    connect?: Nullable<LocationWhereUniqueInput>;
    connectOrCreate?: Nullable<LocationCreateOrConnectWithoutOrganizationsInput>;
    create?: Nullable<LocationUncheckedCreateWithoutOrganizationsInput>;
}

export class LocationCreateNestedOneWithoutUsersInput {
    connect?: Nullable<LocationWhereUniqueInput>;
    connectOrCreate?: Nullable<LocationCreateOrConnectWithoutUsersInput>;
    create?: Nullable<LocationUncheckedCreateWithoutUsersInput>;
}

export class LocationCreateOrConnectWithoutOrderInput {
    create: LocationUncheckedCreateWithoutOrderInput;
    where: LocationWhereUniqueInput;
}

export class LocationCreateOrConnectWithoutOrganizationsInput {
    create: LocationUncheckedCreateWithoutOrganizationsInput;
    where: LocationWhereUniqueInput;
}

export class LocationCreateOrConnectWithoutUsersInput {
    create: LocationUncheckedCreateWithoutUsersInput;
    where: LocationWhereUniqueInput;
}

export class LocationCreateWithoutOrderInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat: number;
    lon: number;
    name?: Nullable<string>;
    organizations?: Nullable<OrganizationCreateNestedManyWithoutLocationInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedManyWithoutLocationInput>;
}

export class LocationCreateWithoutOrganizationsInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat: number;
    lon: number;
    name?: Nullable<string>;
    order?: Nullable<OrderCreateNestedOneWithoutLocationInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserCreateNestedManyWithoutLocationInput>;
}

export class LocationCreateWithoutUsersInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat: number;
    lon: number;
    name?: Nullable<string>;
    order?: Nullable<OrderCreateNestedOneWithoutLocationInput>;
    organizations?: Nullable<OrganizationCreateNestedManyWithoutLocationInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class LocationMaxOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    lat?: Nullable<SortOrder>;
    lon?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class LocationMinOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    lat?: Nullable<SortOrder>;
    lon?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class LocationOrderByInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    lat?: Nullable<SortOrder>;
    lon?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class LocationOrderByWithAggregationInput {
    _avg?: Nullable<LocationAvgOrderByAggregateInput>;
    _count?: Nullable<LocationCountOrderByAggregateInput>;
    _max?: Nullable<LocationMaxOrderByAggregateInput>;
    _min?: Nullable<LocationMinOrderByAggregateInput>;
    _sum?: Nullable<LocationSumOrderByAggregateInput>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    lat?: Nullable<SortOrder>;
    lon?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class LocationRelationFilter {
    is?: Nullable<LocationWhereInput>;
    isNot?: Nullable<LocationWhereInput>;
}

export class LocationScalarWhereWithAggregatesInput {
    AND?: Nullable<LocationScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<LocationScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<LocationScalarWhereWithAggregatesInput[]>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    lat?: Nullable<FloatWithAggregatesFilter>;
    lon?: Nullable<FloatWithAggregatesFilter>;
    name?: Nullable<StringWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class LocationSumOrderByAggregateInput {
    lat?: Nullable<SortOrder>;
    lon?: Nullable<SortOrder>;
}

export class LocationUncheckedCreateInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat: number;
    lon: number;
    name?: Nullable<string>;
    order?: Nullable<OrderUncheckedCreateNestedOneWithoutLocationInput>;
    organizations?: Nullable<OrganizationUncheckedCreateNestedManyWithoutLocationInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserUncheckedCreateNestedManyWithoutLocationInput>;
}

export class LocationUncheckedCreateWithoutOrderInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat: number;
    lon: number;
    name?: Nullable<string>;
    organizations?: Nullable<OrganizationUncheckedCreateNestedManyWithoutLocationInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserUncheckedCreateNestedManyWithoutLocationInput>;
}

export class LocationUncheckedCreateWithoutOrganizationsInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat: number;
    lon: number;
    name?: Nullable<string>;
    order?: Nullable<OrderUncheckedCreateNestedOneWithoutLocationInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
    users?: Nullable<UserUncheckedCreateNestedManyWithoutLocationInput>;
}

export class LocationUncheckedCreateWithoutUsersInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat: number;
    lon: number;
    name?: Nullable<string>;
    order?: Nullable<OrderUncheckedCreateNestedOneWithoutLocationInput>;
    organizations?: Nullable<OrganizationUncheckedCreateNestedManyWithoutLocationInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class LocationUncheckedUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    lat?: Nullable<FloatFieldUpdateOperationsInput>;
    lon?: Nullable<FloatFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    order?: Nullable<OrderUncheckedUpdateOneWithoutLocationInput>;
    organizations?: Nullable<OrganizationUncheckedUpdateManyWithoutLocationInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUncheckedUpdateManyWithoutLocationInput>;
}

export class LocationUncheckedUpdateManyInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    lat?: Nullable<FloatFieldUpdateOperationsInput>;
    lon?: Nullable<FloatFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class LocationUncheckedUpdateWithoutOrderInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    lat?: Nullable<FloatFieldUpdateOperationsInput>;
    lon?: Nullable<FloatFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUncheckedUpdateManyWithoutLocationInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUncheckedUpdateManyWithoutLocationInput>;
}

export class LocationUncheckedUpdateWithoutOrganizationsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    lat?: Nullable<FloatFieldUpdateOperationsInput>;
    lon?: Nullable<FloatFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    order?: Nullable<OrderUncheckedUpdateOneWithoutLocationInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUncheckedUpdateManyWithoutLocationInput>;
}

export class LocationUncheckedUpdateWithoutUsersInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    lat?: Nullable<FloatFieldUpdateOperationsInput>;
    lon?: Nullable<FloatFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    order?: Nullable<OrderUncheckedUpdateOneWithoutLocationInput>;
    organizations?: Nullable<OrganizationUncheckedUpdateManyWithoutLocationInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class LocationUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    lat?: Nullable<FloatFieldUpdateOperationsInput>;
    lon?: Nullable<FloatFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    order?: Nullable<OrderUpdateOneWithoutLocationInput>;
    organizations?: Nullable<OrganizationUpdateManyWithoutLocationInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateManyWithoutLocationInput>;
}

export class LocationUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    lat?: Nullable<FloatFieldUpdateOperationsInput>;
    lon?: Nullable<FloatFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class LocationUpdateOneRequiredWithoutOrganizationsInput {
    connect?: Nullable<LocationWhereUniqueInput>;
    connectOrCreate?: Nullable<LocationCreateOrConnectWithoutOrganizationsInput>;
    create?: Nullable<LocationUncheckedCreateWithoutOrganizationsInput>;
    update?: Nullable<LocationUncheckedUpdateWithoutOrganizationsInput>;
    upsert?: Nullable<LocationUpsertWithoutOrganizationsInput>;
}

export class LocationUpdateOneWithoutOrderInput {
    connect?: Nullable<LocationWhereUniqueInput>;
    connectOrCreate?: Nullable<LocationCreateOrConnectWithoutOrderInput>;
    create?: Nullable<LocationUncheckedCreateWithoutOrderInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<LocationUncheckedUpdateWithoutOrderInput>;
    upsert?: Nullable<LocationUpsertWithoutOrderInput>;
}

export class LocationUpdateOneWithoutUsersInput {
    connect?: Nullable<LocationWhereUniqueInput>;
    connectOrCreate?: Nullable<LocationCreateOrConnectWithoutUsersInput>;
    create?: Nullable<LocationUncheckedCreateWithoutUsersInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<LocationUncheckedUpdateWithoutUsersInput>;
    upsert?: Nullable<LocationUpsertWithoutUsersInput>;
}

export class LocationUpdateWithoutOrderInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    lat?: Nullable<FloatFieldUpdateOperationsInput>;
    lon?: Nullable<FloatFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUpdateManyWithoutLocationInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateManyWithoutLocationInput>;
}

export class LocationUpdateWithoutOrganizationsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    lat?: Nullable<FloatFieldUpdateOperationsInput>;
    lon?: Nullable<FloatFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    order?: Nullable<OrderUpdateOneWithoutLocationInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    users?: Nullable<UserUpdateManyWithoutLocationInput>;
}

export class LocationUpdateWithoutUsersInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    lat?: Nullable<FloatFieldUpdateOperationsInput>;
    lon?: Nullable<FloatFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    order?: Nullable<OrderUpdateOneWithoutLocationInput>;
    organizations?: Nullable<OrganizationUpdateManyWithoutLocationInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class LocationUpsertWithoutOrderInput {
    create: LocationUncheckedCreateWithoutOrderInput;
    update: LocationUncheckedUpdateWithoutOrderInput;
}

export class LocationUpsertWithoutOrganizationsInput {
    create: LocationUncheckedCreateWithoutOrganizationsInput;
    update: LocationUncheckedUpdateWithoutOrganizationsInput;
}

export class LocationUpsertWithoutUsersInput {
    create: LocationUncheckedCreateWithoutUsersInput;
    update: LocationUncheckedUpdateWithoutUsersInput;
}

export class LocationWhereInput {
    AND?: Nullable<LocationWhereInput[]>;
    NOT?: Nullable<LocationWhereInput[]>;
    OR?: Nullable<LocationWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    lat?: Nullable<FloatFilter>;
    lon?: Nullable<FloatFilter>;
    name?: Nullable<StringFilter>;
    nearBy?: Nullable<LatLon>;
    nearByName?: Nullable<string>;
    notWithin?: Nullable<number>;
    order?: Nullable<OrderWhereInput>;
    organizations?: Nullable<OrganizationListRelationFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    users?: Nullable<UserListRelationFilter>;
    within?: Nullable<number>;
}

export class LocationWhereUniqueInput {
    id?: Nullable<string>;
}

export class MpesaPaymentCountOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    input_Amount?: Nullable<SortOrder>;
    input_Country?: Nullable<SortOrder>;
    input_Currency?: Nullable<SortOrder>;
    input_CustomerMSISDN?: Nullable<SortOrder>;
    input_PurchasedItemsDesc?: Nullable<SortOrder>;
    input_ServiceProviderCode?: Nullable<SortOrder>;
    input_ThirdPartyConversationID?: Nullable<SortOrder>;
    input_TransactionReference?: Nullable<SortOrder>;
    output_ConversationID?: Nullable<SortOrder>;
    output_ResponseCode?: Nullable<SortOrder>;
    output_ResponseDesc?: Nullable<SortOrder>;
    output_ThirdPartyConversationID?: Nullable<SortOrder>;
    output_TransactionID?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class MpesaPaymentCreateInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    input_Amount: string;
    input_Country?: Nullable<string>;
    input_Currency?: Nullable<string>;
    input_CustomerMSISDN: string;
    input_PurchasedItemsDesc: string;
    input_ServiceProviderCode: string;
    input_TransactionReference: string;
    order: OrderCreateNestedOneWithoutMpesa_paymentInput;
    output_ConversationID?: Nullable<string>;
    output_ResponseCode?: Nullable<string>;
    output_ResponseDesc?: Nullable<string>;
    output_ThirdPartyConversationID?: Nullable<string>;
    output_TransactionID?: Nullable<string>;
    state?: Nullable<State>;
    transaction?: Nullable<TransactionCreateNestedOneWithoutMpesaPaymentInput>;
    updatedAt?: Nullable<DateTime>;
}

export class MpesaPaymentCreateManyInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    input_Amount: string;
    input_Country?: Nullable<string>;
    input_Currency?: Nullable<string>;
    input_CustomerMSISDN: string;
    input_PurchasedItemsDesc: string;
    input_ServiceProviderCode: string;
    input_ThirdPartyConversationID: string;
    input_TransactionReference: string;
    output_ConversationID?: Nullable<string>;
    output_ResponseCode?: Nullable<string>;
    output_ResponseDesc?: Nullable<string>;
    output_ThirdPartyConversationID?: Nullable<string>;
    output_TransactionID?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class MpesaPaymentCreateNestedOneWithoutOrderInput {
    connect?: Nullable<MpesaPaymentWhereUniqueInput>;
    connectOrCreate?: Nullable<MpesaPaymentCreateOrConnectWithoutOrderInput>;
    create?: Nullable<MpesaPaymentUncheckedCreateWithoutOrderInput>;
}

export class MpesaPaymentCreateNestedOneWithoutTransactionInput {
    connect?: Nullable<MpesaPaymentWhereUniqueInput>;
    connectOrCreate?: Nullable<MpesaPaymentCreateOrConnectWithoutTransactionInput>;
    create?: Nullable<MpesaPaymentUncheckedCreateWithoutTransactionInput>;
}

export class MpesaPaymentCreateOrConnectWithoutOrderInput {
    create: MpesaPaymentUncheckedCreateWithoutOrderInput;
    where: MpesaPaymentWhereUniqueInput;
}

export class MpesaPaymentCreateOrConnectWithoutTransactionInput {
    create: MpesaPaymentUncheckedCreateWithoutTransactionInput;
    where: MpesaPaymentWhereUniqueInput;
}

export class MpesaPaymentCreateWithoutOrderInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    input_Amount: string;
    input_Country?: Nullable<string>;
    input_Currency?: Nullable<string>;
    input_CustomerMSISDN: string;
    input_PurchasedItemsDesc: string;
    input_ServiceProviderCode: string;
    input_TransactionReference: string;
    output_ConversationID?: Nullable<string>;
    output_ResponseCode?: Nullable<string>;
    output_ResponseDesc?: Nullable<string>;
    output_ThirdPartyConversationID?: Nullable<string>;
    output_TransactionID?: Nullable<string>;
    state?: Nullable<State>;
    transaction?: Nullable<TransactionCreateNestedOneWithoutMpesaPaymentInput>;
    updatedAt?: Nullable<DateTime>;
}

export class MpesaPaymentCreateWithoutTransactionInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    input_Amount: string;
    input_Country?: Nullable<string>;
    input_Currency?: Nullable<string>;
    input_CustomerMSISDN: string;
    input_PurchasedItemsDesc: string;
    input_ServiceProviderCode: string;
    input_TransactionReference: string;
    order: OrderCreateNestedOneWithoutMpesa_paymentInput;
    output_ConversationID?: Nullable<string>;
    output_ResponseCode?: Nullable<string>;
    output_ResponseDesc?: Nullable<string>;
    output_ThirdPartyConversationID?: Nullable<string>;
    output_TransactionID?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class MpesaPaymentMaxOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    input_Amount?: Nullable<SortOrder>;
    input_Country?: Nullable<SortOrder>;
    input_Currency?: Nullable<SortOrder>;
    input_CustomerMSISDN?: Nullable<SortOrder>;
    input_PurchasedItemsDesc?: Nullable<SortOrder>;
    input_ServiceProviderCode?: Nullable<SortOrder>;
    input_ThirdPartyConversationID?: Nullable<SortOrder>;
    input_TransactionReference?: Nullable<SortOrder>;
    output_ConversationID?: Nullable<SortOrder>;
    output_ResponseCode?: Nullable<SortOrder>;
    output_ResponseDesc?: Nullable<SortOrder>;
    output_ThirdPartyConversationID?: Nullable<SortOrder>;
    output_TransactionID?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class MpesaPaymentMinOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    input_Amount?: Nullable<SortOrder>;
    input_Country?: Nullable<SortOrder>;
    input_Currency?: Nullable<SortOrder>;
    input_CustomerMSISDN?: Nullable<SortOrder>;
    input_PurchasedItemsDesc?: Nullable<SortOrder>;
    input_ServiceProviderCode?: Nullable<SortOrder>;
    input_ThirdPartyConversationID?: Nullable<SortOrder>;
    input_TransactionReference?: Nullable<SortOrder>;
    output_ConversationID?: Nullable<SortOrder>;
    output_ResponseCode?: Nullable<SortOrder>;
    output_ResponseDesc?: Nullable<SortOrder>;
    output_ThirdPartyConversationID?: Nullable<SortOrder>;
    output_TransactionID?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class MpesaPaymentOrderByInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    input_Amount?: Nullable<SortOrder>;
    input_Country?: Nullable<SortOrder>;
    input_Currency?: Nullable<SortOrder>;
    input_CustomerMSISDN?: Nullable<SortOrder>;
    input_PurchasedItemsDesc?: Nullable<SortOrder>;
    input_ServiceProviderCode?: Nullable<SortOrder>;
    input_ThirdPartyConversationID?: Nullable<SortOrder>;
    input_TransactionReference?: Nullable<SortOrder>;
    output_ConversationID?: Nullable<SortOrder>;
    output_ResponseCode?: Nullable<SortOrder>;
    output_ResponseDesc?: Nullable<SortOrder>;
    output_ThirdPartyConversationID?: Nullable<SortOrder>;
    output_TransactionID?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class MpesaPaymentOrderByWithAggregationInput {
    _count?: Nullable<MpesaPaymentCountOrderByAggregateInput>;
    _max?: Nullable<MpesaPaymentMaxOrderByAggregateInput>;
    _min?: Nullable<MpesaPaymentMinOrderByAggregateInput>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    input_Amount?: Nullable<SortOrder>;
    input_Country?: Nullable<SortOrder>;
    input_Currency?: Nullable<SortOrder>;
    input_CustomerMSISDN?: Nullable<SortOrder>;
    input_PurchasedItemsDesc?: Nullable<SortOrder>;
    input_ServiceProviderCode?: Nullable<SortOrder>;
    input_ThirdPartyConversationID?: Nullable<SortOrder>;
    input_TransactionReference?: Nullable<SortOrder>;
    output_ConversationID?: Nullable<SortOrder>;
    output_ResponseCode?: Nullable<SortOrder>;
    output_ResponseDesc?: Nullable<SortOrder>;
    output_ThirdPartyConversationID?: Nullable<SortOrder>;
    output_TransactionID?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class MpesaPaymentRelationFilter {
    is?: Nullable<MpesaPaymentWhereInput>;
    isNot?: Nullable<MpesaPaymentWhereInput>;
}

export class MpesaPaymentScalarWhereWithAggregatesInput {
    AND?: Nullable<MpesaPaymentScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<MpesaPaymentScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<MpesaPaymentScalarWhereWithAggregatesInput[]>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    input_Amount?: Nullable<StringWithAggregatesFilter>;
    input_Country?: Nullable<StringWithAggregatesFilter>;
    input_Currency?: Nullable<StringWithAggregatesFilter>;
    input_CustomerMSISDN?: Nullable<StringWithAggregatesFilter>;
    input_PurchasedItemsDesc?: Nullable<StringWithAggregatesFilter>;
    input_ServiceProviderCode?: Nullable<StringWithAggregatesFilter>;
    input_ThirdPartyConversationID?: Nullable<StringWithAggregatesFilter>;
    input_TransactionReference?: Nullable<StringWithAggregatesFilter>;
    output_ConversationID?: Nullable<StringNullableWithAggregatesFilter>;
    output_ResponseCode?: Nullable<StringNullableWithAggregatesFilter>;
    output_ResponseDesc?: Nullable<StringNullableWithAggregatesFilter>;
    output_ThirdPartyConversationID?: Nullable<StringNullableWithAggregatesFilter>;
    output_TransactionID?: Nullable<StringNullableWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class MpesaPaymentUncheckedCreateInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    input_Amount: string;
    input_Country?: Nullable<string>;
    input_Currency?: Nullable<string>;
    input_CustomerMSISDN: string;
    input_PurchasedItemsDesc: string;
    input_ServiceProviderCode: string;
    input_ThirdPartyConversationID: string;
    input_TransactionReference: string;
    output_ConversationID?: Nullable<string>;
    output_ResponseCode?: Nullable<string>;
    output_ResponseDesc?: Nullable<string>;
    output_ThirdPartyConversationID?: Nullable<string>;
    output_TransactionID?: Nullable<string>;
    state?: Nullable<State>;
    transaction?: Nullable<TransactionUncheckedCreateNestedOneWithoutMpesaPaymentInput>;
    updatedAt?: Nullable<DateTime>;
}

export class MpesaPaymentUncheckedCreateNestedOneWithoutOrderInput {
    connect?: Nullable<MpesaPaymentWhereUniqueInput>;
    connectOrCreate?: Nullable<MpesaPaymentCreateOrConnectWithoutOrderInput>;
    create?: Nullable<MpesaPaymentUncheckedCreateWithoutOrderInput>;
}

export class MpesaPaymentUncheckedCreateWithoutOrderInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    input_Amount: string;
    input_Country?: Nullable<string>;
    input_Currency?: Nullable<string>;
    input_CustomerMSISDN: string;
    input_PurchasedItemsDesc: string;
    input_ServiceProviderCode: string;
    input_TransactionReference: string;
    output_ConversationID?: Nullable<string>;
    output_ResponseCode?: Nullable<string>;
    output_ResponseDesc?: Nullable<string>;
    output_ThirdPartyConversationID?: Nullable<string>;
    output_TransactionID?: Nullable<string>;
    state?: Nullable<State>;
    transaction?: Nullable<TransactionUncheckedCreateNestedOneWithoutMpesaPaymentInput>;
    updatedAt?: Nullable<DateTime>;
}

export class MpesaPaymentUncheckedCreateWithoutTransactionInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    input_Amount: string;
    input_Country?: Nullable<string>;
    input_Currency?: Nullable<string>;
    input_CustomerMSISDN: string;
    input_PurchasedItemsDesc: string;
    input_ServiceProviderCode: string;
    input_ThirdPartyConversationID: string;
    input_TransactionReference: string;
    output_ConversationID?: Nullable<string>;
    output_ResponseCode?: Nullable<string>;
    output_ResponseDesc?: Nullable<string>;
    output_ThirdPartyConversationID?: Nullable<string>;
    output_TransactionID?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class MpesaPaymentUncheckedUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    input_Amount?: Nullable<StringFieldUpdateOperationsInput>;
    input_Country?: Nullable<StringFieldUpdateOperationsInput>;
    input_Currency?: Nullable<StringFieldUpdateOperationsInput>;
    input_CustomerMSISDN?: Nullable<StringFieldUpdateOperationsInput>;
    input_PurchasedItemsDesc?: Nullable<StringFieldUpdateOperationsInput>;
    input_ServiceProviderCode?: Nullable<StringFieldUpdateOperationsInput>;
    input_ThirdPartyConversationID?: Nullable<StringFieldUpdateOperationsInput>;
    input_TransactionReference?: Nullable<StringFieldUpdateOperationsInput>;
    output_ConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseDesc?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ThirdPartyConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_TransactionID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transaction?: Nullable<TransactionUncheckedUpdateOneWithoutMpesaPaymentInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class MpesaPaymentUncheckedUpdateManyInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    input_Amount?: Nullable<StringFieldUpdateOperationsInput>;
    input_Country?: Nullable<StringFieldUpdateOperationsInput>;
    input_Currency?: Nullable<StringFieldUpdateOperationsInput>;
    input_CustomerMSISDN?: Nullable<StringFieldUpdateOperationsInput>;
    input_PurchasedItemsDesc?: Nullable<StringFieldUpdateOperationsInput>;
    input_ServiceProviderCode?: Nullable<StringFieldUpdateOperationsInput>;
    input_ThirdPartyConversationID?: Nullable<StringFieldUpdateOperationsInput>;
    input_TransactionReference?: Nullable<StringFieldUpdateOperationsInput>;
    output_ConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseDesc?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ThirdPartyConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_TransactionID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class MpesaPaymentUncheckedUpdateOneWithoutOrderInput {
    connect?: Nullable<MpesaPaymentWhereUniqueInput>;
    connectOrCreate?: Nullable<MpesaPaymentCreateOrConnectWithoutOrderInput>;
    create?: Nullable<MpesaPaymentUncheckedCreateWithoutOrderInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<MpesaPaymentUncheckedUpdateWithoutOrderInput>;
    upsert?: Nullable<MpesaPaymentUpsertWithoutOrderInput>;
}

export class MpesaPaymentUncheckedUpdateWithoutOrderInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    input_Amount?: Nullable<StringFieldUpdateOperationsInput>;
    input_Country?: Nullable<StringFieldUpdateOperationsInput>;
    input_Currency?: Nullable<StringFieldUpdateOperationsInput>;
    input_CustomerMSISDN?: Nullable<StringFieldUpdateOperationsInput>;
    input_PurchasedItemsDesc?: Nullable<StringFieldUpdateOperationsInput>;
    input_ServiceProviderCode?: Nullable<StringFieldUpdateOperationsInput>;
    input_TransactionReference?: Nullable<StringFieldUpdateOperationsInput>;
    output_ConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseDesc?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ThirdPartyConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_TransactionID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transaction?: Nullable<TransactionUncheckedUpdateOneWithoutMpesaPaymentInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class MpesaPaymentUncheckedUpdateWithoutTransactionInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    input_Amount?: Nullable<StringFieldUpdateOperationsInput>;
    input_Country?: Nullable<StringFieldUpdateOperationsInput>;
    input_Currency?: Nullable<StringFieldUpdateOperationsInput>;
    input_CustomerMSISDN?: Nullable<StringFieldUpdateOperationsInput>;
    input_PurchasedItemsDesc?: Nullable<StringFieldUpdateOperationsInput>;
    input_ServiceProviderCode?: Nullable<StringFieldUpdateOperationsInput>;
    input_ThirdPartyConversationID?: Nullable<StringFieldUpdateOperationsInput>;
    input_TransactionReference?: Nullable<StringFieldUpdateOperationsInput>;
    output_ConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseDesc?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ThirdPartyConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_TransactionID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class MpesaPaymentUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    input_Amount?: Nullable<StringFieldUpdateOperationsInput>;
    input_Country?: Nullable<StringFieldUpdateOperationsInput>;
    input_Currency?: Nullable<StringFieldUpdateOperationsInput>;
    input_CustomerMSISDN?: Nullable<StringFieldUpdateOperationsInput>;
    input_PurchasedItemsDesc?: Nullable<StringFieldUpdateOperationsInput>;
    input_ServiceProviderCode?: Nullable<StringFieldUpdateOperationsInput>;
    input_TransactionReference?: Nullable<StringFieldUpdateOperationsInput>;
    order?: Nullable<OrderUpdateOneRequiredWithoutMpesa_paymentInput>;
    output_ConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseDesc?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ThirdPartyConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_TransactionID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transaction?: Nullable<TransactionUpdateOneWithoutMpesaPaymentInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class MpesaPaymentUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    input_Amount?: Nullable<StringFieldUpdateOperationsInput>;
    input_Country?: Nullable<StringFieldUpdateOperationsInput>;
    input_Currency?: Nullable<StringFieldUpdateOperationsInput>;
    input_CustomerMSISDN?: Nullable<StringFieldUpdateOperationsInput>;
    input_PurchasedItemsDesc?: Nullable<StringFieldUpdateOperationsInput>;
    input_ServiceProviderCode?: Nullable<StringFieldUpdateOperationsInput>;
    input_TransactionReference?: Nullable<StringFieldUpdateOperationsInput>;
    output_ConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseDesc?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ThirdPartyConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_TransactionID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class MpesaPaymentUpdateOneWithoutOrderInput {
    connect?: Nullable<MpesaPaymentWhereUniqueInput>;
    connectOrCreate?: Nullable<MpesaPaymentCreateOrConnectWithoutOrderInput>;
    create?: Nullable<MpesaPaymentUncheckedCreateWithoutOrderInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<MpesaPaymentUncheckedUpdateWithoutOrderInput>;
    upsert?: Nullable<MpesaPaymentUpsertWithoutOrderInput>;
}

export class MpesaPaymentUpdateOneWithoutTransactionInput {
    connect?: Nullable<MpesaPaymentWhereUniqueInput>;
    connectOrCreate?: Nullable<MpesaPaymentCreateOrConnectWithoutTransactionInput>;
    create?: Nullable<MpesaPaymentUncheckedCreateWithoutTransactionInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<MpesaPaymentUncheckedUpdateWithoutTransactionInput>;
    upsert?: Nullable<MpesaPaymentUpsertWithoutTransactionInput>;
}

export class MpesaPaymentUpdateWithoutOrderInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    input_Amount?: Nullable<StringFieldUpdateOperationsInput>;
    input_Country?: Nullable<StringFieldUpdateOperationsInput>;
    input_Currency?: Nullable<StringFieldUpdateOperationsInput>;
    input_CustomerMSISDN?: Nullable<StringFieldUpdateOperationsInput>;
    input_PurchasedItemsDesc?: Nullable<StringFieldUpdateOperationsInput>;
    input_ServiceProviderCode?: Nullable<StringFieldUpdateOperationsInput>;
    input_TransactionReference?: Nullable<StringFieldUpdateOperationsInput>;
    output_ConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseDesc?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ThirdPartyConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_TransactionID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transaction?: Nullable<TransactionUpdateOneWithoutMpesaPaymentInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class MpesaPaymentUpdateWithoutTransactionInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    input_Amount?: Nullable<StringFieldUpdateOperationsInput>;
    input_Country?: Nullable<StringFieldUpdateOperationsInput>;
    input_Currency?: Nullable<StringFieldUpdateOperationsInput>;
    input_CustomerMSISDN?: Nullable<StringFieldUpdateOperationsInput>;
    input_PurchasedItemsDesc?: Nullable<StringFieldUpdateOperationsInput>;
    input_ServiceProviderCode?: Nullable<StringFieldUpdateOperationsInput>;
    input_TransactionReference?: Nullable<StringFieldUpdateOperationsInput>;
    order?: Nullable<OrderUpdateOneRequiredWithoutMpesa_paymentInput>;
    output_ConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ResponseDesc?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_ThirdPartyConversationID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    output_TransactionID?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class MpesaPaymentUpsertWithoutOrderInput {
    create: MpesaPaymentUncheckedCreateWithoutOrderInput;
    update: MpesaPaymentUncheckedUpdateWithoutOrderInput;
}

export class MpesaPaymentUpsertWithoutTransactionInput {
    create: MpesaPaymentUncheckedCreateWithoutTransactionInput;
    update: MpesaPaymentUncheckedUpdateWithoutTransactionInput;
}

export class MpesaPaymentWhereInput {
    AND?: Nullable<MpesaPaymentWhereInput[]>;
    NOT?: Nullable<MpesaPaymentWhereInput[]>;
    OR?: Nullable<MpesaPaymentWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    input_Amount?: Nullable<StringFilter>;
    input_Country?: Nullable<StringFilter>;
    input_Currency?: Nullable<StringFilter>;
    input_CustomerMSISDN?: Nullable<StringFilter>;
    input_PurchasedItemsDesc?: Nullable<StringFilter>;
    input_ServiceProviderCode?: Nullable<StringFilter>;
    input_ThirdPartyConversationID?: Nullable<StringFilter>;
    input_TransactionReference?: Nullable<StringFilter>;
    order?: Nullable<OrderWhereInput>;
    output_ConversationID?: Nullable<StringNullableFilter>;
    output_ResponseCode?: Nullable<StringNullableFilter>;
    output_ResponseDesc?: Nullable<StringNullableFilter>;
    output_ThirdPartyConversationID?: Nullable<StringNullableFilter>;
    output_TransactionID?: Nullable<StringNullableFilter>;
    state?: Nullable<EnumStateFilter>;
    transaction?: Nullable<TransactionWhereInput>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class MpesaPaymentWhereUniqueInput {
    id?: Nullable<string>;
}

export class NestedBoolFilter {
    equals?: Nullable<boolean>;
    not?: Nullable<NestedBoolFilter>;
}

export class NestedBoolWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedBoolFilter>;
    _min?: Nullable<NestedBoolFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<boolean>;
    max?: Nullable<NestedBoolFilter>;
    min?: Nullable<NestedBoolFilter>;
    not?: Nullable<NestedBoolWithAggregatesFilter>;
}

export class NestedDateTimeFilter {
    equals?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    not?: Nullable<NestedDateTimeFilter>;
    notIn?: Nullable<DateTime[]>;
}

export class NestedDateTimeNullableFilter {
    equals?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    not?: Nullable<NestedDateTimeNullableFilter>;
    notIn?: Nullable<DateTime[]>;
}

export class NestedDateTimeNullableWithAggregatesFilter {
    _count?: Nullable<NestedIntNullableFilter>;
    _max?: Nullable<NestedDateTimeNullableFilter>;
    _min?: Nullable<NestedDateTimeNullableFilter>;
    count?: Nullable<NestedIntNullableFilter>;
    equals?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    max?: Nullable<NestedDateTimeNullableFilter>;
    min?: Nullable<NestedDateTimeNullableFilter>;
    not?: Nullable<NestedDateTimeNullableWithAggregatesFilter>;
    notIn?: Nullable<DateTime[]>;
}

export class NestedDateTimeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedDateTimeFilter>;
    _min?: Nullable<NestedDateTimeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    max?: Nullable<NestedDateTimeFilter>;
    min?: Nullable<NestedDateTimeFilter>;
    not?: Nullable<NestedDateTimeWithAggregatesFilter>;
    notIn?: Nullable<DateTime[]>;
}

export class NestedEnumAttachmentTypeFilter {
    equals?: Nullable<AttachmentType>;
    in?: Nullable<AttachmentType[]>;
    not?: Nullable<NestedEnumAttachmentTypeFilter>;
    notIn?: Nullable<AttachmentType[]>;
}

export class NestedEnumAttachmentTypeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumAttachmentTypeFilter>;
    _min?: Nullable<NestedEnumAttachmentTypeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<AttachmentType>;
    in?: Nullable<AttachmentType[]>;
    max?: Nullable<NestedEnumAttachmentTypeFilter>;
    min?: Nullable<NestedEnumAttachmentTypeFilter>;
    not?: Nullable<NestedEnumAttachmentTypeWithAggregatesFilter>;
    notIn?: Nullable<AttachmentType[]>;
}

export class NestedEnumGenderFilter {
    equals?: Nullable<Gender>;
    in?: Nullable<Gender[]>;
    not?: Nullable<NestedEnumGenderFilter>;
    notIn?: Nullable<Gender[]>;
}

export class NestedEnumGenderWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumGenderFilter>;
    _min?: Nullable<NestedEnumGenderFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<Gender>;
    in?: Nullable<Gender[]>;
    max?: Nullable<NestedEnumGenderFilter>;
    min?: Nullable<NestedEnumGenderFilter>;
    not?: Nullable<NestedEnumGenderWithAggregatesFilter>;
    notIn?: Nullable<Gender[]>;
}

export class NestedEnumInviteTypeFilter {
    equals?: Nullable<InviteType>;
    in?: Nullable<InviteType[]>;
    not?: Nullable<NestedEnumInviteTypeFilter>;
    notIn?: Nullable<InviteType[]>;
}

export class NestedEnumInviteTypeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumInviteTypeFilter>;
    _min?: Nullable<NestedEnumInviteTypeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<InviteType>;
    in?: Nullable<InviteType[]>;
    max?: Nullable<NestedEnumInviteTypeFilter>;
    min?: Nullable<NestedEnumInviteTypeFilter>;
    not?: Nullable<NestedEnumInviteTypeWithAggregatesFilter>;
    notIn?: Nullable<InviteType[]>;
}

export class NestedEnumRoleFilter {
    equals?: Nullable<Role>;
    in?: Nullable<Role[]>;
    not?: Nullable<NestedEnumRoleFilter>;
    notIn?: Nullable<Role[]>;
}

export class NestedEnumRoleWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumRoleFilter>;
    _min?: Nullable<NestedEnumRoleFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<Role>;
    in?: Nullable<Role[]>;
    max?: Nullable<NestedEnumRoleFilter>;
    min?: Nullable<NestedEnumRoleFilter>;
    not?: Nullable<NestedEnumRoleWithAggregatesFilter>;
    notIn?: Nullable<Role[]>;
}

export class NestedEnumSelcomPaymentStatusFilter {
    equals?: Nullable<SelcomPaymentStatus>;
    in?: Nullable<SelcomPaymentStatus[]>;
    not?: Nullable<NestedEnumSelcomPaymentStatusFilter>;
    notIn?: Nullable<SelcomPaymentStatus[]>;
}

export class NestedEnumSelcomPaymentStatusWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumSelcomPaymentStatusFilter>;
    _min?: Nullable<NestedEnumSelcomPaymentStatusFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<SelcomPaymentStatus>;
    in?: Nullable<SelcomPaymentStatus[]>;
    max?: Nullable<NestedEnumSelcomPaymentStatusFilter>;
    min?: Nullable<NestedEnumSelcomPaymentStatusFilter>;
    not?: Nullable<NestedEnumSelcomPaymentStatusWithAggregatesFilter>;
    notIn?: Nullable<SelcomPaymentStatus[]>;
}

export class NestedEnumSelcomUtilityCodeFilter {
    equals?: Nullable<SelcomUtilityCode>;
    in?: Nullable<SelcomUtilityCode[]>;
    not?: Nullable<NestedEnumSelcomUtilityCodeFilter>;
    notIn?: Nullable<SelcomUtilityCode[]>;
}

export class NestedEnumSelcomUtilityCodeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumSelcomUtilityCodeFilter>;
    _min?: Nullable<NestedEnumSelcomUtilityCodeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<SelcomUtilityCode>;
    in?: Nullable<SelcomUtilityCode[]>;
    max?: Nullable<NestedEnumSelcomUtilityCodeFilter>;
    min?: Nullable<NestedEnumSelcomUtilityCodeFilter>;
    not?: Nullable<NestedEnumSelcomUtilityCodeWithAggregatesFilter>;
    notIn?: Nullable<SelcomUtilityCode[]>;
}

export class NestedEnumStateFilter {
    equals?: Nullable<State>;
    in?: Nullable<State[]>;
    not?: Nullable<NestedEnumStateFilter>;
    notIn?: Nullable<State[]>;
}

export class NestedEnumStateWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumStateFilter>;
    _min?: Nullable<NestedEnumStateFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<State>;
    in?: Nullable<State[]>;
    max?: Nullable<NestedEnumStateFilter>;
    min?: Nullable<NestedEnumStateFilter>;
    not?: Nullable<NestedEnumStateWithAggregatesFilter>;
    notIn?: Nullable<State[]>;
}

export class NestedEnumTransactionTypeFilter {
    equals?: Nullable<TransactionType>;
    in?: Nullable<TransactionType[]>;
    not?: Nullable<NestedEnumTransactionTypeFilter>;
    notIn?: Nullable<TransactionType[]>;
}

export class NestedEnumTransactionTypeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedEnumTransactionTypeFilter>;
    _min?: Nullable<NestedEnumTransactionTypeFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<TransactionType>;
    in?: Nullable<TransactionType[]>;
    max?: Nullable<NestedEnumTransactionTypeFilter>;
    min?: Nullable<NestedEnumTransactionTypeFilter>;
    not?: Nullable<NestedEnumTransactionTypeWithAggregatesFilter>;
    notIn?: Nullable<TransactionType[]>;
}

export class NestedFloatFilter {
    equals?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    not?: Nullable<NestedFloatFilter>;
    notIn?: Nullable<number[]>;
}

export class NestedFloatWithAggregatesFilter {
    _avg?: Nullable<NestedFloatFilter>;
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedFloatFilter>;
    _min?: Nullable<NestedFloatFilter>;
    _sum?: Nullable<NestedFloatFilter>;
    avg?: Nullable<NestedFloatFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    max?: Nullable<NestedFloatFilter>;
    min?: Nullable<NestedFloatFilter>;
    not?: Nullable<NestedFloatWithAggregatesFilter>;
    notIn?: Nullable<number[]>;
    sum?: Nullable<NestedFloatFilter>;
}

export class NestedIntFilter {
    equals?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    not?: Nullable<NestedIntFilter>;
    notIn?: Nullable<number[]>;
}

export class NestedIntNullableFilter {
    equals?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    not?: Nullable<NestedIntNullableFilter>;
    notIn?: Nullable<number[]>;
}

export class NestedIntWithAggregatesFilter {
    _avg?: Nullable<NestedFloatFilter>;
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedIntFilter>;
    _min?: Nullable<NestedIntFilter>;
    _sum?: Nullable<NestedIntFilter>;
    avg?: Nullable<NestedFloatFilter>;
    count?: Nullable<NestedIntFilter>;
    equals?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    max?: Nullable<NestedIntFilter>;
    min?: Nullable<NestedIntFilter>;
    not?: Nullable<NestedIntWithAggregatesFilter>;
    notIn?: Nullable<number[]>;
    sum?: Nullable<NestedIntFilter>;
}

export class NestedStringFilter {
    contains?: Nullable<string>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    not?: Nullable<NestedStringFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class NestedStringNullableFilter {
    contains?: Nullable<string>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    not?: Nullable<NestedStringNullableFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class NestedStringNullableWithAggregatesFilter {
    _count?: Nullable<NestedIntNullableFilter>;
    _max?: Nullable<NestedStringNullableFilter>;
    _min?: Nullable<NestedStringNullableFilter>;
    contains?: Nullable<string>;
    count?: Nullable<NestedIntNullableFilter>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    max?: Nullable<NestedStringNullableFilter>;
    min?: Nullable<NestedStringNullableFilter>;
    not?: Nullable<NestedStringNullableWithAggregatesFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class NestedStringWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedStringFilter>;
    _min?: Nullable<NestedStringFilter>;
    contains?: Nullable<string>;
    count?: Nullable<NestedIntFilter>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    max?: Nullable<NestedStringFilter>;
    min?: Nullable<NestedStringFilter>;
    not?: Nullable<NestedStringWithAggregatesFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class NullableDateTimeFieldUpdateOperationsInput {
    set?: Nullable<DateTime>;
}

export class NullableStringFieldUpdateOperationsInput {
    set?: Nullable<string>;
}

export class OrderAvgOrderByAggregateInput {
    quantity?: Nullable<SortOrder>;
}

export class OrderCountOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    deliveryMode?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    locationId?: Nullable<SortOrder>;
    notes?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    ownerId?: Nullable<SortOrder>;
    providerId?: Nullable<SortOrder>;
    quantity?: Nullable<SortOrder>;
    receiptId?: Nullable<SortOrder>;
    serviceId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class OrderCreateInput {
    createdAt?: Nullable<DateTime>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutOrderInput>;
    mpesa_payment?: Nullable<MpesaPaymentCreateNestedOneWithoutOrderInput>;
    notes?: Nullable<string>;
    organization: OrganizationCreateNestedOneWithoutOrdersInput;
    owner: UserCreateNestedOneWithoutOrdersInput;
    provider?: Nullable<UserCreateNestedOneWithoutProvidesInput>;
    quantity: number;
    receipt?: Nullable<AttachmentCreateNestedOneWithoutOrdersInput>;
    selcom_payment?: Nullable<SelcomPaymentCreateNestedOneWithoutOrderInput>;
    service: ServiceCreateNestedOneWithoutOrdersInput;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateManyInput {
    createdAt?: Nullable<DateTime>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    notes?: Nullable<string>;
    organizationId: string;
    ownerId: string;
    providerId?: Nullable<string>;
    quantity: number;
    receiptId?: Nullable<string>;
    serviceId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateManyOrganizationInput {
    createdAt?: Nullable<DateTime>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    notes?: Nullable<string>;
    ownerId: string;
    providerId?: Nullable<string>;
    quantity: number;
    receiptId?: Nullable<string>;
    serviceId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateManyOrganizationInputEnvelope {
    data: OrderCreateManyOrganizationInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class OrderCreateManyOwnerInput {
    createdAt?: Nullable<DateTime>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    notes?: Nullable<string>;
    organizationId: string;
    providerId?: Nullable<string>;
    quantity: number;
    receiptId?: Nullable<string>;
    serviceId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateManyOwnerInputEnvelope {
    data: OrderCreateManyOwnerInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class OrderCreateManyProviderInput {
    createdAt?: Nullable<DateTime>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    notes?: Nullable<string>;
    organizationId: string;
    ownerId: string;
    quantity: number;
    receiptId?: Nullable<string>;
    serviceId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateManyProviderInputEnvelope {
    data: OrderCreateManyProviderInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class OrderCreateManyReceiptInput {
    createdAt?: Nullable<DateTime>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    notes?: Nullable<string>;
    organizationId: string;
    ownerId: string;
    providerId?: Nullable<string>;
    quantity: number;
    serviceId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateManyReceiptInputEnvelope {
    data: OrderCreateManyReceiptInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class OrderCreateManyServiceInput {
    createdAt?: Nullable<DateTime>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    notes?: Nullable<string>;
    organizationId: string;
    ownerId: string;
    providerId?: Nullable<string>;
    quantity: number;
    receiptId?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateManyServiceInputEnvelope {
    data: OrderCreateManyServiceInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class OrderCreateManydeliveryModeInput {
    set: DeliveryMode[];
}

export class OrderCreateNestedManyWithoutOrganizationInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutOrganizationInput[]>;
    create?: Nullable<OrderCreateWithoutOrganizationInput[]>;
    createMany?: Nullable<OrderCreateManyOrganizationInputEnvelope>;
}

export class OrderCreateNestedManyWithoutOwnerInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutOwnerInput[]>;
    create?: Nullable<OrderCreateWithoutOwnerInput[]>;
    createMany?: Nullable<OrderCreateManyOwnerInputEnvelope>;
}

export class OrderCreateNestedManyWithoutProviderInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutProviderInput[]>;
    create?: Nullable<OrderCreateWithoutProviderInput[]>;
    createMany?: Nullable<OrderCreateManyProviderInputEnvelope>;
}

export class OrderCreateNestedManyWithoutReceiptInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutReceiptInput[]>;
    create?: Nullable<OrderCreateWithoutReceiptInput[]>;
    createMany?: Nullable<OrderCreateManyReceiptInputEnvelope>;
}

export class OrderCreateNestedManyWithoutServiceInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutServiceInput[]>;
    create?: Nullable<OrderCreateWithoutServiceInput[]>;
    createMany?: Nullable<OrderCreateManyServiceInputEnvelope>;
}

export class OrderCreateNestedOneWithoutLocationInput {
    connect?: Nullable<OrderWhereUniqueInput>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutLocationInput>;
    create?: Nullable<OrderUncheckedCreateWithoutLocationInput>;
}

export class OrderCreateNestedOneWithoutMpesa_paymentInput {
    connect?: Nullable<OrderWhereUniqueInput>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutMpesa_paymentInput>;
    create?: Nullable<OrderUncheckedCreateWithoutMpesa_paymentInput>;
}

export class OrderCreateNestedOneWithoutSelcom_paymentInput {
    connect?: Nullable<OrderWhereUniqueInput>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutSelcom_paymentInput>;
    create?: Nullable<OrderUncheckedCreateWithoutSelcom_paymentInput>;
}

export class OrderCreateOrConnectWithoutLocationInput {
    create: OrderUncheckedCreateWithoutLocationInput;
    where: OrderWhereUniqueInput;
}

export class OrderCreateOrConnectWithoutMpesa_paymentInput {
    create: OrderUncheckedCreateWithoutMpesa_paymentInput;
    where: OrderWhereUniqueInput;
}

export class OrderCreateOrConnectWithoutOrganizationInput {
    create: OrderUncheckedCreateWithoutOrganizationInput;
    where: OrderWhereUniqueInput;
}

export class OrderCreateOrConnectWithoutOwnerInput {
    create: OrderUncheckedCreateWithoutOwnerInput;
    where: OrderWhereUniqueInput;
}

export class OrderCreateOrConnectWithoutProviderInput {
    create: OrderUncheckedCreateWithoutProviderInput;
    where: OrderWhereUniqueInput;
}

export class OrderCreateOrConnectWithoutReceiptInput {
    create: OrderUncheckedCreateWithoutReceiptInput;
    where: OrderWhereUniqueInput;
}

export class OrderCreateOrConnectWithoutSelcom_paymentInput {
    create: OrderUncheckedCreateWithoutSelcom_paymentInput;
    where: OrderWhereUniqueInput;
}

export class OrderCreateOrConnectWithoutServiceInput {
    create: OrderUncheckedCreateWithoutServiceInput;
    where: OrderWhereUniqueInput;
}

export class OrderCreateWithoutLocationInput {
    createdAt?: Nullable<DateTime>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<string>;
    mpesa_payment?: Nullable<MpesaPaymentCreateNestedOneWithoutOrderInput>;
    notes?: Nullable<string>;
    organization: OrganizationCreateNestedOneWithoutOrdersInput;
    owner: UserCreateNestedOneWithoutOrdersInput;
    provider?: Nullable<UserCreateNestedOneWithoutProvidesInput>;
    quantity: number;
    receipt?: Nullable<AttachmentCreateNestedOneWithoutOrdersInput>;
    selcom_payment?: Nullable<SelcomPaymentCreateNestedOneWithoutOrderInput>;
    service: ServiceCreateNestedOneWithoutOrdersInput;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateWithoutMpesa_paymentInput {
    createdAt?: Nullable<DateTime>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutOrderInput>;
    notes?: Nullable<string>;
    organization: OrganizationCreateNestedOneWithoutOrdersInput;
    owner: UserCreateNestedOneWithoutOrdersInput;
    provider?: Nullable<UserCreateNestedOneWithoutProvidesInput>;
    quantity: number;
    receipt?: Nullable<AttachmentCreateNestedOneWithoutOrdersInput>;
    selcom_payment?: Nullable<SelcomPaymentCreateNestedOneWithoutOrderInput>;
    service: ServiceCreateNestedOneWithoutOrdersInput;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateWithoutOrganizationInput {
    createdAt?: Nullable<DateTime>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutOrderInput>;
    mpesa_payment?: Nullable<MpesaPaymentCreateNestedOneWithoutOrderInput>;
    notes?: Nullable<string>;
    owner: UserCreateNestedOneWithoutOrdersInput;
    provider?: Nullable<UserCreateNestedOneWithoutProvidesInput>;
    quantity: number;
    receipt?: Nullable<AttachmentCreateNestedOneWithoutOrdersInput>;
    selcom_payment?: Nullable<SelcomPaymentCreateNestedOneWithoutOrderInput>;
    service: ServiceCreateNestedOneWithoutOrdersInput;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateWithoutOwnerInput {
    createdAt?: Nullable<DateTime>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutOrderInput>;
    mpesa_payment?: Nullable<MpesaPaymentCreateNestedOneWithoutOrderInput>;
    notes?: Nullable<string>;
    organization: OrganizationCreateNestedOneWithoutOrdersInput;
    provider?: Nullable<UserCreateNestedOneWithoutProvidesInput>;
    quantity: number;
    receipt?: Nullable<AttachmentCreateNestedOneWithoutOrdersInput>;
    selcom_payment?: Nullable<SelcomPaymentCreateNestedOneWithoutOrderInput>;
    service: ServiceCreateNestedOneWithoutOrdersInput;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateWithoutProviderInput {
    createdAt?: Nullable<DateTime>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutOrderInput>;
    mpesa_payment?: Nullable<MpesaPaymentCreateNestedOneWithoutOrderInput>;
    notes?: Nullable<string>;
    organization: OrganizationCreateNestedOneWithoutOrdersInput;
    owner: UserCreateNestedOneWithoutOrdersInput;
    quantity: number;
    receipt?: Nullable<AttachmentCreateNestedOneWithoutOrdersInput>;
    selcom_payment?: Nullable<SelcomPaymentCreateNestedOneWithoutOrderInput>;
    service: ServiceCreateNestedOneWithoutOrdersInput;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateWithoutReceiptInput {
    createdAt?: Nullable<DateTime>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutOrderInput>;
    mpesa_payment?: Nullable<MpesaPaymentCreateNestedOneWithoutOrderInput>;
    notes?: Nullable<string>;
    organization: OrganizationCreateNestedOneWithoutOrdersInput;
    owner: UserCreateNestedOneWithoutOrdersInput;
    provider?: Nullable<UserCreateNestedOneWithoutProvidesInput>;
    quantity: number;
    selcom_payment?: Nullable<SelcomPaymentCreateNestedOneWithoutOrderInput>;
    service: ServiceCreateNestedOneWithoutOrdersInput;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateWithoutSelcom_paymentInput {
    createdAt?: Nullable<DateTime>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutOrderInput>;
    mpesa_payment?: Nullable<MpesaPaymentCreateNestedOneWithoutOrderInput>;
    notes?: Nullable<string>;
    organization: OrganizationCreateNestedOneWithoutOrdersInput;
    owner: UserCreateNestedOneWithoutOrdersInput;
    provider?: Nullable<UserCreateNestedOneWithoutProvidesInput>;
    quantity: number;
    receipt?: Nullable<AttachmentCreateNestedOneWithoutOrdersInput>;
    service: ServiceCreateNestedOneWithoutOrdersInput;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateWithoutServiceInput {
    createdAt?: Nullable<DateTime>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<string>;
    location?: Nullable<LocationCreateNestedOneWithoutOrderInput>;
    mpesa_payment?: Nullable<MpesaPaymentCreateNestedOneWithoutOrderInput>;
    notes?: Nullable<string>;
    organization: OrganizationCreateNestedOneWithoutOrdersInput;
    owner: UserCreateNestedOneWithoutOrdersInput;
    provider?: Nullable<UserCreateNestedOneWithoutProvidesInput>;
    quantity: number;
    receipt?: Nullable<AttachmentCreateNestedOneWithoutOrdersInput>;
    selcom_payment?: Nullable<SelcomPaymentCreateNestedOneWithoutOrderInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreatedeliveryModeInput {
    set: DeliveryMode[];
}

export class OrderListRelationFilter {
    every?: Nullable<OrderWhereInput>;
    none?: Nullable<OrderWhereInput>;
    some?: Nullable<OrderWhereInput>;
}

export class OrderMaxOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    locationId?: Nullable<SortOrder>;
    notes?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    ownerId?: Nullable<SortOrder>;
    providerId?: Nullable<SortOrder>;
    quantity?: Nullable<SortOrder>;
    receiptId?: Nullable<SortOrder>;
    serviceId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class OrderMinOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    locationId?: Nullable<SortOrder>;
    notes?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    ownerId?: Nullable<SortOrder>;
    providerId?: Nullable<SortOrder>;
    quantity?: Nullable<SortOrder>;
    receiptId?: Nullable<SortOrder>;
    serviceId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class OrderOrderByInput {
    createdAt?: Nullable<SortOrder>;
    deliveryMode?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    locationId?: Nullable<SortOrder>;
    notes?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    ownerId?: Nullable<SortOrder>;
    providerId?: Nullable<SortOrder>;
    quantity?: Nullable<SortOrder>;
    receiptId?: Nullable<SortOrder>;
    serviceId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class OrderOrderByWithAggregationInput {
    _avg?: Nullable<OrderAvgOrderByAggregateInput>;
    _count?: Nullable<OrderCountOrderByAggregateInput>;
    _max?: Nullable<OrderMaxOrderByAggregateInput>;
    _min?: Nullable<OrderMinOrderByAggregateInput>;
    _sum?: Nullable<OrderSumOrderByAggregateInput>;
    createdAt?: Nullable<SortOrder>;
    deliveryMode?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    locationId?: Nullable<SortOrder>;
    notes?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    ownerId?: Nullable<SortOrder>;
    providerId?: Nullable<SortOrder>;
    quantity?: Nullable<SortOrder>;
    receiptId?: Nullable<SortOrder>;
    serviceId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class OrderRelationFilter {
    is?: Nullable<OrderWhereInput>;
    isNot?: Nullable<OrderWhereInput>;
}

export class OrderScalarWhereInput {
    AND?: Nullable<OrderScalarWhereInput[]>;
    NOT?: Nullable<OrderScalarWhereInput[]>;
    OR?: Nullable<OrderScalarWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    deliveryMode?: Nullable<EnumDeliveryModeNullableListFilter>;
    id?: Nullable<StringFilter>;
    locationId?: Nullable<StringNullableFilter>;
    notes?: Nullable<StringNullableFilter>;
    organizationId?: Nullable<StringFilter>;
    ownerId?: Nullable<StringFilter>;
    providerId?: Nullable<StringNullableFilter>;
    quantity?: Nullable<IntFilter>;
    receiptId?: Nullable<StringNullableFilter>;
    serviceId?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class OrderScalarWhereWithAggregatesInput {
    AND?: Nullable<OrderScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<OrderScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<OrderScalarWhereWithAggregatesInput[]>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    deliveryMode?: Nullable<EnumDeliveryModeNullableListFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    locationId?: Nullable<StringNullableWithAggregatesFilter>;
    notes?: Nullable<StringNullableWithAggregatesFilter>;
    organizationId?: Nullable<StringWithAggregatesFilter>;
    ownerId?: Nullable<StringWithAggregatesFilter>;
    providerId?: Nullable<StringNullableWithAggregatesFilter>;
    quantity?: Nullable<IntWithAggregatesFilter>;
    receiptId?: Nullable<StringNullableWithAggregatesFilter>;
    serviceId?: Nullable<StringWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class OrderSumOrderByAggregateInput {
    quantity?: Nullable<SortOrder>;
}

export class OrderUncheckedCreateInput {
    createdAt?: Nullable<DateTime>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    mpesa_payment?: Nullable<MpesaPaymentUncheckedCreateNestedOneWithoutOrderInput>;
    notes?: Nullable<string>;
    organizationId: string;
    ownerId: string;
    providerId?: Nullable<string>;
    quantity: number;
    receiptId?: Nullable<string>;
    selcom_payment?: Nullable<SelcomPaymentUncheckedCreateNestedOneWithoutOrderInput>;
    serviceId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUncheckedCreateNestedManyWithoutOrganizationInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutOrganizationInput[]>;
    create?: Nullable<OrderCreateWithoutOrganizationInput[]>;
    createMany?: Nullable<OrderCreateManyOrganizationInputEnvelope>;
}

export class OrderUncheckedCreateNestedManyWithoutOwnerInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutOwnerInput[]>;
    create?: Nullable<OrderCreateWithoutOwnerInput[]>;
    createMany?: Nullable<OrderCreateManyOwnerInputEnvelope>;
}

export class OrderUncheckedCreateNestedManyWithoutProviderInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutProviderInput[]>;
    create?: Nullable<OrderCreateWithoutProviderInput[]>;
    createMany?: Nullable<OrderCreateManyProviderInputEnvelope>;
}

export class OrderUncheckedCreateNestedManyWithoutReceiptInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutReceiptInput[]>;
    create?: Nullable<OrderCreateWithoutReceiptInput[]>;
    createMany?: Nullable<OrderCreateManyReceiptInputEnvelope>;
}

export class OrderUncheckedCreateNestedManyWithoutServiceInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutServiceInput[]>;
    create?: Nullable<OrderCreateWithoutServiceInput[]>;
    createMany?: Nullable<OrderCreateManyServiceInputEnvelope>;
}

export class OrderUncheckedCreateNestedOneWithoutLocationInput {
    connect?: Nullable<OrderWhereUniqueInput>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutLocationInput>;
    create?: Nullable<OrderUncheckedCreateWithoutLocationInput>;
}

export class OrderUncheckedCreateWithoutLocationInput {
    createdAt?: Nullable<DateTime>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<string>;
    mpesa_payment?: Nullable<MpesaPaymentUncheckedCreateNestedOneWithoutOrderInput>;
    notes?: Nullable<string>;
    organizationId: string;
    ownerId: string;
    providerId?: Nullable<string>;
    quantity: number;
    receiptId?: Nullable<string>;
    selcom_payment?: Nullable<SelcomPaymentUncheckedCreateNestedOneWithoutOrderInput>;
    serviceId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUncheckedCreateWithoutMpesa_paymentInput {
    createdAt?: Nullable<DateTime>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    notes?: Nullable<string>;
    organizationId: string;
    ownerId: string;
    providerId?: Nullable<string>;
    quantity: number;
    receiptId?: Nullable<string>;
    selcom_payment?: Nullable<SelcomPaymentUncheckedCreateNestedOneWithoutOrderInput>;
    serviceId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUncheckedCreateWithoutOrganizationInput {
    createdAt?: Nullable<DateTime>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    mpesa_payment?: Nullable<MpesaPaymentUncheckedCreateNestedOneWithoutOrderInput>;
    notes?: Nullable<string>;
    ownerId: string;
    providerId?: Nullable<string>;
    quantity: number;
    receiptId?: Nullable<string>;
    selcom_payment?: Nullable<SelcomPaymentUncheckedCreateNestedOneWithoutOrderInput>;
    serviceId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUncheckedCreateWithoutOwnerInput {
    createdAt?: Nullable<DateTime>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    mpesa_payment?: Nullable<MpesaPaymentUncheckedCreateNestedOneWithoutOrderInput>;
    notes?: Nullable<string>;
    organizationId: string;
    providerId?: Nullable<string>;
    quantity: number;
    receiptId?: Nullable<string>;
    selcom_payment?: Nullable<SelcomPaymentUncheckedCreateNestedOneWithoutOrderInput>;
    serviceId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUncheckedCreateWithoutProviderInput {
    createdAt?: Nullable<DateTime>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    mpesa_payment?: Nullable<MpesaPaymentUncheckedCreateNestedOneWithoutOrderInput>;
    notes?: Nullable<string>;
    organizationId: string;
    ownerId: string;
    quantity: number;
    receiptId?: Nullable<string>;
    selcom_payment?: Nullable<SelcomPaymentUncheckedCreateNestedOneWithoutOrderInput>;
    serviceId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUncheckedCreateWithoutReceiptInput {
    createdAt?: Nullable<DateTime>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    mpesa_payment?: Nullable<MpesaPaymentUncheckedCreateNestedOneWithoutOrderInput>;
    notes?: Nullable<string>;
    organizationId: string;
    ownerId: string;
    providerId?: Nullable<string>;
    quantity: number;
    selcom_payment?: Nullable<SelcomPaymentUncheckedCreateNestedOneWithoutOrderInput>;
    serviceId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUncheckedCreateWithoutSelcom_paymentInput {
    createdAt?: Nullable<DateTime>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    mpesa_payment?: Nullable<MpesaPaymentUncheckedCreateNestedOneWithoutOrderInput>;
    notes?: Nullable<string>;
    organizationId: string;
    ownerId: string;
    providerId?: Nullable<string>;
    quantity: number;
    receiptId?: Nullable<string>;
    serviceId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUncheckedCreateWithoutServiceInput {
    createdAt?: Nullable<DateTime>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    mpesa_payment?: Nullable<MpesaPaymentUncheckedCreateNestedOneWithoutOrderInput>;
    notes?: Nullable<string>;
    organizationId: string;
    ownerId: string;
    providerId?: Nullable<string>;
    quantity: number;
    receiptId?: Nullable<string>;
    selcom_payment?: Nullable<SelcomPaymentUncheckedCreateNestedOneWithoutOrderInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUncheckedUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    mpesa_payment?: Nullable<MpesaPaymentUncheckedUpdateOneWithoutOrderInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizationId?: Nullable<StringFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    providerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    selcom_payment?: Nullable<SelcomPaymentUncheckedUpdateOneWithoutOrderInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateManyInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizationId?: Nullable<StringFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    providerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateManyWithoutOrdersInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizationId?: Nullable<StringFieldUpdateOperationsInput>;
    providerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateManyWithoutOrganizationInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutOrganizationInput[]>;
    create?: Nullable<OrderCreateWithoutOrganizationInput[]>;
    createMany?: Nullable<OrderCreateManyOrganizationInputEnvelope>;
    delete?: Nullable<OrderWhereUniqueInput[]>;
    deleteMany?: Nullable<OrderScalarWhereInput[]>;
    disconnect?: Nullable<OrderWhereUniqueInput[]>;
    set?: Nullable<OrderWhereUniqueInput[]>;
    update?: Nullable<OrderUpdateWithWhereUniqueWithoutOrganizationInput[]>;
    updateMany?: Nullable<OrderUpdateManyWithWhereWithoutOrganizationInput[]>;
    upsert?: Nullable<OrderUpsertWithWhereUniqueWithoutOrganizationInput[]>;
}

export class OrderUncheckedUpdateManyWithoutOwnerInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutOwnerInput[]>;
    create?: Nullable<OrderCreateWithoutOwnerInput[]>;
    createMany?: Nullable<OrderCreateManyOwnerInputEnvelope>;
    delete?: Nullable<OrderWhereUniqueInput[]>;
    deleteMany?: Nullable<OrderScalarWhereInput[]>;
    disconnect?: Nullable<OrderWhereUniqueInput[]>;
    set?: Nullable<OrderWhereUniqueInput[]>;
    update?: Nullable<OrderUpdateWithWhereUniqueWithoutOwnerInput[]>;
    updateMany?: Nullable<OrderUpdateManyWithWhereWithoutOwnerInput[]>;
    upsert?: Nullable<OrderUpsertWithWhereUniqueWithoutOwnerInput[]>;
}

export class OrderUncheckedUpdateManyWithoutProviderInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutProviderInput[]>;
    create?: Nullable<OrderCreateWithoutProviderInput[]>;
    createMany?: Nullable<OrderCreateManyProviderInputEnvelope>;
    delete?: Nullable<OrderWhereUniqueInput[]>;
    deleteMany?: Nullable<OrderScalarWhereInput[]>;
    disconnect?: Nullable<OrderWhereUniqueInput[]>;
    set?: Nullable<OrderWhereUniqueInput[]>;
    update?: Nullable<OrderUpdateWithWhereUniqueWithoutProviderInput[]>;
    updateMany?: Nullable<OrderUpdateManyWithWhereWithoutProviderInput[]>;
    upsert?: Nullable<OrderUpsertWithWhereUniqueWithoutProviderInput[]>;
}

export class OrderUncheckedUpdateManyWithoutProvidesInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizationId?: Nullable<StringFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateManyWithoutReceiptInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutReceiptInput[]>;
    create?: Nullable<OrderCreateWithoutReceiptInput[]>;
    createMany?: Nullable<OrderCreateManyReceiptInputEnvelope>;
    delete?: Nullable<OrderWhereUniqueInput[]>;
    deleteMany?: Nullable<OrderScalarWhereInput[]>;
    disconnect?: Nullable<OrderWhereUniqueInput[]>;
    set?: Nullable<OrderWhereUniqueInput[]>;
    update?: Nullable<OrderUpdateWithWhereUniqueWithoutReceiptInput[]>;
    updateMany?: Nullable<OrderUpdateManyWithWhereWithoutReceiptInput[]>;
    upsert?: Nullable<OrderUpsertWithWhereUniqueWithoutReceiptInput[]>;
}

export class OrderUncheckedUpdateManyWithoutServiceInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutServiceInput[]>;
    create?: Nullable<OrderCreateWithoutServiceInput[]>;
    createMany?: Nullable<OrderCreateManyServiceInputEnvelope>;
    delete?: Nullable<OrderWhereUniqueInput[]>;
    deleteMany?: Nullable<OrderScalarWhereInput[]>;
    disconnect?: Nullable<OrderWhereUniqueInput[]>;
    set?: Nullable<OrderWhereUniqueInput[]>;
    update?: Nullable<OrderUpdateWithWhereUniqueWithoutServiceInput[]>;
    updateMany?: Nullable<OrderUpdateManyWithWhereWithoutServiceInput[]>;
    upsert?: Nullable<OrderUpsertWithWhereUniqueWithoutServiceInput[]>;
}

export class OrderUncheckedUpdateOneWithoutLocationInput {
    connect?: Nullable<OrderWhereUniqueInput>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutLocationInput>;
    create?: Nullable<OrderUncheckedCreateWithoutLocationInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<OrderUncheckedUpdateWithoutLocationInput>;
    upsert?: Nullable<OrderUpsertWithoutLocationInput>;
}

export class OrderUncheckedUpdateWithoutLocationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesa_payment?: Nullable<MpesaPaymentUncheckedUpdateOneWithoutOrderInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizationId?: Nullable<StringFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    providerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    selcom_payment?: Nullable<SelcomPaymentUncheckedUpdateOneWithoutOrderInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateWithoutMpesa_paymentInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizationId?: Nullable<StringFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    providerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    selcom_payment?: Nullable<SelcomPaymentUncheckedUpdateOneWithoutOrderInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateWithoutOrganizationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    mpesa_payment?: Nullable<MpesaPaymentUncheckedUpdateOneWithoutOrderInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    providerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    selcom_payment?: Nullable<SelcomPaymentUncheckedUpdateOneWithoutOrderInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateWithoutOwnerInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    mpesa_payment?: Nullable<MpesaPaymentUncheckedUpdateOneWithoutOrderInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizationId?: Nullable<StringFieldUpdateOperationsInput>;
    providerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    selcom_payment?: Nullable<SelcomPaymentUncheckedUpdateOneWithoutOrderInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateWithoutProviderInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    mpesa_payment?: Nullable<MpesaPaymentUncheckedUpdateOneWithoutOrderInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizationId?: Nullable<StringFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    selcom_payment?: Nullable<SelcomPaymentUncheckedUpdateOneWithoutOrderInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateWithoutReceiptInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    mpesa_payment?: Nullable<MpesaPaymentUncheckedUpdateOneWithoutOrderInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizationId?: Nullable<StringFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    providerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    selcom_payment?: Nullable<SelcomPaymentUncheckedUpdateOneWithoutOrderInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateWithoutSelcom_paymentInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    mpesa_payment?: Nullable<MpesaPaymentUncheckedUpdateOneWithoutOrderInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizationId?: Nullable<StringFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    providerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    serviceId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUncheckedUpdateWithoutServiceInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    mpesa_payment?: Nullable<MpesaPaymentUncheckedUpdateOneWithoutOrderInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizationId?: Nullable<StringFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    providerId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receiptId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    selcom_payment?: Nullable<SelcomPaymentUncheckedUpdateOneWithoutOrderInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutOrderInput>;
    mpesa_payment?: Nullable<MpesaPaymentUpdateOneWithoutOrderInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organization?: Nullable<OrganizationUpdateOneRequiredWithoutOrdersInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrdersInput>;
    provider?: Nullable<UserUpdateOneWithoutProvidesInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receipt?: Nullable<AttachmentUpdateOneWithoutOrdersInput>;
    selcom_payment?: Nullable<SelcomPaymentUpdateOneWithoutOrderInput>;
    service?: Nullable<ServiceUpdateOneRequiredWithoutOrdersInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateManyWithWhereWithoutOrganizationInput {
    data: OrderUncheckedUpdateManyWithoutOrdersInput;
    where: OrderScalarWhereInput;
}

export class OrderUpdateManyWithWhereWithoutOwnerInput {
    data: OrderUncheckedUpdateManyWithoutOrdersInput;
    where: OrderScalarWhereInput;
}

export class OrderUpdateManyWithWhereWithoutProviderInput {
    data: OrderUncheckedUpdateManyWithoutProvidesInput;
    where: OrderScalarWhereInput;
}

export class OrderUpdateManyWithWhereWithoutReceiptInput {
    data: OrderUncheckedUpdateManyWithoutOrdersInput;
    where: OrderScalarWhereInput;
}

export class OrderUpdateManyWithWhereWithoutServiceInput {
    data: OrderUncheckedUpdateManyWithoutOrdersInput;
    where: OrderScalarWhereInput;
}

export class OrderUpdateManyWithoutOrganizationInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutOrganizationInput[]>;
    create?: Nullable<OrderCreateWithoutOrganizationInput[]>;
    createMany?: Nullable<OrderCreateManyOrganizationInputEnvelope>;
    delete?: Nullable<OrderWhereUniqueInput[]>;
    deleteMany?: Nullable<OrderScalarWhereInput[]>;
    disconnect?: Nullable<OrderWhereUniqueInput[]>;
    set?: Nullable<OrderWhereUniqueInput[]>;
    update?: Nullable<OrderUpdateWithWhereUniqueWithoutOrganizationInput[]>;
    updateMany?: Nullable<OrderUpdateManyWithWhereWithoutOrganizationInput[]>;
    upsert?: Nullable<OrderUpsertWithWhereUniqueWithoutOrganizationInput[]>;
}

export class OrderUpdateManyWithoutOwnerInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutOwnerInput[]>;
    create?: Nullable<OrderCreateWithoutOwnerInput[]>;
    createMany?: Nullable<OrderCreateManyOwnerInputEnvelope>;
    delete?: Nullable<OrderWhereUniqueInput[]>;
    deleteMany?: Nullable<OrderScalarWhereInput[]>;
    disconnect?: Nullable<OrderWhereUniqueInput[]>;
    set?: Nullable<OrderWhereUniqueInput[]>;
    update?: Nullable<OrderUpdateWithWhereUniqueWithoutOwnerInput[]>;
    updateMany?: Nullable<OrderUpdateManyWithWhereWithoutOwnerInput[]>;
    upsert?: Nullable<OrderUpsertWithWhereUniqueWithoutOwnerInput[]>;
}

export class OrderUpdateManyWithoutProviderInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutProviderInput[]>;
    create?: Nullable<OrderCreateWithoutProviderInput[]>;
    createMany?: Nullable<OrderCreateManyProviderInputEnvelope>;
    delete?: Nullable<OrderWhereUniqueInput[]>;
    deleteMany?: Nullable<OrderScalarWhereInput[]>;
    disconnect?: Nullable<OrderWhereUniqueInput[]>;
    set?: Nullable<OrderWhereUniqueInput[]>;
    update?: Nullable<OrderUpdateWithWhereUniqueWithoutProviderInput[]>;
    updateMany?: Nullable<OrderUpdateManyWithWhereWithoutProviderInput[]>;
    upsert?: Nullable<OrderUpsertWithWhereUniqueWithoutProviderInput[]>;
}

export class OrderUpdateManyWithoutReceiptInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutReceiptInput[]>;
    create?: Nullable<OrderCreateWithoutReceiptInput[]>;
    createMany?: Nullable<OrderCreateManyReceiptInputEnvelope>;
    delete?: Nullable<OrderWhereUniqueInput[]>;
    deleteMany?: Nullable<OrderScalarWhereInput[]>;
    disconnect?: Nullable<OrderWhereUniqueInput[]>;
    set?: Nullable<OrderWhereUniqueInput[]>;
    update?: Nullable<OrderUpdateWithWhereUniqueWithoutReceiptInput[]>;
    updateMany?: Nullable<OrderUpdateManyWithWhereWithoutReceiptInput[]>;
    upsert?: Nullable<OrderUpsertWithWhereUniqueWithoutReceiptInput[]>;
}

export class OrderUpdateManyWithoutServiceInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutServiceInput[]>;
    create?: Nullable<OrderCreateWithoutServiceInput[]>;
    createMany?: Nullable<OrderCreateManyServiceInputEnvelope>;
    delete?: Nullable<OrderWhereUniqueInput[]>;
    deleteMany?: Nullable<OrderScalarWhereInput[]>;
    disconnect?: Nullable<OrderWhereUniqueInput[]>;
    set?: Nullable<OrderWhereUniqueInput[]>;
    update?: Nullable<OrderUpdateWithWhereUniqueWithoutServiceInput[]>;
    updateMany?: Nullable<OrderUpdateManyWithWhereWithoutServiceInput[]>;
    upsert?: Nullable<OrderUpsertWithWhereUniqueWithoutServiceInput[]>;
}

export class OrderUpdateOneRequiredWithoutMpesa_paymentInput {
    connect?: Nullable<OrderWhereUniqueInput>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutMpesa_paymentInput>;
    create?: Nullable<OrderUncheckedCreateWithoutMpesa_paymentInput>;
    update?: Nullable<OrderUncheckedUpdateWithoutMpesa_paymentInput>;
    upsert?: Nullable<OrderUpsertWithoutMpesa_paymentInput>;
}

export class OrderUpdateOneRequiredWithoutSelcom_paymentInput {
    connect?: Nullable<OrderWhereUniqueInput>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutSelcom_paymentInput>;
    create?: Nullable<OrderUncheckedCreateWithoutSelcom_paymentInput>;
    update?: Nullable<OrderUncheckedUpdateWithoutSelcom_paymentInput>;
    upsert?: Nullable<OrderUpsertWithoutSelcom_paymentInput>;
}

export class OrderUpdateOneWithoutLocationInput {
    connect?: Nullable<OrderWhereUniqueInput>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutLocationInput>;
    create?: Nullable<OrderUncheckedCreateWithoutLocationInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<OrderUncheckedUpdateWithoutLocationInput>;
    upsert?: Nullable<OrderUpsertWithoutLocationInput>;
}

export class OrderUpdateWithWhereUniqueWithoutOrganizationInput {
    data: OrderUncheckedUpdateWithoutOrganizationInput;
    where: OrderWhereUniqueInput;
}

export class OrderUpdateWithWhereUniqueWithoutOwnerInput {
    data: OrderUncheckedUpdateWithoutOwnerInput;
    where: OrderWhereUniqueInput;
}

export class OrderUpdateWithWhereUniqueWithoutProviderInput {
    data: OrderUncheckedUpdateWithoutProviderInput;
    where: OrderWhereUniqueInput;
}

export class OrderUpdateWithWhereUniqueWithoutReceiptInput {
    data: OrderUncheckedUpdateWithoutReceiptInput;
    where: OrderWhereUniqueInput;
}

export class OrderUpdateWithWhereUniqueWithoutServiceInput {
    data: OrderUncheckedUpdateWithoutServiceInput;
    where: OrderWhereUniqueInput;
}

export class OrderUpdateWithoutLocationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesa_payment?: Nullable<MpesaPaymentUpdateOneWithoutOrderInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organization?: Nullable<OrganizationUpdateOneRequiredWithoutOrdersInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrdersInput>;
    provider?: Nullable<UserUpdateOneWithoutProvidesInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receipt?: Nullable<AttachmentUpdateOneWithoutOrdersInput>;
    selcom_payment?: Nullable<SelcomPaymentUpdateOneWithoutOrderInput>;
    service?: Nullable<ServiceUpdateOneRequiredWithoutOrdersInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateWithoutMpesa_paymentInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutOrderInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organization?: Nullable<OrganizationUpdateOneRequiredWithoutOrdersInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrdersInput>;
    provider?: Nullable<UserUpdateOneWithoutProvidesInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receipt?: Nullable<AttachmentUpdateOneWithoutOrdersInput>;
    selcom_payment?: Nullable<SelcomPaymentUpdateOneWithoutOrderInput>;
    service?: Nullable<ServiceUpdateOneRequiredWithoutOrdersInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateWithoutOrganizationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutOrderInput>;
    mpesa_payment?: Nullable<MpesaPaymentUpdateOneWithoutOrderInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrdersInput>;
    provider?: Nullable<UserUpdateOneWithoutProvidesInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receipt?: Nullable<AttachmentUpdateOneWithoutOrdersInput>;
    selcom_payment?: Nullable<SelcomPaymentUpdateOneWithoutOrderInput>;
    service?: Nullable<ServiceUpdateOneRequiredWithoutOrdersInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateWithoutOwnerInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutOrderInput>;
    mpesa_payment?: Nullable<MpesaPaymentUpdateOneWithoutOrderInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organization?: Nullable<OrganizationUpdateOneRequiredWithoutOrdersInput>;
    provider?: Nullable<UserUpdateOneWithoutProvidesInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receipt?: Nullable<AttachmentUpdateOneWithoutOrdersInput>;
    selcom_payment?: Nullable<SelcomPaymentUpdateOneWithoutOrderInput>;
    service?: Nullable<ServiceUpdateOneRequiredWithoutOrdersInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateWithoutProviderInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutOrderInput>;
    mpesa_payment?: Nullable<MpesaPaymentUpdateOneWithoutOrderInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organization?: Nullable<OrganizationUpdateOneRequiredWithoutOrdersInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrdersInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receipt?: Nullable<AttachmentUpdateOneWithoutOrdersInput>;
    selcom_payment?: Nullable<SelcomPaymentUpdateOneWithoutOrderInput>;
    service?: Nullable<ServiceUpdateOneRequiredWithoutOrdersInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateWithoutReceiptInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutOrderInput>;
    mpesa_payment?: Nullable<MpesaPaymentUpdateOneWithoutOrderInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organization?: Nullable<OrganizationUpdateOneRequiredWithoutOrdersInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrdersInput>;
    provider?: Nullable<UserUpdateOneWithoutProvidesInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    selcom_payment?: Nullable<SelcomPaymentUpdateOneWithoutOrderInput>;
    service?: Nullable<ServiceUpdateOneRequiredWithoutOrdersInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateWithoutSelcom_paymentInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutOrderInput>;
    mpesa_payment?: Nullable<MpesaPaymentUpdateOneWithoutOrderInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organization?: Nullable<OrganizationUpdateOneRequiredWithoutOrdersInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrdersInput>;
    provider?: Nullable<UserUpdateOneWithoutProvidesInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receipt?: Nullable<AttachmentUpdateOneWithoutOrdersInput>;
    service?: Nullable<ServiceUpdateOneRequiredWithoutOrdersInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdateWithoutServiceInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    deliveryMode?: Nullable<DeliveryMode[]>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneWithoutOrderInput>;
    mpesa_payment?: Nullable<MpesaPaymentUpdateOneWithoutOrderInput>;
    notes?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organization?: Nullable<OrganizationUpdateOneRequiredWithoutOrdersInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrdersInput>;
    provider?: Nullable<UserUpdateOneWithoutProvidesInput>;
    quantity?: Nullable<IntFieldUpdateOperationsInput>;
    receipt?: Nullable<AttachmentUpdateOneWithoutOrdersInput>;
    selcom_payment?: Nullable<SelcomPaymentUpdateOneWithoutOrderInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrderUpdatedeliveryModeInput {
    push?: Nullable<DeliveryMode[]>;
    set?: Nullable<DeliveryMode[]>;
}

export class OrderUpsertWithWhereUniqueWithoutOrganizationInput {
    create: OrderUncheckedCreateWithoutOrganizationInput;
    update: OrderUncheckedUpdateWithoutOrganizationInput;
    where: OrderWhereUniqueInput;
}

export class OrderUpsertWithWhereUniqueWithoutOwnerInput {
    create: OrderUncheckedCreateWithoutOwnerInput;
    update: OrderUncheckedUpdateWithoutOwnerInput;
    where: OrderWhereUniqueInput;
}

export class OrderUpsertWithWhereUniqueWithoutProviderInput {
    create: OrderUncheckedCreateWithoutProviderInput;
    update: OrderUncheckedUpdateWithoutProviderInput;
    where: OrderWhereUniqueInput;
}

export class OrderUpsertWithWhereUniqueWithoutReceiptInput {
    create: OrderUncheckedCreateWithoutReceiptInput;
    update: OrderUncheckedUpdateWithoutReceiptInput;
    where: OrderWhereUniqueInput;
}

export class OrderUpsertWithWhereUniqueWithoutServiceInput {
    create: OrderUncheckedCreateWithoutServiceInput;
    update: OrderUncheckedUpdateWithoutServiceInput;
    where: OrderWhereUniqueInput;
}

export class OrderUpsertWithoutLocationInput {
    create: OrderUncheckedCreateWithoutLocationInput;
    update: OrderUncheckedUpdateWithoutLocationInput;
}

export class OrderUpsertWithoutMpesa_paymentInput {
    create: OrderUncheckedCreateWithoutMpesa_paymentInput;
    update: OrderUncheckedUpdateWithoutMpesa_paymentInput;
}

export class OrderUpsertWithoutSelcom_paymentInput {
    create: OrderUncheckedCreateWithoutSelcom_paymentInput;
    update: OrderUncheckedUpdateWithoutSelcom_paymentInput;
}

export class OrderWhereInput {
    AND?: Nullable<OrderWhereInput[]>;
    NOT?: Nullable<OrderWhereInput[]>;
    OR?: Nullable<OrderWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    deliveryMode?: Nullable<EnumDeliveryModeNullableListFilter>;
    id?: Nullable<StringFilter>;
    location?: Nullable<LocationWhereInput>;
    locationId?: Nullable<StringNullableFilter>;
    mpesa_payment?: Nullable<MpesaPaymentWhereInput>;
    notes?: Nullable<StringNullableFilter>;
    organization?: Nullable<OrganizationWhereInput>;
    organizationId?: Nullable<StringFilter>;
    owner?: Nullable<UserWhereInput>;
    ownerId?: Nullable<StringFilter>;
    provider?: Nullable<UserWhereInput>;
    providerId?: Nullable<StringNullableFilter>;
    quantity?: Nullable<IntFilter>;
    receipt?: Nullable<AttachmentWhereInput>;
    receiptId?: Nullable<StringNullableFilter>;
    selcom_payment?: Nullable<SelcomPaymentWhereInput>;
    service?: Nullable<ServiceWhereInput>;
    serviceId?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class OrderWhereUniqueInput {
    id?: Nullable<string>;
}

export class OrganizationCountOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    locationId?: Nullable<SortOrder>;
    logoId?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    ownerId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class OrganizationCreateInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    invites?: Nullable<InviteCreateNestedManyWithoutOrganizationInput>;
    location: LocationCreateNestedOneWithoutOrganizationsInput;
    logo: AttachmentCreateNestedOneWithoutOrganizationsInput;
    name: string;
    offers?: Nullable<ServiceCategoryCreateNestedManyWithoutOrganizationsInput>;
    orders?: Nullable<OrderCreateNestedManyWithoutOrganizationInput>;
    owner: UserCreateNestedOneWithoutOrganizationsInput;
    ratings?: Nullable<RatingCreateNestedManyWithoutOrganizationInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutOrganizationInput>;
    staffs?: Nullable<UserCreateNestedManyWithoutStaffOfInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationCreateManyInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    locationId: string;
    logoId: string;
    name: string;
    ownerId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationCreateManyLocationInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    logoId: string;
    name: string;
    ownerId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationCreateManyLocationInputEnvelope {
    data: OrganizationCreateManyLocationInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class OrganizationCreateManyLogoInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    locationId: string;
    name: string;
    ownerId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationCreateManyLogoInputEnvelope {
    data: OrganizationCreateManyLogoInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class OrganizationCreateManyOwnerInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    locationId: string;
    logoId: string;
    name: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationCreateManyOwnerInputEnvelope {
    data: OrganizationCreateManyOwnerInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class OrganizationCreateNestedManyWithoutLocationInput {
    connect?: Nullable<OrganizationWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrganizationCreateOrConnectWithoutLocationInput[]>;
    create?: Nullable<OrganizationCreateWithoutLocationInput[]>;
    createMany?: Nullable<OrganizationCreateManyLocationInputEnvelope>;
}

export class OrganizationCreateNestedManyWithoutLogoInput {
    connect?: Nullable<OrganizationWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrganizationCreateOrConnectWithoutLogoInput[]>;
    create?: Nullable<OrganizationCreateWithoutLogoInput[]>;
    createMany?: Nullable<OrganizationCreateManyLogoInputEnvelope>;
}

export class OrganizationCreateNestedManyWithoutOffersInput {
    connect?: Nullable<OrganizationWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrganizationCreateOrConnectWithoutOffersInput[]>;
    create?: Nullable<OrganizationCreateWithoutOffersInput[]>;
}

export class OrganizationCreateNestedManyWithoutOwnerInput {
    connect?: Nullable<OrganizationWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrganizationCreateOrConnectWithoutOwnerInput[]>;
    create?: Nullable<OrganizationCreateWithoutOwnerInput[]>;
    createMany?: Nullable<OrganizationCreateManyOwnerInputEnvelope>;
}

export class OrganizationCreateNestedManyWithoutStaffsInput {
    connect?: Nullable<OrganizationWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrganizationCreateOrConnectWithoutStaffsInput[]>;
    create?: Nullable<OrganizationCreateWithoutStaffsInput[]>;
}

export class OrganizationCreateNestedOneWithoutInvitesInput {
    connect?: Nullable<OrganizationWhereUniqueInput>;
    connectOrCreate?: Nullable<OrganizationCreateOrConnectWithoutInvitesInput>;
    create?: Nullable<OrganizationUncheckedCreateWithoutInvitesInput>;
}

export class OrganizationCreateNestedOneWithoutOrdersInput {
    connect?: Nullable<OrganizationWhereUniqueInput>;
    connectOrCreate?: Nullable<OrganizationCreateOrConnectWithoutOrdersInput>;
    create?: Nullable<OrganizationUncheckedCreateWithoutOrdersInput>;
}

export class OrganizationCreateNestedOneWithoutRatingsInput {
    connect?: Nullable<OrganizationWhereUniqueInput>;
    connectOrCreate?: Nullable<OrganizationCreateOrConnectWithoutRatingsInput>;
    create?: Nullable<OrganizationUncheckedCreateWithoutRatingsInput>;
}

export class OrganizationCreateNestedOneWithoutServicesInput {
    connect?: Nullable<OrganizationWhereUniqueInput>;
    connectOrCreate?: Nullable<OrganizationCreateOrConnectWithoutServicesInput>;
    create?: Nullable<OrganizationUncheckedCreateWithoutServicesInput>;
}

export class OrganizationCreateOrConnectWithoutInvitesInput {
    create: OrganizationUncheckedCreateWithoutInvitesInput;
    where: OrganizationWhereUniqueInput;
}

export class OrganizationCreateOrConnectWithoutLocationInput {
    create: OrganizationUncheckedCreateWithoutLocationInput;
    where: OrganizationWhereUniqueInput;
}

export class OrganizationCreateOrConnectWithoutLogoInput {
    create: OrganizationUncheckedCreateWithoutLogoInput;
    where: OrganizationWhereUniqueInput;
}

export class OrganizationCreateOrConnectWithoutOffersInput {
    create: OrganizationUncheckedCreateWithoutOffersInput;
    where: OrganizationWhereUniqueInput;
}

export class OrganizationCreateOrConnectWithoutOrdersInput {
    create: OrganizationUncheckedCreateWithoutOrdersInput;
    where: OrganizationWhereUniqueInput;
}

export class OrganizationCreateOrConnectWithoutOwnerInput {
    create: OrganizationUncheckedCreateWithoutOwnerInput;
    where: OrganizationWhereUniqueInput;
}

export class OrganizationCreateOrConnectWithoutRatingsInput {
    create: OrganizationUncheckedCreateWithoutRatingsInput;
    where: OrganizationWhereUniqueInput;
}

export class OrganizationCreateOrConnectWithoutServicesInput {
    create: OrganizationUncheckedCreateWithoutServicesInput;
    where: OrganizationWhereUniqueInput;
}

export class OrganizationCreateOrConnectWithoutStaffsInput {
    create: OrganizationUncheckedCreateWithoutStaffsInput;
    where: OrganizationWhereUniqueInput;
}

export class OrganizationCreateWithoutInvitesInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    location: LocationCreateNestedOneWithoutOrganizationsInput;
    logo: AttachmentCreateNestedOneWithoutOrganizationsInput;
    name: string;
    offers?: Nullable<ServiceCategoryCreateNestedManyWithoutOrganizationsInput>;
    orders?: Nullable<OrderCreateNestedManyWithoutOrganizationInput>;
    owner: UserCreateNestedOneWithoutOrganizationsInput;
    ratings?: Nullable<RatingCreateNestedManyWithoutOrganizationInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutOrganizationInput>;
    staffs?: Nullable<UserCreateNestedManyWithoutStaffOfInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationCreateWithoutLocationInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    invites?: Nullable<InviteCreateNestedManyWithoutOrganizationInput>;
    logo: AttachmentCreateNestedOneWithoutOrganizationsInput;
    name: string;
    offers?: Nullable<ServiceCategoryCreateNestedManyWithoutOrganizationsInput>;
    orders?: Nullable<OrderCreateNestedManyWithoutOrganizationInput>;
    owner: UserCreateNestedOneWithoutOrganizationsInput;
    ratings?: Nullable<RatingCreateNestedManyWithoutOrganizationInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutOrganizationInput>;
    staffs?: Nullable<UserCreateNestedManyWithoutStaffOfInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationCreateWithoutLogoInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    invites?: Nullable<InviteCreateNestedManyWithoutOrganizationInput>;
    location: LocationCreateNestedOneWithoutOrganizationsInput;
    name: string;
    offers?: Nullable<ServiceCategoryCreateNestedManyWithoutOrganizationsInput>;
    orders?: Nullable<OrderCreateNestedManyWithoutOrganizationInput>;
    owner: UserCreateNestedOneWithoutOrganizationsInput;
    ratings?: Nullable<RatingCreateNestedManyWithoutOrganizationInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutOrganizationInput>;
    staffs?: Nullable<UserCreateNestedManyWithoutStaffOfInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationCreateWithoutOffersInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    invites?: Nullable<InviteCreateNestedManyWithoutOrganizationInput>;
    location: LocationCreateNestedOneWithoutOrganizationsInput;
    logo: AttachmentCreateNestedOneWithoutOrganizationsInput;
    name: string;
    orders?: Nullable<OrderCreateNestedManyWithoutOrganizationInput>;
    owner: UserCreateNestedOneWithoutOrganizationsInput;
    ratings?: Nullable<RatingCreateNestedManyWithoutOrganizationInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutOrganizationInput>;
    staffs?: Nullable<UserCreateNestedManyWithoutStaffOfInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationCreateWithoutOrdersInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    invites?: Nullable<InviteCreateNestedManyWithoutOrganizationInput>;
    location: LocationCreateNestedOneWithoutOrganizationsInput;
    logo: AttachmentCreateNestedOneWithoutOrganizationsInput;
    name: string;
    offers?: Nullable<ServiceCategoryCreateNestedManyWithoutOrganizationsInput>;
    owner: UserCreateNestedOneWithoutOrganizationsInput;
    ratings?: Nullable<RatingCreateNestedManyWithoutOrganizationInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutOrganizationInput>;
    staffs?: Nullable<UserCreateNestedManyWithoutStaffOfInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationCreateWithoutOwnerInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    invites?: Nullable<InviteCreateNestedManyWithoutOrganizationInput>;
    location: LocationCreateNestedOneWithoutOrganizationsInput;
    logo: AttachmentCreateNestedOneWithoutOrganizationsInput;
    name: string;
    offers?: Nullable<ServiceCategoryCreateNestedManyWithoutOrganizationsInput>;
    orders?: Nullable<OrderCreateNestedManyWithoutOrganizationInput>;
    ratings?: Nullable<RatingCreateNestedManyWithoutOrganizationInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutOrganizationInput>;
    staffs?: Nullable<UserCreateNestedManyWithoutStaffOfInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationCreateWithoutRatingsInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    invites?: Nullable<InviteCreateNestedManyWithoutOrganizationInput>;
    location: LocationCreateNestedOneWithoutOrganizationsInput;
    logo: AttachmentCreateNestedOneWithoutOrganizationsInput;
    name: string;
    offers?: Nullable<ServiceCategoryCreateNestedManyWithoutOrganizationsInput>;
    orders?: Nullable<OrderCreateNestedManyWithoutOrganizationInput>;
    owner: UserCreateNestedOneWithoutOrganizationsInput;
    services?: Nullable<ServiceCreateNestedManyWithoutOrganizationInput>;
    staffs?: Nullable<UserCreateNestedManyWithoutStaffOfInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationCreateWithoutServicesInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    invites?: Nullable<InviteCreateNestedManyWithoutOrganizationInput>;
    location: LocationCreateNestedOneWithoutOrganizationsInput;
    logo: AttachmentCreateNestedOneWithoutOrganizationsInput;
    name: string;
    offers?: Nullable<ServiceCategoryCreateNestedManyWithoutOrganizationsInput>;
    orders?: Nullable<OrderCreateNestedManyWithoutOrganizationInput>;
    owner: UserCreateNestedOneWithoutOrganizationsInput;
    ratings?: Nullable<RatingCreateNestedManyWithoutOrganizationInput>;
    staffs?: Nullable<UserCreateNestedManyWithoutStaffOfInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationCreateWithoutStaffsInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    invites?: Nullable<InviteCreateNestedManyWithoutOrganizationInput>;
    location: LocationCreateNestedOneWithoutOrganizationsInput;
    logo: AttachmentCreateNestedOneWithoutOrganizationsInput;
    name: string;
    offers?: Nullable<ServiceCategoryCreateNestedManyWithoutOrganizationsInput>;
    orders?: Nullable<OrderCreateNestedManyWithoutOrganizationInput>;
    owner: UserCreateNestedOneWithoutOrganizationsInput;
    ratings?: Nullable<RatingCreateNestedManyWithoutOrganizationInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutOrganizationInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationListRelationFilter {
    every?: Nullable<OrganizationWhereInput>;
    none?: Nullable<OrganizationWhereInput>;
    some?: Nullable<OrganizationWhereInput>;
}

export class OrganizationMaxOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    locationId?: Nullable<SortOrder>;
    logoId?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    ownerId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class OrganizationMinOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    locationId?: Nullable<SortOrder>;
    logoId?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    ownerId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class OrganizationOrderByInput {
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    locationId?: Nullable<SortOrder>;
    logoId?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    ownerId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class OrganizationOrderByWithAggregationInput {
    _count?: Nullable<OrganizationCountOrderByAggregateInput>;
    _max?: Nullable<OrganizationMaxOrderByAggregateInput>;
    _min?: Nullable<OrganizationMinOrderByAggregateInput>;
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    locationId?: Nullable<SortOrder>;
    logoId?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    ownerId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class OrganizationRelationFilter {
    is?: Nullable<OrganizationWhereInput>;
    isNot?: Nullable<OrganizationWhereInput>;
}

export class OrganizationScalarWhereInput {
    AND?: Nullable<OrganizationScalarWhereInput[]>;
    NOT?: Nullable<OrganizationScalarWhereInput[]>;
    OR?: Nullable<OrganizationScalarWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    description?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    locationId?: Nullable<StringFilter>;
    logoId?: Nullable<StringFilter>;
    name?: Nullable<StringFilter>;
    ownerId?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class OrganizationScalarWhereWithAggregatesInput {
    AND?: Nullable<OrganizationScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<OrganizationScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<OrganizationScalarWhereWithAggregatesInput[]>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    description?: Nullable<StringNullableWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    locationId?: Nullable<StringWithAggregatesFilter>;
    logoId?: Nullable<StringWithAggregatesFilter>;
    name?: Nullable<StringWithAggregatesFilter>;
    ownerId?: Nullable<StringWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class OrganizationUncheckedCreateInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    invites?: Nullable<InviteUncheckedCreateNestedManyWithoutOrganizationInput>;
    locationId: string;
    logoId: string;
    name: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOrganizationInput>;
    ownerId: string;
    ratings?: Nullable<RatingUncheckedCreateNestedManyWithoutOrganizationInput>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutOrganizationInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationUncheckedCreateNestedManyWithoutLocationInput {
    connect?: Nullable<OrganizationWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrganizationCreateOrConnectWithoutLocationInput[]>;
    create?: Nullable<OrganizationCreateWithoutLocationInput[]>;
    createMany?: Nullable<OrganizationCreateManyLocationInputEnvelope>;
}

export class OrganizationUncheckedCreateNestedManyWithoutLogoInput {
    connect?: Nullable<OrganizationWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrganizationCreateOrConnectWithoutLogoInput[]>;
    create?: Nullable<OrganizationCreateWithoutLogoInput[]>;
    createMany?: Nullable<OrganizationCreateManyLogoInputEnvelope>;
}

export class OrganizationUncheckedCreateNestedManyWithoutOwnerInput {
    connect?: Nullable<OrganizationWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrganizationCreateOrConnectWithoutOwnerInput[]>;
    create?: Nullable<OrganizationCreateWithoutOwnerInput[]>;
    createMany?: Nullable<OrganizationCreateManyOwnerInputEnvelope>;
}

export class OrganizationUncheckedCreateWithoutInvitesInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    locationId: string;
    logoId: string;
    name: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOrganizationInput>;
    ownerId: string;
    ratings?: Nullable<RatingUncheckedCreateNestedManyWithoutOrganizationInput>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutOrganizationInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationUncheckedCreateWithoutLocationInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    invites?: Nullable<InviteUncheckedCreateNestedManyWithoutOrganizationInput>;
    logoId: string;
    name: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOrganizationInput>;
    ownerId: string;
    ratings?: Nullable<RatingUncheckedCreateNestedManyWithoutOrganizationInput>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutOrganizationInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationUncheckedCreateWithoutLogoInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    invites?: Nullable<InviteUncheckedCreateNestedManyWithoutOrganizationInput>;
    locationId: string;
    name: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOrganizationInput>;
    ownerId: string;
    ratings?: Nullable<RatingUncheckedCreateNestedManyWithoutOrganizationInput>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutOrganizationInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationUncheckedCreateWithoutOffersInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    invites?: Nullable<InviteUncheckedCreateNestedManyWithoutOrganizationInput>;
    locationId: string;
    logoId: string;
    name: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOrganizationInput>;
    ownerId: string;
    ratings?: Nullable<RatingUncheckedCreateNestedManyWithoutOrganizationInput>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutOrganizationInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationUncheckedCreateWithoutOrdersInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    invites?: Nullable<InviteUncheckedCreateNestedManyWithoutOrganizationInput>;
    locationId: string;
    logoId: string;
    name: string;
    ownerId: string;
    ratings?: Nullable<RatingUncheckedCreateNestedManyWithoutOrganizationInput>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutOrganizationInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationUncheckedCreateWithoutOwnerInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    invites?: Nullable<InviteUncheckedCreateNestedManyWithoutOrganizationInput>;
    locationId: string;
    logoId: string;
    name: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOrganizationInput>;
    ratings?: Nullable<RatingUncheckedCreateNestedManyWithoutOrganizationInput>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutOrganizationInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationUncheckedCreateWithoutRatingsInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    invites?: Nullable<InviteUncheckedCreateNestedManyWithoutOrganizationInput>;
    locationId: string;
    logoId: string;
    name: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOrganizationInput>;
    ownerId: string;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutOrganizationInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationUncheckedCreateWithoutServicesInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    invites?: Nullable<InviteUncheckedCreateNestedManyWithoutOrganizationInput>;
    locationId: string;
    logoId: string;
    name: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOrganizationInput>;
    ownerId: string;
    ratings?: Nullable<RatingUncheckedCreateNestedManyWithoutOrganizationInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationUncheckedCreateWithoutStaffsInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    invites?: Nullable<InviteUncheckedCreateNestedManyWithoutOrganizationInput>;
    locationId: string;
    logoId: string;
    name: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOrganizationInput>;
    ownerId: string;
    ratings?: Nullable<RatingUncheckedCreateNestedManyWithoutOrganizationInput>;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutOrganizationInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationUncheckedUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invites?: Nullable<InviteUncheckedUpdateManyWithoutOrganizationInput>;
    locationId?: Nullable<StringFieldUpdateOperationsInput>;
    logoId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOrganizationInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    ratings?: Nullable<RatingUncheckedUpdateManyWithoutOrganizationInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutOrganizationInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrganizationUncheckedUpdateManyInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<StringFieldUpdateOperationsInput>;
    logoId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrganizationUncheckedUpdateManyWithoutLocationInput {
    connect?: Nullable<OrganizationWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrganizationCreateOrConnectWithoutLocationInput[]>;
    create?: Nullable<OrganizationCreateWithoutLocationInput[]>;
    createMany?: Nullable<OrganizationCreateManyLocationInputEnvelope>;
    delete?: Nullable<OrganizationWhereUniqueInput[]>;
    deleteMany?: Nullable<OrganizationScalarWhereInput[]>;
    disconnect?: Nullable<OrganizationWhereUniqueInput[]>;
    set?: Nullable<OrganizationWhereUniqueInput[]>;
    update?: Nullable<OrganizationUpdateWithWhereUniqueWithoutLocationInput[]>;
    updateMany?: Nullable<OrganizationUpdateManyWithWhereWithoutLocationInput[]>;
    upsert?: Nullable<OrganizationUpsertWithWhereUniqueWithoutLocationInput[]>;
}

export class OrganizationUncheckedUpdateManyWithoutLogoInput {
    connect?: Nullable<OrganizationWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrganizationCreateOrConnectWithoutLogoInput[]>;
    create?: Nullable<OrganizationCreateWithoutLogoInput[]>;
    createMany?: Nullable<OrganizationCreateManyLogoInputEnvelope>;
    delete?: Nullable<OrganizationWhereUniqueInput[]>;
    deleteMany?: Nullable<OrganizationScalarWhereInput[]>;
    disconnect?: Nullable<OrganizationWhereUniqueInput[]>;
    set?: Nullable<OrganizationWhereUniqueInput[]>;
    update?: Nullable<OrganizationUpdateWithWhereUniqueWithoutLogoInput[]>;
    updateMany?: Nullable<OrganizationUpdateManyWithWhereWithoutLogoInput[]>;
    upsert?: Nullable<OrganizationUpsertWithWhereUniqueWithoutLogoInput[]>;
}

export class OrganizationUncheckedUpdateManyWithoutOrganizationsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<StringFieldUpdateOperationsInput>;
    logoId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrganizationUncheckedUpdateManyWithoutOwnerInput {
    connect?: Nullable<OrganizationWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrganizationCreateOrConnectWithoutOwnerInput[]>;
    create?: Nullable<OrganizationCreateWithoutOwnerInput[]>;
    createMany?: Nullable<OrganizationCreateManyOwnerInputEnvelope>;
    delete?: Nullable<OrganizationWhereUniqueInput[]>;
    deleteMany?: Nullable<OrganizationScalarWhereInput[]>;
    disconnect?: Nullable<OrganizationWhereUniqueInput[]>;
    set?: Nullable<OrganizationWhereUniqueInput[]>;
    update?: Nullable<OrganizationUpdateWithWhereUniqueWithoutOwnerInput[]>;
    updateMany?: Nullable<OrganizationUpdateManyWithWhereWithoutOwnerInput[]>;
    upsert?: Nullable<OrganizationUpsertWithWhereUniqueWithoutOwnerInput[]>;
}

export class OrganizationUncheckedUpdateManyWithoutStaffOfInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<StringFieldUpdateOperationsInput>;
    logoId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrganizationUncheckedUpdateWithoutInvitesInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<StringFieldUpdateOperationsInput>;
    logoId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOrganizationInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    ratings?: Nullable<RatingUncheckedUpdateManyWithoutOrganizationInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutOrganizationInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrganizationUncheckedUpdateWithoutLocationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invites?: Nullable<InviteUncheckedUpdateManyWithoutOrganizationInput>;
    logoId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOrganizationInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    ratings?: Nullable<RatingUncheckedUpdateManyWithoutOrganizationInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutOrganizationInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrganizationUncheckedUpdateWithoutLogoInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invites?: Nullable<InviteUncheckedUpdateManyWithoutOrganizationInput>;
    locationId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOrganizationInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    ratings?: Nullable<RatingUncheckedUpdateManyWithoutOrganizationInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutOrganizationInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrganizationUncheckedUpdateWithoutOffersInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invites?: Nullable<InviteUncheckedUpdateManyWithoutOrganizationInput>;
    locationId?: Nullable<StringFieldUpdateOperationsInput>;
    logoId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOrganizationInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    ratings?: Nullable<RatingUncheckedUpdateManyWithoutOrganizationInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutOrganizationInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrganizationUncheckedUpdateWithoutOrdersInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invites?: Nullable<InviteUncheckedUpdateManyWithoutOrganizationInput>;
    locationId?: Nullable<StringFieldUpdateOperationsInput>;
    logoId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    ratings?: Nullable<RatingUncheckedUpdateManyWithoutOrganizationInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutOrganizationInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrganizationUncheckedUpdateWithoutOwnerInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invites?: Nullable<InviteUncheckedUpdateManyWithoutOrganizationInput>;
    locationId?: Nullable<StringFieldUpdateOperationsInput>;
    logoId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOrganizationInput>;
    ratings?: Nullable<RatingUncheckedUpdateManyWithoutOrganizationInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutOrganizationInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrganizationUncheckedUpdateWithoutRatingsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invites?: Nullable<InviteUncheckedUpdateManyWithoutOrganizationInput>;
    locationId?: Nullable<StringFieldUpdateOperationsInput>;
    logoId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOrganizationInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutOrganizationInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrganizationUncheckedUpdateWithoutServicesInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invites?: Nullable<InviteUncheckedUpdateManyWithoutOrganizationInput>;
    locationId?: Nullable<StringFieldUpdateOperationsInput>;
    logoId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOrganizationInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    ratings?: Nullable<RatingUncheckedUpdateManyWithoutOrganizationInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrganizationUncheckedUpdateWithoutStaffsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invites?: Nullable<InviteUncheckedUpdateManyWithoutOrganizationInput>;
    locationId?: Nullable<StringFieldUpdateOperationsInput>;
    logoId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOrganizationInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    ratings?: Nullable<RatingUncheckedUpdateManyWithoutOrganizationInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutOrganizationInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrganizationUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invites?: Nullable<InviteUpdateManyWithoutOrganizationInput>;
    location?: Nullable<LocationUpdateOneRequiredWithoutOrganizationsInput>;
    logo?: Nullable<AttachmentUpdateOneRequiredWithoutOrganizationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    offers?: Nullable<ServiceCategoryUpdateManyWithoutOrganizationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutOrganizationInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrganizationsInput>;
    ratings?: Nullable<RatingUpdateManyWithoutOrganizationInput>;
    services?: Nullable<ServiceUpdateManyWithoutOrganizationInput>;
    staffs?: Nullable<UserUpdateManyWithoutStaffOfInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrganizationUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrganizationUpdateManyWithWhereWithoutLocationInput {
    data: OrganizationUncheckedUpdateManyWithoutOrganizationsInput;
    where: OrganizationScalarWhereInput;
}

export class OrganizationUpdateManyWithWhereWithoutLogoInput {
    data: OrganizationUncheckedUpdateManyWithoutOrganizationsInput;
    where: OrganizationScalarWhereInput;
}

export class OrganizationUpdateManyWithWhereWithoutOffersInput {
    data: OrganizationUncheckedUpdateManyWithoutOrganizationsInput;
    where: OrganizationScalarWhereInput;
}

export class OrganizationUpdateManyWithWhereWithoutOwnerInput {
    data: OrganizationUncheckedUpdateManyWithoutOrganizationsInput;
    where: OrganizationScalarWhereInput;
}

export class OrganizationUpdateManyWithWhereWithoutStaffsInput {
    data: OrganizationUncheckedUpdateManyWithoutStaffOfInput;
    where: OrganizationScalarWhereInput;
}

export class OrganizationUpdateManyWithoutLocationInput {
    connect?: Nullable<OrganizationWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrganizationCreateOrConnectWithoutLocationInput[]>;
    create?: Nullable<OrganizationCreateWithoutLocationInput[]>;
    createMany?: Nullable<OrganizationCreateManyLocationInputEnvelope>;
    delete?: Nullable<OrganizationWhereUniqueInput[]>;
    deleteMany?: Nullable<OrganizationScalarWhereInput[]>;
    disconnect?: Nullable<OrganizationWhereUniqueInput[]>;
    set?: Nullable<OrganizationWhereUniqueInput[]>;
    update?: Nullable<OrganizationUpdateWithWhereUniqueWithoutLocationInput[]>;
    updateMany?: Nullable<OrganizationUpdateManyWithWhereWithoutLocationInput[]>;
    upsert?: Nullable<OrganizationUpsertWithWhereUniqueWithoutLocationInput[]>;
}

export class OrganizationUpdateManyWithoutLogoInput {
    connect?: Nullable<OrganizationWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrganizationCreateOrConnectWithoutLogoInput[]>;
    create?: Nullable<OrganizationCreateWithoutLogoInput[]>;
    createMany?: Nullable<OrganizationCreateManyLogoInputEnvelope>;
    delete?: Nullable<OrganizationWhereUniqueInput[]>;
    deleteMany?: Nullable<OrganizationScalarWhereInput[]>;
    disconnect?: Nullable<OrganizationWhereUniqueInput[]>;
    set?: Nullable<OrganizationWhereUniqueInput[]>;
    update?: Nullable<OrganizationUpdateWithWhereUniqueWithoutLogoInput[]>;
    updateMany?: Nullable<OrganizationUpdateManyWithWhereWithoutLogoInput[]>;
    upsert?: Nullable<OrganizationUpsertWithWhereUniqueWithoutLogoInput[]>;
}

export class OrganizationUpdateManyWithoutOffersInput {
    connect?: Nullable<OrganizationWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrganizationCreateOrConnectWithoutOffersInput[]>;
    create?: Nullable<OrganizationCreateWithoutOffersInput[]>;
    delete?: Nullable<OrganizationWhereUniqueInput[]>;
    deleteMany?: Nullable<OrganizationScalarWhereInput[]>;
    disconnect?: Nullable<OrganizationWhereUniqueInput[]>;
    set?: Nullable<OrganizationWhereUniqueInput[]>;
    update?: Nullable<OrganizationUpdateWithWhereUniqueWithoutOffersInput[]>;
    updateMany?: Nullable<OrganizationUpdateManyWithWhereWithoutOffersInput[]>;
    upsert?: Nullable<OrganizationUpsertWithWhereUniqueWithoutOffersInput[]>;
}

export class OrganizationUpdateManyWithoutOwnerInput {
    connect?: Nullable<OrganizationWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrganizationCreateOrConnectWithoutOwnerInput[]>;
    create?: Nullable<OrganizationCreateWithoutOwnerInput[]>;
    createMany?: Nullable<OrganizationCreateManyOwnerInputEnvelope>;
    delete?: Nullable<OrganizationWhereUniqueInput[]>;
    deleteMany?: Nullable<OrganizationScalarWhereInput[]>;
    disconnect?: Nullable<OrganizationWhereUniqueInput[]>;
    set?: Nullable<OrganizationWhereUniqueInput[]>;
    update?: Nullable<OrganizationUpdateWithWhereUniqueWithoutOwnerInput[]>;
    updateMany?: Nullable<OrganizationUpdateManyWithWhereWithoutOwnerInput[]>;
    upsert?: Nullable<OrganizationUpsertWithWhereUniqueWithoutOwnerInput[]>;
}

export class OrganizationUpdateManyWithoutStaffsInput {
    connect?: Nullable<OrganizationWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrganizationCreateOrConnectWithoutStaffsInput[]>;
    create?: Nullable<OrganizationCreateWithoutStaffsInput[]>;
    delete?: Nullable<OrganizationWhereUniqueInput[]>;
    deleteMany?: Nullable<OrganizationScalarWhereInput[]>;
    disconnect?: Nullable<OrganizationWhereUniqueInput[]>;
    set?: Nullable<OrganizationWhereUniqueInput[]>;
    update?: Nullable<OrganizationUpdateWithWhereUniqueWithoutStaffsInput[]>;
    updateMany?: Nullable<OrganizationUpdateManyWithWhereWithoutStaffsInput[]>;
    upsert?: Nullable<OrganizationUpsertWithWhereUniqueWithoutStaffsInput[]>;
}

export class OrganizationUpdateOneRequiredWithoutOrdersInput {
    connect?: Nullable<OrganizationWhereUniqueInput>;
    connectOrCreate?: Nullable<OrganizationCreateOrConnectWithoutOrdersInput>;
    create?: Nullable<OrganizationUncheckedCreateWithoutOrdersInput>;
    update?: Nullable<OrganizationUncheckedUpdateWithoutOrdersInput>;
    upsert?: Nullable<OrganizationUpsertWithoutOrdersInput>;
}

export class OrganizationUpdateOneRequiredWithoutServicesInput {
    connect?: Nullable<OrganizationWhereUniqueInput>;
    connectOrCreate?: Nullable<OrganizationCreateOrConnectWithoutServicesInput>;
    create?: Nullable<OrganizationUncheckedCreateWithoutServicesInput>;
    update?: Nullable<OrganizationUncheckedUpdateWithoutServicesInput>;
    upsert?: Nullable<OrganizationUpsertWithoutServicesInput>;
}

export class OrganizationUpdateOneWithoutInvitesInput {
    connect?: Nullable<OrganizationWhereUniqueInput>;
    connectOrCreate?: Nullable<OrganizationCreateOrConnectWithoutInvitesInput>;
    create?: Nullable<OrganizationUncheckedCreateWithoutInvitesInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<OrganizationUncheckedUpdateWithoutInvitesInput>;
    upsert?: Nullable<OrganizationUpsertWithoutInvitesInput>;
}

export class OrganizationUpdateOneWithoutRatingsInput {
    connect?: Nullable<OrganizationWhereUniqueInput>;
    connectOrCreate?: Nullable<OrganizationCreateOrConnectWithoutRatingsInput>;
    create?: Nullable<OrganizationUncheckedCreateWithoutRatingsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<OrganizationUncheckedUpdateWithoutRatingsInput>;
    upsert?: Nullable<OrganizationUpsertWithoutRatingsInput>;
}

export class OrganizationUpdateWithWhereUniqueWithoutLocationInput {
    data: OrganizationUncheckedUpdateWithoutLocationInput;
    where: OrganizationWhereUniqueInput;
}

export class OrganizationUpdateWithWhereUniqueWithoutLogoInput {
    data: OrganizationUncheckedUpdateWithoutLogoInput;
    where: OrganizationWhereUniqueInput;
}

export class OrganizationUpdateWithWhereUniqueWithoutOffersInput {
    data: OrganizationUncheckedUpdateWithoutOffersInput;
    where: OrganizationWhereUniqueInput;
}

export class OrganizationUpdateWithWhereUniqueWithoutOwnerInput {
    data: OrganizationUncheckedUpdateWithoutOwnerInput;
    where: OrganizationWhereUniqueInput;
}

export class OrganizationUpdateWithWhereUniqueWithoutStaffsInput {
    data: OrganizationUncheckedUpdateWithoutStaffsInput;
    where: OrganizationWhereUniqueInput;
}

export class OrganizationUpdateWithoutInvitesInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    location?: Nullable<LocationUpdateOneRequiredWithoutOrganizationsInput>;
    logo?: Nullable<AttachmentUpdateOneRequiredWithoutOrganizationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    offers?: Nullable<ServiceCategoryUpdateManyWithoutOrganizationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutOrganizationInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrganizationsInput>;
    ratings?: Nullable<RatingUpdateManyWithoutOrganizationInput>;
    services?: Nullable<ServiceUpdateManyWithoutOrganizationInput>;
    staffs?: Nullable<UserUpdateManyWithoutStaffOfInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrganizationUpdateWithoutLocationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invites?: Nullable<InviteUpdateManyWithoutOrganizationInput>;
    logo?: Nullable<AttachmentUpdateOneRequiredWithoutOrganizationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    offers?: Nullable<ServiceCategoryUpdateManyWithoutOrganizationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutOrganizationInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrganizationsInput>;
    ratings?: Nullable<RatingUpdateManyWithoutOrganizationInput>;
    services?: Nullable<ServiceUpdateManyWithoutOrganizationInput>;
    staffs?: Nullable<UserUpdateManyWithoutStaffOfInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrganizationUpdateWithoutLogoInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invites?: Nullable<InviteUpdateManyWithoutOrganizationInput>;
    location?: Nullable<LocationUpdateOneRequiredWithoutOrganizationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    offers?: Nullable<ServiceCategoryUpdateManyWithoutOrganizationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutOrganizationInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrganizationsInput>;
    ratings?: Nullable<RatingUpdateManyWithoutOrganizationInput>;
    services?: Nullable<ServiceUpdateManyWithoutOrganizationInput>;
    staffs?: Nullable<UserUpdateManyWithoutStaffOfInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrganizationUpdateWithoutOffersInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invites?: Nullable<InviteUpdateManyWithoutOrganizationInput>;
    location?: Nullable<LocationUpdateOneRequiredWithoutOrganizationsInput>;
    logo?: Nullable<AttachmentUpdateOneRequiredWithoutOrganizationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutOrganizationInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrganizationsInput>;
    ratings?: Nullable<RatingUpdateManyWithoutOrganizationInput>;
    services?: Nullable<ServiceUpdateManyWithoutOrganizationInput>;
    staffs?: Nullable<UserUpdateManyWithoutStaffOfInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrganizationUpdateWithoutOrdersInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invites?: Nullable<InviteUpdateManyWithoutOrganizationInput>;
    location?: Nullable<LocationUpdateOneRequiredWithoutOrganizationsInput>;
    logo?: Nullable<AttachmentUpdateOneRequiredWithoutOrganizationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    offers?: Nullable<ServiceCategoryUpdateManyWithoutOrganizationsInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrganizationsInput>;
    ratings?: Nullable<RatingUpdateManyWithoutOrganizationInput>;
    services?: Nullable<ServiceUpdateManyWithoutOrganizationInput>;
    staffs?: Nullable<UserUpdateManyWithoutStaffOfInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrganizationUpdateWithoutOwnerInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invites?: Nullable<InviteUpdateManyWithoutOrganizationInput>;
    location?: Nullable<LocationUpdateOneRequiredWithoutOrganizationsInput>;
    logo?: Nullable<AttachmentUpdateOneRequiredWithoutOrganizationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    offers?: Nullable<ServiceCategoryUpdateManyWithoutOrganizationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutOrganizationInput>;
    ratings?: Nullable<RatingUpdateManyWithoutOrganizationInput>;
    services?: Nullable<ServiceUpdateManyWithoutOrganizationInput>;
    staffs?: Nullable<UserUpdateManyWithoutStaffOfInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrganizationUpdateWithoutRatingsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invites?: Nullable<InviteUpdateManyWithoutOrganizationInput>;
    location?: Nullable<LocationUpdateOneRequiredWithoutOrganizationsInput>;
    logo?: Nullable<AttachmentUpdateOneRequiredWithoutOrganizationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    offers?: Nullable<ServiceCategoryUpdateManyWithoutOrganizationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutOrganizationInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrganizationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutOrganizationInput>;
    staffs?: Nullable<UserUpdateManyWithoutStaffOfInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrganizationUpdateWithoutServicesInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invites?: Nullable<InviteUpdateManyWithoutOrganizationInput>;
    location?: Nullable<LocationUpdateOneRequiredWithoutOrganizationsInput>;
    logo?: Nullable<AttachmentUpdateOneRequiredWithoutOrganizationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    offers?: Nullable<ServiceCategoryUpdateManyWithoutOrganizationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutOrganizationInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrganizationsInput>;
    ratings?: Nullable<RatingUpdateManyWithoutOrganizationInput>;
    staffs?: Nullable<UserUpdateManyWithoutStaffOfInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrganizationUpdateWithoutStaffsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invites?: Nullable<InviteUpdateManyWithoutOrganizationInput>;
    location?: Nullable<LocationUpdateOneRequiredWithoutOrganizationsInput>;
    logo?: Nullable<AttachmentUpdateOneRequiredWithoutOrganizationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    offers?: Nullable<ServiceCategoryUpdateManyWithoutOrganizationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutOrganizationInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutOrganizationsInput>;
    ratings?: Nullable<RatingUpdateManyWithoutOrganizationInput>;
    services?: Nullable<ServiceUpdateManyWithoutOrganizationInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class OrganizationUpsertWithWhereUniqueWithoutLocationInput {
    create: OrganizationUncheckedCreateWithoutLocationInput;
    update: OrganizationUncheckedUpdateWithoutLocationInput;
    where: OrganizationWhereUniqueInput;
}

export class OrganizationUpsertWithWhereUniqueWithoutLogoInput {
    create: OrganizationUncheckedCreateWithoutLogoInput;
    update: OrganizationUncheckedUpdateWithoutLogoInput;
    where: OrganizationWhereUniqueInput;
}

export class OrganizationUpsertWithWhereUniqueWithoutOffersInput {
    create: OrganizationUncheckedCreateWithoutOffersInput;
    update: OrganizationUncheckedUpdateWithoutOffersInput;
    where: OrganizationWhereUniqueInput;
}

export class OrganizationUpsertWithWhereUniqueWithoutOwnerInput {
    create: OrganizationUncheckedCreateWithoutOwnerInput;
    update: OrganizationUncheckedUpdateWithoutOwnerInput;
    where: OrganizationWhereUniqueInput;
}

export class OrganizationUpsertWithWhereUniqueWithoutStaffsInput {
    create: OrganizationUncheckedCreateWithoutStaffsInput;
    update: OrganizationUncheckedUpdateWithoutStaffsInput;
    where: OrganizationWhereUniqueInput;
}

export class OrganizationUpsertWithoutInvitesInput {
    create: OrganizationUncheckedCreateWithoutInvitesInput;
    update: OrganizationUncheckedUpdateWithoutInvitesInput;
}

export class OrganizationUpsertWithoutOrdersInput {
    create: OrganizationUncheckedCreateWithoutOrdersInput;
    update: OrganizationUncheckedUpdateWithoutOrdersInput;
}

export class OrganizationUpsertWithoutRatingsInput {
    create: OrganizationUncheckedCreateWithoutRatingsInput;
    update: OrganizationUncheckedUpdateWithoutRatingsInput;
}

export class OrganizationUpsertWithoutServicesInput {
    create: OrganizationUncheckedCreateWithoutServicesInput;
    update: OrganizationUncheckedUpdateWithoutServicesInput;
}

export class OrganizationWhereInput {
    AND?: Nullable<OrganizationWhereInput[]>;
    NOT?: Nullable<OrganizationWhereInput[]>;
    OR?: Nullable<OrganizationWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    description?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    invites?: Nullable<InviteListRelationFilter>;
    location?: Nullable<LocationWhereInput>;
    locationId?: Nullable<StringFilter>;
    logo?: Nullable<AttachmentWhereInput>;
    logoId?: Nullable<StringFilter>;
    name?: Nullable<StringFilter>;
    offers?: Nullable<ServiceCategoryListRelationFilter>;
    orders?: Nullable<OrderListRelationFilter>;
    owner?: Nullable<UserWhereInput>;
    ownerId?: Nullable<StringFilter>;
    ratings?: Nullable<RatingListRelationFilter>;
    services?: Nullable<ServiceListRelationFilter>;
    staffs?: Nullable<UserListRelationFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class OrganizationWhereUniqueInput {
    id?: Nullable<string>;
}

export class PaybillRequest {
    currency?: Nullable<string>;
    method?: Nullable<string>;
    msisdn: string;
    orderId: string;
}

export class PaymentMethodCountOrderByAggregateInput {
    attachmentId?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class PaymentMethodCreateInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    logo: AttachmentCreateNestedOneWithoutPaymentMethodsInput;
    name: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class PaymentMethodCreateManyInput {
    attachmentId: string;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class PaymentMethodCreateNestedOneWithoutLogoInput {
    connect?: Nullable<PaymentMethodWhereUniqueInput>;
    connectOrCreate?: Nullable<PaymentMethodCreateOrConnectWithoutLogoInput>;
    create?: Nullable<PaymentMethodUncheckedCreateWithoutLogoInput>;
}

export class PaymentMethodCreateOrConnectWithoutLogoInput {
    create: PaymentMethodUncheckedCreateWithoutLogoInput;
    where: PaymentMethodWhereUniqueInput;
}

export class PaymentMethodCreateWithoutLogoInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class PaymentMethodMaxOrderByAggregateInput {
    attachmentId?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class PaymentMethodMinOrderByAggregateInput {
    attachmentId?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class PaymentMethodOrderByInput {
    attachmentId?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class PaymentMethodOrderByWithAggregationInput {
    _count?: Nullable<PaymentMethodCountOrderByAggregateInput>;
    _max?: Nullable<PaymentMethodMaxOrderByAggregateInput>;
    _min?: Nullable<PaymentMethodMinOrderByAggregateInput>;
    attachmentId?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class PaymentMethodRelationFilter {
    is?: Nullable<PaymentMethodWhereInput>;
    isNot?: Nullable<PaymentMethodWhereInput>;
}

export class PaymentMethodScalarWhereWithAggregatesInput {
    AND?: Nullable<PaymentMethodScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<PaymentMethodScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<PaymentMethodScalarWhereWithAggregatesInput[]>;
    attachmentId?: Nullable<StringWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    description?: Nullable<StringNullableWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    name?: Nullable<StringWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class PaymentMethodUncheckedCreateInput {
    attachmentId: string;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class PaymentMethodUncheckedCreateNestedOneWithoutLogoInput {
    connect?: Nullable<PaymentMethodWhereUniqueInput>;
    connectOrCreate?: Nullable<PaymentMethodCreateOrConnectWithoutLogoInput>;
    create?: Nullable<PaymentMethodUncheckedCreateWithoutLogoInput>;
}

export class PaymentMethodUncheckedCreateWithoutLogoInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class PaymentMethodUncheckedUpdateInput {
    attachmentId?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class PaymentMethodUncheckedUpdateManyInput {
    attachmentId?: Nullable<StringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class PaymentMethodUncheckedUpdateOneWithoutLogoInput {
    connect?: Nullable<PaymentMethodWhereUniqueInput>;
    connectOrCreate?: Nullable<PaymentMethodCreateOrConnectWithoutLogoInput>;
    create?: Nullable<PaymentMethodUncheckedCreateWithoutLogoInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<PaymentMethodUncheckedUpdateWithoutLogoInput>;
    upsert?: Nullable<PaymentMethodUpsertWithoutLogoInput>;
}

export class PaymentMethodUncheckedUpdateWithoutLogoInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class PaymentMethodUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    logo?: Nullable<AttachmentUpdateOneRequiredWithoutPaymentMethodsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class PaymentMethodUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class PaymentMethodUpdateOneWithoutLogoInput {
    connect?: Nullable<PaymentMethodWhereUniqueInput>;
    connectOrCreate?: Nullable<PaymentMethodCreateOrConnectWithoutLogoInput>;
    create?: Nullable<PaymentMethodUncheckedCreateWithoutLogoInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<PaymentMethodUncheckedUpdateWithoutLogoInput>;
    upsert?: Nullable<PaymentMethodUpsertWithoutLogoInput>;
}

export class PaymentMethodUpdateWithoutLogoInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class PaymentMethodUpsertWithoutLogoInput {
    create: PaymentMethodUncheckedCreateWithoutLogoInput;
    update: PaymentMethodUncheckedUpdateWithoutLogoInput;
}

export class PaymentMethodWhereInput {
    AND?: Nullable<PaymentMethodWhereInput[]>;
    NOT?: Nullable<PaymentMethodWhereInput[]>;
    OR?: Nullable<PaymentMethodWhereInput[]>;
    attachmentId?: Nullable<StringFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    description?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    logo?: Nullable<AttachmentWhereInput>;
    name?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class PaymentMethodWhereUniqueInput {
    id?: Nullable<string>;
}

export class PlaceAutocompleteInput {
    components?: Nullable<Nullable<string>[]>;
    input: string;
    language?: Nullable<string>;
    location?: Nullable<LatLngInput>;
    offset?: Nullable<number>;
    origin?: Nullable<LatLngInput>;
    radius?: Nullable<number>;
    sessiontoken?: Nullable<string>;
    strictbounds?: Nullable<boolean>;
    types?: Nullable<string>;
}

export class RatingAvgOrderByAggregateInput {
    value?: Nullable<SortOrder>;
}

export class RatingCountOrderByAggregateInput {
    comment?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    ownerId?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
    value?: Nullable<SortOrder>;
}

export class RatingCreateInput {
    comment?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    organization?: Nullable<OrganizationCreateNestedOneWithoutRatingsInput>;
    owner: UserCreateNestedOneWithoutRatedInput;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedOneWithoutRatingsInput>;
    value: number;
}

export class RatingCreateManyInput {
    comment?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    organizationId?: Nullable<string>;
    ownerId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    value: number;
}

export class RatingCreateManyOrganizationInput {
    comment?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    ownerId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    value: number;
}

export class RatingCreateManyOrganizationInputEnvelope {
    data: RatingCreateManyOrganizationInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class RatingCreateManyOwnerInput {
    comment?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    organizationId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    value: number;
}

export class RatingCreateManyOwnerInputEnvelope {
    data: RatingCreateManyOwnerInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class RatingCreateManyUserInput {
    comment?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    organizationId?: Nullable<string>;
    ownerId: string;
    updatedAt?: Nullable<DateTime>;
    value: number;
}

export class RatingCreateManyUserInputEnvelope {
    data: RatingCreateManyUserInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class RatingCreateNestedManyWithoutOrganizationInput {
    connect?: Nullable<RatingWhereUniqueInput[]>;
    connectOrCreate?: Nullable<RatingCreateOrConnectWithoutOrganizationInput[]>;
    create?: Nullable<RatingCreateWithoutOrganizationInput[]>;
    createMany?: Nullable<RatingCreateManyOrganizationInputEnvelope>;
}

export class RatingCreateNestedManyWithoutOwnerInput {
    connect?: Nullable<RatingWhereUniqueInput[]>;
    connectOrCreate?: Nullable<RatingCreateOrConnectWithoutOwnerInput[]>;
    create?: Nullable<RatingCreateWithoutOwnerInput[]>;
    createMany?: Nullable<RatingCreateManyOwnerInputEnvelope>;
}

export class RatingCreateNestedManyWithoutUserInput {
    connect?: Nullable<RatingWhereUniqueInput[]>;
    connectOrCreate?: Nullable<RatingCreateOrConnectWithoutUserInput[]>;
    create?: Nullable<RatingCreateWithoutUserInput[]>;
    createMany?: Nullable<RatingCreateManyUserInputEnvelope>;
}

export class RatingCreateOrConnectWithoutOrganizationInput {
    create: RatingUncheckedCreateWithoutOrganizationInput;
    where: RatingWhereUniqueInput;
}

export class RatingCreateOrConnectWithoutOwnerInput {
    create: RatingUncheckedCreateWithoutOwnerInput;
    where: RatingWhereUniqueInput;
}

export class RatingCreateOrConnectWithoutUserInput {
    create: RatingUncheckedCreateWithoutUserInput;
    where: RatingWhereUniqueInput;
}

export class RatingCreateWithoutOrganizationInput {
    comment?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    owner: UserCreateNestedOneWithoutRatedInput;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedOneWithoutRatingsInput>;
    value: number;
}

export class RatingCreateWithoutOwnerInput {
    comment?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    organization?: Nullable<OrganizationCreateNestedOneWithoutRatingsInput>;
    updatedAt?: Nullable<DateTime>;
    user?: Nullable<UserCreateNestedOneWithoutRatingsInput>;
    value: number;
}

export class RatingCreateWithoutUserInput {
    comment?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    organization?: Nullable<OrganizationCreateNestedOneWithoutRatingsInput>;
    owner: UserCreateNestedOneWithoutRatedInput;
    updatedAt?: Nullable<DateTime>;
    value: number;
}

export class RatingListRelationFilter {
    every?: Nullable<RatingWhereInput>;
    none?: Nullable<RatingWhereInput>;
    some?: Nullable<RatingWhereInput>;
}

export class RatingMaxOrderByAggregateInput {
    comment?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    ownerId?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
    value?: Nullable<SortOrder>;
}

export class RatingMinOrderByAggregateInput {
    comment?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    ownerId?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
    value?: Nullable<SortOrder>;
}

export class RatingOrderByInput {
    comment?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    ownerId?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
    value?: Nullable<SortOrder>;
}

export class RatingOrderByWithAggregationInput {
    _avg?: Nullable<RatingAvgOrderByAggregateInput>;
    _count?: Nullable<RatingCountOrderByAggregateInput>;
    _max?: Nullable<RatingMaxOrderByAggregateInput>;
    _min?: Nullable<RatingMinOrderByAggregateInput>;
    _sum?: Nullable<RatingSumOrderByAggregateInput>;
    comment?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    ownerId?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
    value?: Nullable<SortOrder>;
}

export class RatingScalarWhereInput {
    AND?: Nullable<RatingScalarWhereInput[]>;
    NOT?: Nullable<RatingScalarWhereInput[]>;
    OR?: Nullable<RatingScalarWhereInput[]>;
    comment?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    organizationId?: Nullable<StringNullableFilter>;
    ownerId?: Nullable<StringFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    userId?: Nullable<StringNullableFilter>;
    value?: Nullable<IntFilter>;
}

export class RatingScalarWhereWithAggregatesInput {
    AND?: Nullable<RatingScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<RatingScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<RatingScalarWhereWithAggregatesInput[]>;
    comment?: Nullable<StringNullableWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    organizationId?: Nullable<StringNullableWithAggregatesFilter>;
    ownerId?: Nullable<StringWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
    userId?: Nullable<StringNullableWithAggregatesFilter>;
    value?: Nullable<IntWithAggregatesFilter>;
}

export class RatingSumOrderByAggregateInput {
    value?: Nullable<SortOrder>;
}

export class RatingUncheckedCreateInput {
    comment?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    organizationId?: Nullable<string>;
    ownerId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    value: number;
}

export class RatingUncheckedCreateNestedManyWithoutOrganizationInput {
    connect?: Nullable<RatingWhereUniqueInput[]>;
    connectOrCreate?: Nullable<RatingCreateOrConnectWithoutOrganizationInput[]>;
    create?: Nullable<RatingCreateWithoutOrganizationInput[]>;
    createMany?: Nullable<RatingCreateManyOrganizationInputEnvelope>;
}

export class RatingUncheckedCreateNestedManyWithoutOwnerInput {
    connect?: Nullable<RatingWhereUniqueInput[]>;
    connectOrCreate?: Nullable<RatingCreateOrConnectWithoutOwnerInput[]>;
    create?: Nullable<RatingCreateWithoutOwnerInput[]>;
    createMany?: Nullable<RatingCreateManyOwnerInputEnvelope>;
}

export class RatingUncheckedCreateNestedManyWithoutUserInput {
    connect?: Nullable<RatingWhereUniqueInput[]>;
    connectOrCreate?: Nullable<RatingCreateOrConnectWithoutUserInput[]>;
    create?: Nullable<RatingCreateWithoutUserInput[]>;
    createMany?: Nullable<RatingCreateManyUserInputEnvelope>;
}

export class RatingUncheckedCreateWithoutOrganizationInput {
    comment?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    ownerId: string;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    value: number;
}

export class RatingUncheckedCreateWithoutOwnerInput {
    comment?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    organizationId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    value: number;
}

export class RatingUncheckedCreateWithoutUserInput {
    comment?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    organizationId?: Nullable<string>;
    ownerId: string;
    updatedAt?: Nullable<DateTime>;
    value: number;
}

export class RatingUncheckedUpdateInput {
    comment?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class RatingUncheckedUpdateManyInput {
    comment?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class RatingUncheckedUpdateManyWithoutOrganizationInput {
    connect?: Nullable<RatingWhereUniqueInput[]>;
    connectOrCreate?: Nullable<RatingCreateOrConnectWithoutOrganizationInput[]>;
    create?: Nullable<RatingCreateWithoutOrganizationInput[]>;
    createMany?: Nullable<RatingCreateManyOrganizationInputEnvelope>;
    delete?: Nullable<RatingWhereUniqueInput[]>;
    deleteMany?: Nullable<RatingScalarWhereInput[]>;
    disconnect?: Nullable<RatingWhereUniqueInput[]>;
    set?: Nullable<RatingWhereUniqueInput[]>;
    update?: Nullable<RatingUpdateWithWhereUniqueWithoutOrganizationInput[]>;
    updateMany?: Nullable<RatingUpdateManyWithWhereWithoutOrganizationInput[]>;
    upsert?: Nullable<RatingUpsertWithWhereUniqueWithoutOrganizationInput[]>;
}

export class RatingUncheckedUpdateManyWithoutOwnerInput {
    connect?: Nullable<RatingWhereUniqueInput[]>;
    connectOrCreate?: Nullable<RatingCreateOrConnectWithoutOwnerInput[]>;
    create?: Nullable<RatingCreateWithoutOwnerInput[]>;
    createMany?: Nullable<RatingCreateManyOwnerInputEnvelope>;
    delete?: Nullable<RatingWhereUniqueInput[]>;
    deleteMany?: Nullable<RatingScalarWhereInput[]>;
    disconnect?: Nullable<RatingWhereUniqueInput[]>;
    set?: Nullable<RatingWhereUniqueInput[]>;
    update?: Nullable<RatingUpdateWithWhereUniqueWithoutOwnerInput[]>;
    updateMany?: Nullable<RatingUpdateManyWithWhereWithoutOwnerInput[]>;
    upsert?: Nullable<RatingUpsertWithWhereUniqueWithoutOwnerInput[]>;
}

export class RatingUncheckedUpdateManyWithoutRatedInput {
    comment?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class RatingUncheckedUpdateManyWithoutRatingsInput {
    comment?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class RatingUncheckedUpdateManyWithoutUserInput {
    connect?: Nullable<RatingWhereUniqueInput[]>;
    connectOrCreate?: Nullable<RatingCreateOrConnectWithoutUserInput[]>;
    create?: Nullable<RatingCreateWithoutUserInput[]>;
    createMany?: Nullable<RatingCreateManyUserInputEnvelope>;
    delete?: Nullable<RatingWhereUniqueInput[]>;
    deleteMany?: Nullable<RatingScalarWhereInput[]>;
    disconnect?: Nullable<RatingWhereUniqueInput[]>;
    set?: Nullable<RatingWhereUniqueInput[]>;
    update?: Nullable<RatingUpdateWithWhereUniqueWithoutUserInput[]>;
    updateMany?: Nullable<RatingUpdateManyWithWhereWithoutUserInput[]>;
    upsert?: Nullable<RatingUpsertWithWhereUniqueWithoutUserInput[]>;
}

export class RatingUncheckedUpdateWithoutOrganizationInput {
    comment?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class RatingUncheckedUpdateWithoutOwnerInput {
    comment?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class RatingUncheckedUpdateWithoutUserInput {
    comment?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    ownerId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class RatingUpdateInput {
    comment?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    organization?: Nullable<OrganizationUpdateOneWithoutRatingsInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutRatedInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateOneWithoutRatingsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class RatingUpdateManyMutationInput {
    comment?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class RatingUpdateManyWithWhereWithoutOrganizationInput {
    data: RatingUncheckedUpdateManyWithoutRatingsInput;
    where: RatingScalarWhereInput;
}

export class RatingUpdateManyWithWhereWithoutOwnerInput {
    data: RatingUncheckedUpdateManyWithoutRatedInput;
    where: RatingScalarWhereInput;
}

export class RatingUpdateManyWithWhereWithoutUserInput {
    data: RatingUncheckedUpdateManyWithoutRatingsInput;
    where: RatingScalarWhereInput;
}

export class RatingUpdateManyWithoutOrganizationInput {
    connect?: Nullable<RatingWhereUniqueInput[]>;
    connectOrCreate?: Nullable<RatingCreateOrConnectWithoutOrganizationInput[]>;
    create?: Nullable<RatingCreateWithoutOrganizationInput[]>;
    createMany?: Nullable<RatingCreateManyOrganizationInputEnvelope>;
    delete?: Nullable<RatingWhereUniqueInput[]>;
    deleteMany?: Nullable<RatingScalarWhereInput[]>;
    disconnect?: Nullable<RatingWhereUniqueInput[]>;
    set?: Nullable<RatingWhereUniqueInput[]>;
    update?: Nullable<RatingUpdateWithWhereUniqueWithoutOrganizationInput[]>;
    updateMany?: Nullable<RatingUpdateManyWithWhereWithoutOrganizationInput[]>;
    upsert?: Nullable<RatingUpsertWithWhereUniqueWithoutOrganizationInput[]>;
}

export class RatingUpdateManyWithoutOwnerInput {
    connect?: Nullable<RatingWhereUniqueInput[]>;
    connectOrCreate?: Nullable<RatingCreateOrConnectWithoutOwnerInput[]>;
    create?: Nullable<RatingCreateWithoutOwnerInput[]>;
    createMany?: Nullable<RatingCreateManyOwnerInputEnvelope>;
    delete?: Nullable<RatingWhereUniqueInput[]>;
    deleteMany?: Nullable<RatingScalarWhereInput[]>;
    disconnect?: Nullable<RatingWhereUniqueInput[]>;
    set?: Nullable<RatingWhereUniqueInput[]>;
    update?: Nullable<RatingUpdateWithWhereUniqueWithoutOwnerInput[]>;
    updateMany?: Nullable<RatingUpdateManyWithWhereWithoutOwnerInput[]>;
    upsert?: Nullable<RatingUpsertWithWhereUniqueWithoutOwnerInput[]>;
}

export class RatingUpdateManyWithoutUserInput {
    connect?: Nullable<RatingWhereUniqueInput[]>;
    connectOrCreate?: Nullable<RatingCreateOrConnectWithoutUserInput[]>;
    create?: Nullable<RatingCreateWithoutUserInput[]>;
    createMany?: Nullable<RatingCreateManyUserInputEnvelope>;
    delete?: Nullable<RatingWhereUniqueInput[]>;
    deleteMany?: Nullable<RatingScalarWhereInput[]>;
    disconnect?: Nullable<RatingWhereUniqueInput[]>;
    set?: Nullable<RatingWhereUniqueInput[]>;
    update?: Nullable<RatingUpdateWithWhereUniqueWithoutUserInput[]>;
    updateMany?: Nullable<RatingUpdateManyWithWhereWithoutUserInput[]>;
    upsert?: Nullable<RatingUpsertWithWhereUniqueWithoutUserInput[]>;
}

export class RatingUpdateWithWhereUniqueWithoutOrganizationInput {
    data: RatingUncheckedUpdateWithoutOrganizationInput;
    where: RatingWhereUniqueInput;
}

export class RatingUpdateWithWhereUniqueWithoutOwnerInput {
    data: RatingUncheckedUpdateWithoutOwnerInput;
    where: RatingWhereUniqueInput;
}

export class RatingUpdateWithWhereUniqueWithoutUserInput {
    data: RatingUncheckedUpdateWithoutUserInput;
    where: RatingWhereUniqueInput;
}

export class RatingUpdateWithoutOrganizationInput {
    comment?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutRatedInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateOneWithoutRatingsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class RatingUpdateWithoutOwnerInput {
    comment?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    organization?: Nullable<OrganizationUpdateOneWithoutRatingsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateOneWithoutRatingsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class RatingUpdateWithoutUserInput {
    comment?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    organization?: Nullable<OrganizationUpdateOneWithoutRatingsInput>;
    owner?: Nullable<UserUpdateOneRequiredWithoutRatedInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    value?: Nullable<IntFieldUpdateOperationsInput>;
}

export class RatingUpsertWithWhereUniqueWithoutOrganizationInput {
    create: RatingUncheckedCreateWithoutOrganizationInput;
    update: RatingUncheckedUpdateWithoutOrganizationInput;
    where: RatingWhereUniqueInput;
}

export class RatingUpsertWithWhereUniqueWithoutOwnerInput {
    create: RatingUncheckedCreateWithoutOwnerInput;
    update: RatingUncheckedUpdateWithoutOwnerInput;
    where: RatingWhereUniqueInput;
}

export class RatingUpsertWithWhereUniqueWithoutUserInput {
    create: RatingUncheckedCreateWithoutUserInput;
    update: RatingUncheckedUpdateWithoutUserInput;
    where: RatingWhereUniqueInput;
}

export class RatingWhereInput {
    AND?: Nullable<RatingWhereInput[]>;
    NOT?: Nullable<RatingWhereInput[]>;
    OR?: Nullable<RatingWhereInput[]>;
    comment?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    organization?: Nullable<OrganizationWhereInput>;
    organizationId?: Nullable<StringNullableFilter>;
    owner?: Nullable<UserWhereInput>;
    ownerId?: Nullable<StringFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    user?: Nullable<UserWhereInput>;
    userId?: Nullable<StringNullableFilter>;
    value?: Nullable<IntFilter>;
}

export class RatingWhereUniqueInput {
    id?: Nullable<string>;
}

export class RegisterDeviceInput {
    device_id: string;
    fcm_id?: Nullable<string>;
    type?: Nullable<string>;
    userId?: Nullable<string>;
}

export class ReverseGeocodeInput {
    language?: Nullable<Language>;
    latlng?: Nullable<LatLngInput>;
    location_type?: Nullable<ReverseGeocodingLocationType[]>;
    place_id?: Nullable<string>;
    result_type?: Nullable<string[]>;
}

export class RouteQueryInput {
    alternatives?: Nullable<boolean>;
    arrival_time?: Nullable<DateTime>;
    avoid?: Nullable<TravelRestriction[]>;
    departure_time?: Nullable<DateTime>;
    destination: LatLngInput;
    language?: Nullable<Language>;
    mode?: Nullable<TravelMode>;
    optimize?: Nullable<boolean>;
    origin: LatLngInput;
    region?: Nullable<string>;
    traffic_model?: Nullable<TrafficModel>;
    transit_mode?: Nullable<TransitMode[]>;
    transit_routing_preference?: Nullable<TransitRoutingPreference>;
    units?: Nullable<UnitSystem>;
    waypoints?: Nullable<LatLngInput[]>;
}

export class SelcomDisbursementAvgOrderByAggregateInput {
    amount?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
}

export class SelcomDisbursementCountOrderByAggregateInput {
    amount?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    reference?: Nullable<SortOrder>;
    resultCode?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    status?: Nullable<SortOrder>;
    transId?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
    utilitycode?: Nullable<SortOrder>;
    utilityref?: Nullable<SortOrder>;
    validation?: Nullable<SortOrder>;
}

export class SelcomDisbursementCreateInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId: string;
    transaction?: Nullable<TransactionCreateNestedOneWithoutSelcomDisbursementInput>;
    updatedAt?: Nullable<DateTime>;
    userId: number;
    utilitycode: SelcomUtilityCode;
    utilityref: string;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomDisbursementCreateManyInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId: string;
    updatedAt?: Nullable<DateTime>;
    userId: number;
    utilitycode: SelcomUtilityCode;
    utilityref: string;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomDisbursementCreateNestedOneWithoutTransactionInput {
    connect?: Nullable<SelcomDisbursementWhereUniqueInput>;
    connectOrCreate?: Nullable<SelcomDisbursementCreateOrConnectWithoutTransactionInput>;
    create?: Nullable<SelcomDisbursementUncheckedCreateWithoutTransactionInput>;
}

export class SelcomDisbursementCreateOrConnectWithoutTransactionInput {
    create: SelcomDisbursementUncheckedCreateWithoutTransactionInput;
    where: SelcomDisbursementWhereUniqueInput;
}

export class SelcomDisbursementCreateWithoutTransactionInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId: string;
    updatedAt?: Nullable<DateTime>;
    userId: number;
    utilitycode: SelcomUtilityCode;
    utilityref: string;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomDisbursementMaxOrderByAggregateInput {
    amount?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    reference?: Nullable<SortOrder>;
    resultCode?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    status?: Nullable<SortOrder>;
    transId?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
    utilitycode?: Nullable<SortOrder>;
    utilityref?: Nullable<SortOrder>;
    validation?: Nullable<SortOrder>;
}

export class SelcomDisbursementMinOrderByAggregateInput {
    amount?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    reference?: Nullable<SortOrder>;
    resultCode?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    status?: Nullable<SortOrder>;
    transId?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
    utilitycode?: Nullable<SortOrder>;
    utilityref?: Nullable<SortOrder>;
    validation?: Nullable<SortOrder>;
}

export class SelcomDisbursementOrderByInput {
    amount?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    reference?: Nullable<SortOrder>;
    resultCode?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    status?: Nullable<SortOrder>;
    transId?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
    utilitycode?: Nullable<SortOrder>;
    utilityref?: Nullable<SortOrder>;
    validation?: Nullable<SortOrder>;
}

export class SelcomDisbursementOrderByWithAggregationInput {
    _avg?: Nullable<SelcomDisbursementAvgOrderByAggregateInput>;
    _count?: Nullable<SelcomDisbursementCountOrderByAggregateInput>;
    _max?: Nullable<SelcomDisbursementMaxOrderByAggregateInput>;
    _min?: Nullable<SelcomDisbursementMinOrderByAggregateInput>;
    _sum?: Nullable<SelcomDisbursementSumOrderByAggregateInput>;
    amount?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    reference?: Nullable<SortOrder>;
    resultCode?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    status?: Nullable<SortOrder>;
    transId?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
    utilitycode?: Nullable<SortOrder>;
    utilityref?: Nullable<SortOrder>;
    validation?: Nullable<SortOrder>;
}

export class SelcomDisbursementRelationFilter {
    is?: Nullable<SelcomDisbursementWhereInput>;
    isNot?: Nullable<SelcomDisbursementWhereInput>;
}

export class SelcomDisbursementScalarWhereWithAggregatesInput {
    AND?: Nullable<SelcomDisbursementScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<SelcomDisbursementScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<SelcomDisbursementScalarWhereWithAggregatesInput[]>;
    amount?: Nullable<IntWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    reference?: Nullable<StringNullableWithAggregatesFilter>;
    resultCode?: Nullable<StringNullableWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    status?: Nullable<EnumSelcomPaymentStatusWithAggregatesFilter>;
    transId?: Nullable<StringWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
    userId?: Nullable<IntWithAggregatesFilter>;
    utilitycode?: Nullable<EnumSelcomUtilityCodeWithAggregatesFilter>;
    utilityref?: Nullable<StringWithAggregatesFilter>;
    validation?: Nullable<EnumSelcomPaymentStatusWithAggregatesFilter>;
}

export class SelcomDisbursementSumOrderByAggregateInput {
    amount?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
}

export class SelcomDisbursementUncheckedCreateInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId: string;
    transaction?: Nullable<TransactionUncheckedCreateNestedOneWithoutSelcomDisbursementInput>;
    updatedAt?: Nullable<DateTime>;
    userId: number;
    utilitycode: SelcomUtilityCode;
    utilityref: string;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomDisbursementUncheckedCreateWithoutTransactionInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId: string;
    updatedAt?: Nullable<DateTime>;
    userId: number;
    utilitycode: SelcomUtilityCode;
    utilityref: string;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomDisbursementUncheckedUpdateInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    transaction?: Nullable<TransactionUncheckedUpdateOneWithoutSelcomDisbursementInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<IntFieldUpdateOperationsInput>;
    utilitycode?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    utilityref?: Nullable<StringFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomDisbursementUncheckedUpdateManyInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<IntFieldUpdateOperationsInput>;
    utilitycode?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    utilityref?: Nullable<StringFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomDisbursementUncheckedUpdateWithoutTransactionInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<IntFieldUpdateOperationsInput>;
    utilitycode?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    utilityref?: Nullable<StringFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomDisbursementUpdateInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    transaction?: Nullable<TransactionUpdateOneWithoutSelcomDisbursementInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<IntFieldUpdateOperationsInput>;
    utilitycode?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    utilityref?: Nullable<StringFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomDisbursementUpdateManyMutationInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<IntFieldUpdateOperationsInput>;
    utilitycode?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    utilityref?: Nullable<StringFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomDisbursementUpdateOneWithoutTransactionInput {
    connect?: Nullable<SelcomDisbursementWhereUniqueInput>;
    connectOrCreate?: Nullable<SelcomDisbursementCreateOrConnectWithoutTransactionInput>;
    create?: Nullable<SelcomDisbursementUncheckedCreateWithoutTransactionInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<SelcomDisbursementUncheckedUpdateWithoutTransactionInput>;
    upsert?: Nullable<SelcomDisbursementUpsertWithoutTransactionInput>;
}

export class SelcomDisbursementUpdateWithoutTransactionInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<IntFieldUpdateOperationsInput>;
    utilitycode?: Nullable<EnumSelcomUtilityCodeFieldUpdateOperationsInput>;
    utilityref?: Nullable<StringFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomDisbursementUpsertWithoutTransactionInput {
    create: SelcomDisbursementUncheckedCreateWithoutTransactionInput;
    update: SelcomDisbursementUncheckedUpdateWithoutTransactionInput;
}

export class SelcomDisbursementWhereInput {
    AND?: Nullable<SelcomDisbursementWhereInput[]>;
    NOT?: Nullable<SelcomDisbursementWhereInput[]>;
    OR?: Nullable<SelcomDisbursementWhereInput[]>;
    amount?: Nullable<IntFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    reference?: Nullable<StringNullableFilter>;
    resultCode?: Nullable<StringNullableFilter>;
    state?: Nullable<EnumStateFilter>;
    status?: Nullable<EnumSelcomPaymentStatusFilter>;
    transId?: Nullable<StringFilter>;
    transaction?: Nullable<TransactionWhereInput>;
    updatedAt?: Nullable<DateTimeFilter>;
    userId?: Nullable<IntFilter>;
    utilitycode?: Nullable<EnumSelcomUtilityCodeFilter>;
    utilityref?: Nullable<StringFilter>;
    validation?: Nullable<EnumSelcomPaymentStatusFilter>;
}

export class SelcomDisbursementWhereUniqueInput {
    id?: Nullable<string>;
}

export class SelcomPaymentAvgOrderByAggregateInput {
    amount?: Nullable<SortOrder>;
    utilityref?: Nullable<SortOrder>;
}

export class SelcomPaymentCountOrderByAggregateInput {
    amount?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    msisdn?: Nullable<SortOrder>;
    operator?: Nullable<SortOrder>;
    orderId?: Nullable<SortOrder>;
    reference?: Nullable<SortOrder>;
    resultCode?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    status?: Nullable<SortOrder>;
    transId?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    utilityref?: Nullable<SortOrder>;
    validation?: Nullable<SortOrder>;
}

export class SelcomPaymentCreateInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    msisdn: string;
    operator?: Nullable<string>;
    order: OrderCreateNestedOneWithoutSelcom_paymentInput;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId: string;
    transaction?: Nullable<TransactionCreateNestedOneWithoutSelcomPaymentInput>;
    updatedAt?: Nullable<DateTime>;
    utilityref: number;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomPaymentCreateManyInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    msisdn: string;
    operator?: Nullable<string>;
    orderId: string;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId: string;
    updatedAt?: Nullable<DateTime>;
    utilityref: number;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomPaymentCreateNestedOneWithoutOrderInput {
    connect?: Nullable<SelcomPaymentWhereUniqueInput>;
    connectOrCreate?: Nullable<SelcomPaymentCreateOrConnectWithoutOrderInput>;
    create?: Nullable<SelcomPaymentUncheckedCreateWithoutOrderInput>;
}

export class SelcomPaymentCreateNestedOneWithoutTransactionInput {
    connect?: Nullable<SelcomPaymentWhereUniqueInput>;
    connectOrCreate?: Nullable<SelcomPaymentCreateOrConnectWithoutTransactionInput>;
    create?: Nullable<SelcomPaymentUncheckedCreateWithoutTransactionInput>;
}

export class SelcomPaymentCreateOrConnectWithoutOrderInput {
    create: SelcomPaymentUncheckedCreateWithoutOrderInput;
    where: SelcomPaymentWhereUniqueInput;
}

export class SelcomPaymentCreateOrConnectWithoutTransactionInput {
    create: SelcomPaymentUncheckedCreateWithoutTransactionInput;
    where: SelcomPaymentWhereUniqueInput;
}

export class SelcomPaymentCreateWithoutOrderInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    msisdn: string;
    operator?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId: string;
    transaction?: Nullable<TransactionCreateNestedOneWithoutSelcomPaymentInput>;
    updatedAt?: Nullable<DateTime>;
    utilityref: number;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomPaymentCreateWithoutTransactionInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    msisdn: string;
    operator?: Nullable<string>;
    order: OrderCreateNestedOneWithoutSelcom_paymentInput;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId: string;
    updatedAt?: Nullable<DateTime>;
    utilityref: number;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomPaymentMaxOrderByAggregateInput {
    amount?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    msisdn?: Nullable<SortOrder>;
    operator?: Nullable<SortOrder>;
    orderId?: Nullable<SortOrder>;
    reference?: Nullable<SortOrder>;
    resultCode?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    status?: Nullable<SortOrder>;
    transId?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    utilityref?: Nullable<SortOrder>;
    validation?: Nullable<SortOrder>;
}

export class SelcomPaymentMinOrderByAggregateInput {
    amount?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    msisdn?: Nullable<SortOrder>;
    operator?: Nullable<SortOrder>;
    orderId?: Nullable<SortOrder>;
    reference?: Nullable<SortOrder>;
    resultCode?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    status?: Nullable<SortOrder>;
    transId?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    utilityref?: Nullable<SortOrder>;
    validation?: Nullable<SortOrder>;
}

export class SelcomPaymentOrderByInput {
    amount?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    msisdn?: Nullable<SortOrder>;
    operator?: Nullable<SortOrder>;
    orderId?: Nullable<SortOrder>;
    reference?: Nullable<SortOrder>;
    resultCode?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    status?: Nullable<SortOrder>;
    transId?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    utilityref?: Nullable<SortOrder>;
    validation?: Nullable<SortOrder>;
}

export class SelcomPaymentOrderByWithAggregationInput {
    _avg?: Nullable<SelcomPaymentAvgOrderByAggregateInput>;
    _count?: Nullable<SelcomPaymentCountOrderByAggregateInput>;
    _max?: Nullable<SelcomPaymentMaxOrderByAggregateInput>;
    _min?: Nullable<SelcomPaymentMinOrderByAggregateInput>;
    _sum?: Nullable<SelcomPaymentSumOrderByAggregateInput>;
    amount?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    msisdn?: Nullable<SortOrder>;
    operator?: Nullable<SortOrder>;
    orderId?: Nullable<SortOrder>;
    reference?: Nullable<SortOrder>;
    resultCode?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    status?: Nullable<SortOrder>;
    transId?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    utilityref?: Nullable<SortOrder>;
    validation?: Nullable<SortOrder>;
}

export class SelcomPaymentRelationFilter {
    is?: Nullable<SelcomPaymentWhereInput>;
    isNot?: Nullable<SelcomPaymentWhereInput>;
}

export class SelcomPaymentScalarWhereWithAggregatesInput {
    AND?: Nullable<SelcomPaymentScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<SelcomPaymentScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<SelcomPaymentScalarWhereWithAggregatesInput[]>;
    amount?: Nullable<IntWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    msisdn?: Nullable<StringWithAggregatesFilter>;
    operator?: Nullable<StringNullableWithAggregatesFilter>;
    orderId?: Nullable<StringWithAggregatesFilter>;
    reference?: Nullable<StringNullableWithAggregatesFilter>;
    resultCode?: Nullable<StringNullableWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    status?: Nullable<EnumSelcomPaymentStatusWithAggregatesFilter>;
    transId?: Nullable<StringWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
    utilityref?: Nullable<IntWithAggregatesFilter>;
    validation?: Nullable<EnumSelcomPaymentStatusWithAggregatesFilter>;
}

export class SelcomPaymentSumOrderByAggregateInput {
    amount?: Nullable<SortOrder>;
    utilityref?: Nullable<SortOrder>;
}

export class SelcomPaymentUncheckedCreateInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    msisdn: string;
    operator?: Nullable<string>;
    orderId: string;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId: string;
    transaction?: Nullable<TransactionUncheckedCreateNestedOneWithoutSelcomPaymentInput>;
    updatedAt?: Nullable<DateTime>;
    utilityref: number;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomPaymentUncheckedCreateNestedOneWithoutOrderInput {
    connect?: Nullable<SelcomPaymentWhereUniqueInput>;
    connectOrCreate?: Nullable<SelcomPaymentCreateOrConnectWithoutOrderInput>;
    create?: Nullable<SelcomPaymentUncheckedCreateWithoutOrderInput>;
}

export class SelcomPaymentUncheckedCreateWithoutOrderInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    msisdn: string;
    operator?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId: string;
    transaction?: Nullable<TransactionUncheckedCreateNestedOneWithoutSelcomPaymentInput>;
    updatedAt?: Nullable<DateTime>;
    utilityref: number;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomPaymentUncheckedCreateWithoutTransactionInput {
    amount: number;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    msisdn: string;
    operator?: Nullable<string>;
    orderId: string;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId: string;
    updatedAt?: Nullable<DateTime>;
    utilityref: number;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomPaymentUncheckedUpdateInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    msisdn?: Nullable<StringFieldUpdateOperationsInput>;
    operator?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderId?: Nullable<StringFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    transaction?: Nullable<TransactionUncheckedUpdateOneWithoutSelcomPaymentInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    utilityref?: Nullable<IntFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomPaymentUncheckedUpdateManyInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    msisdn?: Nullable<StringFieldUpdateOperationsInput>;
    operator?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderId?: Nullable<StringFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    utilityref?: Nullable<IntFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomPaymentUncheckedUpdateOneWithoutOrderInput {
    connect?: Nullable<SelcomPaymentWhereUniqueInput>;
    connectOrCreate?: Nullable<SelcomPaymentCreateOrConnectWithoutOrderInput>;
    create?: Nullable<SelcomPaymentUncheckedCreateWithoutOrderInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<SelcomPaymentUncheckedUpdateWithoutOrderInput>;
    upsert?: Nullable<SelcomPaymentUpsertWithoutOrderInput>;
}

export class SelcomPaymentUncheckedUpdateWithoutOrderInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    msisdn?: Nullable<StringFieldUpdateOperationsInput>;
    operator?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    transaction?: Nullable<TransactionUncheckedUpdateOneWithoutSelcomPaymentInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    utilityref?: Nullable<IntFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomPaymentUncheckedUpdateWithoutTransactionInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    msisdn?: Nullable<StringFieldUpdateOperationsInput>;
    operator?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orderId?: Nullable<StringFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    utilityref?: Nullable<IntFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomPaymentUpdateInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    msisdn?: Nullable<StringFieldUpdateOperationsInput>;
    operator?: Nullable<NullableStringFieldUpdateOperationsInput>;
    order?: Nullable<OrderUpdateOneRequiredWithoutSelcom_paymentInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    transaction?: Nullable<TransactionUpdateOneWithoutSelcomPaymentInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    utilityref?: Nullable<IntFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomPaymentUpdateManyMutationInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    msisdn?: Nullable<StringFieldUpdateOperationsInput>;
    operator?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    utilityref?: Nullable<IntFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomPaymentUpdateOneWithoutOrderInput {
    connect?: Nullable<SelcomPaymentWhereUniqueInput>;
    connectOrCreate?: Nullable<SelcomPaymentCreateOrConnectWithoutOrderInput>;
    create?: Nullable<SelcomPaymentUncheckedCreateWithoutOrderInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<SelcomPaymentUncheckedUpdateWithoutOrderInput>;
    upsert?: Nullable<SelcomPaymentUpsertWithoutOrderInput>;
}

export class SelcomPaymentUpdateOneWithoutTransactionInput {
    connect?: Nullable<SelcomPaymentWhereUniqueInput>;
    connectOrCreate?: Nullable<SelcomPaymentCreateOrConnectWithoutTransactionInput>;
    create?: Nullable<SelcomPaymentUncheckedCreateWithoutTransactionInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<SelcomPaymentUncheckedUpdateWithoutTransactionInput>;
    upsert?: Nullable<SelcomPaymentUpsertWithoutTransactionInput>;
}

export class SelcomPaymentUpdateWithoutOrderInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    msisdn?: Nullable<StringFieldUpdateOperationsInput>;
    operator?: Nullable<NullableStringFieldUpdateOperationsInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    transaction?: Nullable<TransactionUpdateOneWithoutSelcomPaymentInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    utilityref?: Nullable<IntFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomPaymentUpdateWithoutTransactionInput {
    amount?: Nullable<IntFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    msisdn?: Nullable<StringFieldUpdateOperationsInput>;
    operator?: Nullable<NullableStringFieldUpdateOperationsInput>;
    order?: Nullable<OrderUpdateOneRequiredWithoutSelcom_paymentInput>;
    reference?: Nullable<NullableStringFieldUpdateOperationsInput>;
    resultCode?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    status?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
    transId?: Nullable<StringFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    utilityref?: Nullable<IntFieldUpdateOperationsInput>;
    validation?: Nullable<EnumSelcomPaymentStatusFieldUpdateOperationsInput>;
}

export class SelcomPaymentUpsertWithoutOrderInput {
    create: SelcomPaymentUncheckedCreateWithoutOrderInput;
    update: SelcomPaymentUncheckedUpdateWithoutOrderInput;
}

export class SelcomPaymentUpsertWithoutTransactionInput {
    create: SelcomPaymentUncheckedCreateWithoutTransactionInput;
    update: SelcomPaymentUncheckedUpdateWithoutTransactionInput;
}

export class SelcomPaymentWhereInput {
    AND?: Nullable<SelcomPaymentWhereInput[]>;
    NOT?: Nullable<SelcomPaymentWhereInput[]>;
    OR?: Nullable<SelcomPaymentWhereInput[]>;
    amount?: Nullable<IntFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    msisdn?: Nullable<StringFilter>;
    operator?: Nullable<StringNullableFilter>;
    order?: Nullable<OrderWhereInput>;
    orderId?: Nullable<StringFilter>;
    reference?: Nullable<StringNullableFilter>;
    resultCode?: Nullable<StringNullableFilter>;
    state?: Nullable<EnumStateFilter>;
    status?: Nullable<EnumSelcomPaymentStatusFilter>;
    transId?: Nullable<StringFilter>;
    transaction?: Nullable<TransactionWhereInput>;
    updatedAt?: Nullable<DateTimeFilter>;
    utilityref?: Nullable<IntFilter>;
    validation?: Nullable<EnumSelcomPaymentStatusFilter>;
}

export class SelcomPaymentWhereUniqueInput {
    id?: Nullable<string>;
}

export class ServiceAvgOrderByAggregateInput {
    price?: Nullable<SortOrder>;
}

export class ServiceCategoryCountOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    imageId?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class ServiceCategoryCreateInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    image: AttachmentCreateNestedOneWithoutServiceCategoryInput;
    name: string;
    organizations?: Nullable<OrganizationCreateNestedManyWithoutOffersInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutCategoryInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCategoryCreateManyInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    imageId: string;
    name: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCategoryCreateNestedManyWithoutOrganizationsInput {
    connect?: Nullable<ServiceCategoryWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCategoryCreateOrConnectWithoutOrganizationsInput[]>;
    create?: Nullable<ServiceCategoryCreateWithoutOrganizationsInput[]>;
}

export class ServiceCategoryCreateNestedOneWithoutImageInput {
    connect?: Nullable<ServiceCategoryWhereUniqueInput>;
    connectOrCreate?: Nullable<ServiceCategoryCreateOrConnectWithoutImageInput>;
    create?: Nullable<ServiceCategoryUncheckedCreateWithoutImageInput>;
}

export class ServiceCategoryCreateNestedOneWithoutServicesInput {
    connect?: Nullable<ServiceCategoryWhereUniqueInput>;
    connectOrCreate?: Nullable<ServiceCategoryCreateOrConnectWithoutServicesInput>;
    create?: Nullable<ServiceCategoryUncheckedCreateWithoutServicesInput>;
}

export class ServiceCategoryCreateOrConnectWithoutImageInput {
    create: ServiceCategoryUncheckedCreateWithoutImageInput;
    where: ServiceCategoryWhereUniqueInput;
}

export class ServiceCategoryCreateOrConnectWithoutOrganizationsInput {
    create: ServiceCategoryUncheckedCreateWithoutOrganizationsInput;
    where: ServiceCategoryWhereUniqueInput;
}

export class ServiceCategoryCreateOrConnectWithoutServicesInput {
    create: ServiceCategoryUncheckedCreateWithoutServicesInput;
    where: ServiceCategoryWhereUniqueInput;
}

export class ServiceCategoryCreateWithoutImageInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    name: string;
    organizations?: Nullable<OrganizationCreateNestedManyWithoutOffersInput>;
    services?: Nullable<ServiceCreateNestedManyWithoutCategoryInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCategoryCreateWithoutOrganizationsInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    image: AttachmentCreateNestedOneWithoutServiceCategoryInput;
    name: string;
    services?: Nullable<ServiceCreateNestedManyWithoutCategoryInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCategoryCreateWithoutServicesInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    image: AttachmentCreateNestedOneWithoutServiceCategoryInput;
    name: string;
    organizations?: Nullable<OrganizationCreateNestedManyWithoutOffersInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCategoryListRelationFilter {
    every?: Nullable<ServiceCategoryWhereInput>;
    none?: Nullable<ServiceCategoryWhereInput>;
    some?: Nullable<ServiceCategoryWhereInput>;
}

export class ServiceCategoryMaxOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    imageId?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class ServiceCategoryMinOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    imageId?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class ServiceCategoryOrderByInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    imageId?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class ServiceCategoryOrderByWithAggregationInput {
    _count?: Nullable<ServiceCategoryCountOrderByAggregateInput>;
    _max?: Nullable<ServiceCategoryMaxOrderByAggregateInput>;
    _min?: Nullable<ServiceCategoryMinOrderByAggregateInput>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    imageId?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class ServiceCategoryRelationFilter {
    is?: Nullable<ServiceCategoryWhereInput>;
    isNot?: Nullable<ServiceCategoryWhereInput>;
}

export class ServiceCategoryScalarWhereInput {
    AND?: Nullable<ServiceCategoryScalarWhereInput[]>;
    NOT?: Nullable<ServiceCategoryScalarWhereInput[]>;
    OR?: Nullable<ServiceCategoryScalarWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    imageId?: Nullable<StringFilter>;
    name?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class ServiceCategoryScalarWhereWithAggregatesInput {
    AND?: Nullable<ServiceCategoryScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<ServiceCategoryScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<ServiceCategoryScalarWhereWithAggregatesInput[]>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    imageId?: Nullable<StringWithAggregatesFilter>;
    name?: Nullable<StringWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class ServiceCategoryUncheckedCreateInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    imageId: string;
    name: string;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutCategoryInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCategoryUncheckedCreateNestedOneWithoutImageInput {
    connect?: Nullable<ServiceCategoryWhereUniqueInput>;
    connectOrCreate?: Nullable<ServiceCategoryCreateOrConnectWithoutImageInput>;
    create?: Nullable<ServiceCategoryUncheckedCreateWithoutImageInput>;
}

export class ServiceCategoryUncheckedCreateWithoutImageInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    name: string;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutCategoryInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCategoryUncheckedCreateWithoutOrganizationsInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    imageId: string;
    name: string;
    services?: Nullable<ServiceUncheckedCreateNestedManyWithoutCategoryInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCategoryUncheckedCreateWithoutServicesInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    imageId: string;
    name: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCategoryUncheckedUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutCategoryInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceCategoryUncheckedUpdateManyInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceCategoryUncheckedUpdateManyWithoutOffersInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceCategoryUncheckedUpdateOneWithoutImageInput {
    connect?: Nullable<ServiceCategoryWhereUniqueInput>;
    connectOrCreate?: Nullable<ServiceCategoryCreateOrConnectWithoutImageInput>;
    create?: Nullable<ServiceCategoryUncheckedCreateWithoutImageInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<ServiceCategoryUncheckedUpdateWithoutImageInput>;
    upsert?: Nullable<ServiceCategoryUpsertWithoutImageInput>;
}

export class ServiceCategoryUncheckedUpdateWithoutImageInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutCategoryInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceCategoryUncheckedUpdateWithoutOrganizationsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUncheckedUpdateManyWithoutCategoryInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceCategoryUncheckedUpdateWithoutServicesInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceCategoryUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    image?: Nullable<AttachmentUpdateOneRequiredWithoutServiceCategoryInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUpdateManyWithoutOffersInput>;
    services?: Nullable<ServiceUpdateManyWithoutCategoryInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceCategoryUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceCategoryUpdateManyWithWhereWithoutOrganizationsInput {
    data: ServiceCategoryUncheckedUpdateManyWithoutOffersInput;
    where: ServiceCategoryScalarWhereInput;
}

export class ServiceCategoryUpdateManyWithoutOrganizationsInput {
    connect?: Nullable<ServiceCategoryWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCategoryCreateOrConnectWithoutOrganizationsInput[]>;
    create?: Nullable<ServiceCategoryCreateWithoutOrganizationsInput[]>;
    delete?: Nullable<ServiceCategoryWhereUniqueInput[]>;
    deleteMany?: Nullable<ServiceCategoryScalarWhereInput[]>;
    disconnect?: Nullable<ServiceCategoryWhereUniqueInput[]>;
    set?: Nullable<ServiceCategoryWhereUniqueInput[]>;
    update?: Nullable<ServiceCategoryUpdateWithWhereUniqueWithoutOrganizationsInput[]>;
    updateMany?: Nullable<ServiceCategoryUpdateManyWithWhereWithoutOrganizationsInput[]>;
    upsert?: Nullable<ServiceCategoryUpsertWithWhereUniqueWithoutOrganizationsInput[]>;
}

export class ServiceCategoryUpdateOneRequiredWithoutServicesInput {
    connect?: Nullable<ServiceCategoryWhereUniqueInput>;
    connectOrCreate?: Nullable<ServiceCategoryCreateOrConnectWithoutServicesInput>;
    create?: Nullable<ServiceCategoryUncheckedCreateWithoutServicesInput>;
    update?: Nullable<ServiceCategoryUncheckedUpdateWithoutServicesInput>;
    upsert?: Nullable<ServiceCategoryUpsertWithoutServicesInput>;
}

export class ServiceCategoryUpdateOneWithoutImageInput {
    connect?: Nullable<ServiceCategoryWhereUniqueInput>;
    connectOrCreate?: Nullable<ServiceCategoryCreateOrConnectWithoutImageInput>;
    create?: Nullable<ServiceCategoryUncheckedCreateWithoutImageInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<ServiceCategoryUncheckedUpdateWithoutImageInput>;
    upsert?: Nullable<ServiceCategoryUpsertWithoutImageInput>;
}

export class ServiceCategoryUpdateWithWhereUniqueWithoutOrganizationsInput {
    data: ServiceCategoryUncheckedUpdateWithoutOrganizationsInput;
    where: ServiceCategoryWhereUniqueInput;
}

export class ServiceCategoryUpdateWithoutImageInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUpdateManyWithoutOffersInput>;
    services?: Nullable<ServiceUpdateManyWithoutCategoryInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceCategoryUpdateWithoutOrganizationsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    image?: Nullable<AttachmentUpdateOneRequiredWithoutServiceCategoryInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    services?: Nullable<ServiceUpdateManyWithoutCategoryInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceCategoryUpdateWithoutServicesInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    image?: Nullable<AttachmentUpdateOneRequiredWithoutServiceCategoryInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUpdateManyWithoutOffersInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceCategoryUpsertWithWhereUniqueWithoutOrganizationsInput {
    create: ServiceCategoryUncheckedCreateWithoutOrganizationsInput;
    update: ServiceCategoryUncheckedUpdateWithoutOrganizationsInput;
    where: ServiceCategoryWhereUniqueInput;
}

export class ServiceCategoryUpsertWithoutImageInput {
    create: ServiceCategoryUncheckedCreateWithoutImageInput;
    update: ServiceCategoryUncheckedUpdateWithoutImageInput;
}

export class ServiceCategoryUpsertWithoutServicesInput {
    create: ServiceCategoryUncheckedCreateWithoutServicesInput;
    update: ServiceCategoryUncheckedUpdateWithoutServicesInput;
}

export class ServiceCategoryWhereInput {
    AND?: Nullable<ServiceCategoryWhereInput[]>;
    NOT?: Nullable<ServiceCategoryWhereInput[]>;
    OR?: Nullable<ServiceCategoryWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    image?: Nullable<AttachmentWhereInput>;
    imageId?: Nullable<StringFilter>;
    name?: Nullable<StringFilter>;
    organizations?: Nullable<OrganizationListRelationFilter>;
    services?: Nullable<ServiceListRelationFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class ServiceCategoryWhereUniqueInput {
    id?: Nullable<string>;
    imageId?: Nullable<string>;
}

export class ServiceCountOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    imageId?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    price?: Nullable<SortOrder>;
    serviceCategoryId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class ServiceCreateInput {
    category: ServiceCategoryCreateNestedOneWithoutServicesInput;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    image: AttachmentCreateNestedOneWithoutServicesInput;
    name: string;
    orders?: Nullable<OrderCreateNestedManyWithoutServiceInput>;
    organization: OrganizationCreateNestedOneWithoutServicesInput;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreateManyCategoryInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId: string;
    name: string;
    organizationId: string;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreateManyCategoryInputEnvelope {
    data: ServiceCreateManyCategoryInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class ServiceCreateManyImageInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    organizationId: string;
    price: number;
    serviceCategoryId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreateManyImageInputEnvelope {
    data: ServiceCreateManyImageInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class ServiceCreateManyInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId: string;
    name: string;
    organizationId: string;
    price: number;
    serviceCategoryId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreateManyOrganizationInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId: string;
    name: string;
    price: number;
    serviceCategoryId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreateManyOrganizationInputEnvelope {
    data: ServiceCreateManyOrganizationInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class ServiceCreateNestedManyWithoutCategoryInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutCategoryInput[]>;
    create?: Nullable<ServiceCreateWithoutCategoryInput[]>;
    createMany?: Nullable<ServiceCreateManyCategoryInputEnvelope>;
}

export class ServiceCreateNestedManyWithoutImageInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutImageInput[]>;
    create?: Nullable<ServiceCreateWithoutImageInput[]>;
    createMany?: Nullable<ServiceCreateManyImageInputEnvelope>;
}

export class ServiceCreateNestedManyWithoutOrganizationInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutOrganizationInput[]>;
    create?: Nullable<ServiceCreateWithoutOrganizationInput[]>;
    createMany?: Nullable<ServiceCreateManyOrganizationInputEnvelope>;
}

export class ServiceCreateNestedOneWithoutOrdersInput {
    connect?: Nullable<ServiceWhereUniqueInput>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutOrdersInput>;
    create?: Nullable<ServiceUncheckedCreateWithoutOrdersInput>;
}

export class ServiceCreateOrConnectWithoutCategoryInput {
    create: ServiceUncheckedCreateWithoutCategoryInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceCreateOrConnectWithoutImageInput {
    create: ServiceUncheckedCreateWithoutImageInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceCreateOrConnectWithoutOrdersInput {
    create: ServiceUncheckedCreateWithoutOrdersInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceCreateOrConnectWithoutOrganizationInput {
    create: ServiceUncheckedCreateWithoutOrganizationInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceCreateWithoutCategoryInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    image: AttachmentCreateNestedOneWithoutServicesInput;
    name: string;
    orders?: Nullable<OrderCreateNestedManyWithoutServiceInput>;
    organization: OrganizationCreateNestedOneWithoutServicesInput;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreateWithoutImageInput {
    category: ServiceCategoryCreateNestedOneWithoutServicesInput;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    orders?: Nullable<OrderCreateNestedManyWithoutServiceInput>;
    organization: OrganizationCreateNestedOneWithoutServicesInput;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreateWithoutOrdersInput {
    category: ServiceCategoryCreateNestedOneWithoutServicesInput;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    image: AttachmentCreateNestedOneWithoutServicesInput;
    name: string;
    organization: OrganizationCreateNestedOneWithoutServicesInput;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCreateWithoutOrganizationInput {
    category: ServiceCategoryCreateNestedOneWithoutServicesInput;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    image: AttachmentCreateNestedOneWithoutServicesInput;
    name: string;
    orders?: Nullable<OrderCreateNestedManyWithoutServiceInput>;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceListRelationFilter {
    every?: Nullable<ServiceWhereInput>;
    none?: Nullable<ServiceWhereInput>;
    some?: Nullable<ServiceWhereInput>;
}

export class ServiceMaxOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    imageId?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    price?: Nullable<SortOrder>;
    serviceCategoryId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class ServiceMinOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    imageId?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    price?: Nullable<SortOrder>;
    serviceCategoryId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class ServiceOrderByInput {
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    imageId?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    price?: Nullable<SortOrder>;
    serviceCategoryId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class ServiceOrderByWithAggregationInput {
    _avg?: Nullable<ServiceAvgOrderByAggregateInput>;
    _count?: Nullable<ServiceCountOrderByAggregateInput>;
    _max?: Nullable<ServiceMaxOrderByAggregateInput>;
    _min?: Nullable<ServiceMinOrderByAggregateInput>;
    _sum?: Nullable<ServiceSumOrderByAggregateInput>;
    createdAt?: Nullable<SortOrder>;
    description?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    imageId?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    price?: Nullable<SortOrder>;
    serviceCategoryId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class ServiceRelationFilter {
    is?: Nullable<ServiceWhereInput>;
    isNot?: Nullable<ServiceWhereInput>;
}

export class ServiceScalarWhereInput {
    AND?: Nullable<ServiceScalarWhereInput[]>;
    NOT?: Nullable<ServiceScalarWhereInput[]>;
    OR?: Nullable<ServiceScalarWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    description?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    imageId?: Nullable<StringFilter>;
    name?: Nullable<StringFilter>;
    organizationId?: Nullable<StringFilter>;
    price?: Nullable<FloatFilter>;
    serviceCategoryId?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class ServiceScalarWhereWithAggregatesInput {
    AND?: Nullable<ServiceScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<ServiceScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<ServiceScalarWhereWithAggregatesInput[]>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    description?: Nullable<StringNullableWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    imageId?: Nullable<StringWithAggregatesFilter>;
    name?: Nullable<StringWithAggregatesFilter>;
    organizationId?: Nullable<StringWithAggregatesFilter>;
    price?: Nullable<FloatWithAggregatesFilter>;
    serviceCategoryId?: Nullable<StringWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class ServiceSumOrderByAggregateInput {
    price?: Nullable<SortOrder>;
}

export class ServiceUncheckedCreateInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId: string;
    name: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutServiceInput>;
    organizationId: string;
    price: number;
    serviceCategoryId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceUncheckedCreateNestedManyWithoutCategoryInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutCategoryInput[]>;
    create?: Nullable<ServiceCreateWithoutCategoryInput[]>;
    createMany?: Nullable<ServiceCreateManyCategoryInputEnvelope>;
}

export class ServiceUncheckedCreateNestedManyWithoutImageInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutImageInput[]>;
    create?: Nullable<ServiceCreateWithoutImageInput[]>;
    createMany?: Nullable<ServiceCreateManyImageInputEnvelope>;
}

export class ServiceUncheckedCreateNestedManyWithoutOrganizationInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutOrganizationInput[]>;
    create?: Nullable<ServiceCreateWithoutOrganizationInput[]>;
    createMany?: Nullable<ServiceCreateManyOrganizationInputEnvelope>;
}

export class ServiceUncheckedCreateWithoutCategoryInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId: string;
    name: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutServiceInput>;
    organizationId: string;
    price: number;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceUncheckedCreateWithoutImageInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutServiceInput>;
    organizationId: string;
    price: number;
    serviceCategoryId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceUncheckedCreateWithoutOrdersInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId: string;
    name: string;
    organizationId: string;
    price: number;
    serviceCategoryId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceUncheckedCreateWithoutOrganizationInput {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId: string;
    name: string;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutServiceInput>;
    price: number;
    serviceCategoryId: string;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceUncheckedUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutServiceInput>;
    organizationId?: Nullable<StringFieldUpdateOperationsInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    serviceCategoryId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUncheckedUpdateManyInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    organizationId?: Nullable<StringFieldUpdateOperationsInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    serviceCategoryId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUncheckedUpdateManyWithoutCategoryInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutCategoryInput[]>;
    create?: Nullable<ServiceCreateWithoutCategoryInput[]>;
    createMany?: Nullable<ServiceCreateManyCategoryInputEnvelope>;
    delete?: Nullable<ServiceWhereUniqueInput[]>;
    deleteMany?: Nullable<ServiceScalarWhereInput[]>;
    disconnect?: Nullable<ServiceWhereUniqueInput[]>;
    set?: Nullable<ServiceWhereUniqueInput[]>;
    update?: Nullable<ServiceUpdateWithWhereUniqueWithoutCategoryInput[]>;
    updateMany?: Nullable<ServiceUpdateManyWithWhereWithoutCategoryInput[]>;
    upsert?: Nullable<ServiceUpsertWithWhereUniqueWithoutCategoryInput[]>;
}

export class ServiceUncheckedUpdateManyWithoutImageInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutImageInput[]>;
    create?: Nullable<ServiceCreateWithoutImageInput[]>;
    createMany?: Nullable<ServiceCreateManyImageInputEnvelope>;
    delete?: Nullable<ServiceWhereUniqueInput[]>;
    deleteMany?: Nullable<ServiceScalarWhereInput[]>;
    disconnect?: Nullable<ServiceWhereUniqueInput[]>;
    set?: Nullable<ServiceWhereUniqueInput[]>;
    update?: Nullable<ServiceUpdateWithWhereUniqueWithoutImageInput[]>;
    updateMany?: Nullable<ServiceUpdateManyWithWhereWithoutImageInput[]>;
    upsert?: Nullable<ServiceUpsertWithWhereUniqueWithoutImageInput[]>;
}

export class ServiceUncheckedUpdateManyWithoutOrganizationInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutOrganizationInput[]>;
    create?: Nullable<ServiceCreateWithoutOrganizationInput[]>;
    createMany?: Nullable<ServiceCreateManyOrganizationInputEnvelope>;
    delete?: Nullable<ServiceWhereUniqueInput[]>;
    deleteMany?: Nullable<ServiceScalarWhereInput[]>;
    disconnect?: Nullable<ServiceWhereUniqueInput[]>;
    set?: Nullable<ServiceWhereUniqueInput[]>;
    update?: Nullable<ServiceUpdateWithWhereUniqueWithoutOrganizationInput[]>;
    updateMany?: Nullable<ServiceUpdateManyWithWhereWithoutOrganizationInput[]>;
    upsert?: Nullable<ServiceUpsertWithWhereUniqueWithoutOrganizationInput[]>;
}

export class ServiceUncheckedUpdateManyWithoutServicesInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    organizationId?: Nullable<StringFieldUpdateOperationsInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    serviceCategoryId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUncheckedUpdateWithoutCategoryInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutServiceInput>;
    organizationId?: Nullable<StringFieldUpdateOperationsInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUncheckedUpdateWithoutImageInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutServiceInput>;
    organizationId?: Nullable<StringFieldUpdateOperationsInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    serviceCategoryId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUncheckedUpdateWithoutOrdersInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    organizationId?: Nullable<StringFieldUpdateOperationsInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    serviceCategoryId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUncheckedUpdateWithoutOrganizationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    imageId?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutServiceInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    serviceCategoryId?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUpdateInput {
    category?: Nullable<ServiceCategoryUpdateOneRequiredWithoutServicesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    image?: Nullable<AttachmentUpdateOneRequiredWithoutServicesInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutServiceInput>;
    organization?: Nullable<OrganizationUpdateOneRequiredWithoutServicesInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUpdateManyWithWhereWithoutCategoryInput {
    data: ServiceUncheckedUpdateManyWithoutServicesInput;
    where: ServiceScalarWhereInput;
}

export class ServiceUpdateManyWithWhereWithoutImageInput {
    data: ServiceUncheckedUpdateManyWithoutServicesInput;
    where: ServiceScalarWhereInput;
}

export class ServiceUpdateManyWithWhereWithoutOrganizationInput {
    data: ServiceUncheckedUpdateManyWithoutServicesInput;
    where: ServiceScalarWhereInput;
}

export class ServiceUpdateManyWithoutCategoryInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutCategoryInput[]>;
    create?: Nullable<ServiceCreateWithoutCategoryInput[]>;
    createMany?: Nullable<ServiceCreateManyCategoryInputEnvelope>;
    delete?: Nullable<ServiceWhereUniqueInput[]>;
    deleteMany?: Nullable<ServiceScalarWhereInput[]>;
    disconnect?: Nullable<ServiceWhereUniqueInput[]>;
    set?: Nullable<ServiceWhereUniqueInput[]>;
    update?: Nullable<ServiceUpdateWithWhereUniqueWithoutCategoryInput[]>;
    updateMany?: Nullable<ServiceUpdateManyWithWhereWithoutCategoryInput[]>;
    upsert?: Nullable<ServiceUpsertWithWhereUniqueWithoutCategoryInput[]>;
}

export class ServiceUpdateManyWithoutImageInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutImageInput[]>;
    create?: Nullable<ServiceCreateWithoutImageInput[]>;
    createMany?: Nullable<ServiceCreateManyImageInputEnvelope>;
    delete?: Nullable<ServiceWhereUniqueInput[]>;
    deleteMany?: Nullable<ServiceScalarWhereInput[]>;
    disconnect?: Nullable<ServiceWhereUniqueInput[]>;
    set?: Nullable<ServiceWhereUniqueInput[]>;
    update?: Nullable<ServiceUpdateWithWhereUniqueWithoutImageInput[]>;
    updateMany?: Nullable<ServiceUpdateManyWithWhereWithoutImageInput[]>;
    upsert?: Nullable<ServiceUpsertWithWhereUniqueWithoutImageInput[]>;
}

export class ServiceUpdateManyWithoutOrganizationInput {
    connect?: Nullable<ServiceWhereUniqueInput[]>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutOrganizationInput[]>;
    create?: Nullable<ServiceCreateWithoutOrganizationInput[]>;
    createMany?: Nullable<ServiceCreateManyOrganizationInputEnvelope>;
    delete?: Nullable<ServiceWhereUniqueInput[]>;
    deleteMany?: Nullable<ServiceScalarWhereInput[]>;
    disconnect?: Nullable<ServiceWhereUniqueInput[]>;
    set?: Nullable<ServiceWhereUniqueInput[]>;
    update?: Nullable<ServiceUpdateWithWhereUniqueWithoutOrganizationInput[]>;
    updateMany?: Nullable<ServiceUpdateManyWithWhereWithoutOrganizationInput[]>;
    upsert?: Nullable<ServiceUpsertWithWhereUniqueWithoutOrganizationInput[]>;
}

export class ServiceUpdateOneRequiredWithoutOrdersInput {
    connect?: Nullable<ServiceWhereUniqueInput>;
    connectOrCreate?: Nullable<ServiceCreateOrConnectWithoutOrdersInput>;
    create?: Nullable<ServiceUncheckedCreateWithoutOrdersInput>;
    update?: Nullable<ServiceUncheckedUpdateWithoutOrdersInput>;
    upsert?: Nullable<ServiceUpsertWithoutOrdersInput>;
}

export class ServiceUpdateWithWhereUniqueWithoutCategoryInput {
    data: ServiceUncheckedUpdateWithoutCategoryInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceUpdateWithWhereUniqueWithoutImageInput {
    data: ServiceUncheckedUpdateWithoutImageInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceUpdateWithWhereUniqueWithoutOrganizationInput {
    data: ServiceUncheckedUpdateWithoutOrganizationInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceUpdateWithoutCategoryInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    image?: Nullable<AttachmentUpdateOneRequiredWithoutServicesInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutServiceInput>;
    organization?: Nullable<OrganizationUpdateOneRequiredWithoutServicesInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUpdateWithoutImageInput {
    category?: Nullable<ServiceCategoryUpdateOneRequiredWithoutServicesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutServiceInput>;
    organization?: Nullable<OrganizationUpdateOneRequiredWithoutServicesInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUpdateWithoutOrdersInput {
    category?: Nullable<ServiceCategoryUpdateOneRequiredWithoutServicesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    image?: Nullable<AttachmentUpdateOneRequiredWithoutServicesInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    organization?: Nullable<OrganizationUpdateOneRequiredWithoutServicesInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUpdateWithoutOrganizationInput {
    category?: Nullable<ServiceCategoryUpdateOneRequiredWithoutServicesInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    description?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    image?: Nullable<AttachmentUpdateOneRequiredWithoutServicesInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUpdateManyWithoutServiceInput>;
    price?: Nullable<FloatFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class ServiceUpsertWithWhereUniqueWithoutCategoryInput {
    create: ServiceUncheckedCreateWithoutCategoryInput;
    update: ServiceUncheckedUpdateWithoutCategoryInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceUpsertWithWhereUniqueWithoutImageInput {
    create: ServiceUncheckedCreateWithoutImageInput;
    update: ServiceUncheckedUpdateWithoutImageInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceUpsertWithWhereUniqueWithoutOrganizationInput {
    create: ServiceUncheckedCreateWithoutOrganizationInput;
    update: ServiceUncheckedUpdateWithoutOrganizationInput;
    where: ServiceWhereUniqueInput;
}

export class ServiceUpsertWithoutOrdersInput {
    create: ServiceUncheckedCreateWithoutOrdersInput;
    update: ServiceUncheckedUpdateWithoutOrdersInput;
}

export class ServiceWhereInput {
    AND?: Nullable<ServiceWhereInput[]>;
    NOT?: Nullable<ServiceWhereInput[]>;
    OR?: Nullable<ServiceWhereInput[]>;
    category?: Nullable<ServiceCategoryWhereInput>;
    createdAt?: Nullable<DateTimeFilter>;
    description?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    image?: Nullable<AttachmentWhereInput>;
    imageId?: Nullable<StringFilter>;
    name?: Nullable<StringFilter>;
    orders?: Nullable<OrderListRelationFilter>;
    organization?: Nullable<OrganizationWhereInput>;
    organizationId?: Nullable<StringFilter>;
    price?: Nullable<FloatFilter>;
    serviceCategoryId?: Nullable<StringFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class ServiceWhereUniqueInput {
    id?: Nullable<string>;
}

export class SignupInput {
    avator?: Nullable<Upload>;
    dateOfBirth: DateTime;
    displayName: string;
    email: string;
    gender: Gender;
    password: string;
    phoneNumber: string;
}

export class StringFieldUpdateOperationsInput {
    set?: Nullable<string>;
}

export class StringFilter {
    contains?: Nullable<string>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    mode?: Nullable<QueryMode>;
    not?: Nullable<NestedStringFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class StringNullableFilter {
    contains?: Nullable<string>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    mode?: Nullable<QueryMode>;
    not?: Nullable<NestedStringNullableFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class StringNullableWithAggregatesFilter {
    _count?: Nullable<NestedIntNullableFilter>;
    _max?: Nullable<NestedStringNullableFilter>;
    _min?: Nullable<NestedStringNullableFilter>;
    contains?: Nullable<string>;
    count?: Nullable<NestedIntNullableFilter>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    max?: Nullable<NestedStringNullableFilter>;
    min?: Nullable<NestedStringNullableFilter>;
    mode?: Nullable<QueryMode>;
    not?: Nullable<NestedStringNullableWithAggregatesFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class StringWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedStringFilter>;
    _min?: Nullable<NestedStringFilter>;
    contains?: Nullable<string>;
    count?: Nullable<NestedIntFilter>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    max?: Nullable<NestedStringFilter>;
    min?: Nullable<NestedStringFilter>;
    mode?: Nullable<QueryMode>;
    not?: Nullable<NestedStringWithAggregatesFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class TransactionCountOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    mpesaPaymentId?: Nullable<SortOrder>;
    paymentMethode?: Nullable<SortOrder>;
    selcomDisbursementId?: Nullable<SortOrder>;
    selcomPaymentId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    type?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
}

export class TransactionCreateInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    initiator: UserCreateNestedOneWithoutTransactionsInput;
    mpesaPayment?: Nullable<MpesaPaymentCreateNestedOneWithoutTransactionInput>;
    paymentMethode: string;
    selcomDisbursement?: Nullable<SelcomDisbursementCreateNestedOneWithoutTransactionInput>;
    selcomPayment?: Nullable<SelcomPaymentCreateNestedOneWithoutTransactionInput>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionCreateManyInitiatorInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    paymentMethode: string;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionCreateManyInitiatorInputEnvelope {
    data: TransactionCreateManyInitiatorInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class TransactionCreateManyInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    paymentMethode: string;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
    userId: string;
}

export class TransactionCreateNestedManyWithoutInitiatorInput {
    connect?: Nullable<TransactionWhereUniqueInput[]>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutInitiatorInput[]>;
    create?: Nullable<TransactionCreateWithoutInitiatorInput[]>;
    createMany?: Nullable<TransactionCreateManyInitiatorInputEnvelope>;
}

export class TransactionCreateNestedOneWithoutMpesaPaymentInput {
    connect?: Nullable<TransactionWhereUniqueInput>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutMpesaPaymentInput>;
    create?: Nullable<TransactionUncheckedCreateWithoutMpesaPaymentInput>;
}

export class TransactionCreateNestedOneWithoutSelcomDisbursementInput {
    connect?: Nullable<TransactionWhereUniqueInput>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutSelcomDisbursementInput>;
    create?: Nullable<TransactionUncheckedCreateWithoutSelcomDisbursementInput>;
}

export class TransactionCreateNestedOneWithoutSelcomPaymentInput {
    connect?: Nullable<TransactionWhereUniqueInput>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutSelcomPaymentInput>;
    create?: Nullable<TransactionUncheckedCreateWithoutSelcomPaymentInput>;
}

export class TransactionCreateOrConnectWithoutInitiatorInput {
    create: TransactionUncheckedCreateWithoutInitiatorInput;
    where: TransactionWhereUniqueInput;
}

export class TransactionCreateOrConnectWithoutMpesaPaymentInput {
    create: TransactionUncheckedCreateWithoutMpesaPaymentInput;
    where: TransactionWhereUniqueInput;
}

export class TransactionCreateOrConnectWithoutSelcomDisbursementInput {
    create: TransactionUncheckedCreateWithoutSelcomDisbursementInput;
    where: TransactionWhereUniqueInput;
}

export class TransactionCreateOrConnectWithoutSelcomPaymentInput {
    create: TransactionUncheckedCreateWithoutSelcomPaymentInput;
    where: TransactionWhereUniqueInput;
}

export class TransactionCreateWithoutInitiatorInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPayment?: Nullable<MpesaPaymentCreateNestedOneWithoutTransactionInput>;
    paymentMethode: string;
    selcomDisbursement?: Nullable<SelcomDisbursementCreateNestedOneWithoutTransactionInput>;
    selcomPayment?: Nullable<SelcomPaymentCreateNestedOneWithoutTransactionInput>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionCreateWithoutMpesaPaymentInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    initiator: UserCreateNestedOneWithoutTransactionsInput;
    paymentMethode: string;
    selcomDisbursement?: Nullable<SelcomDisbursementCreateNestedOneWithoutTransactionInput>;
    selcomPayment?: Nullable<SelcomPaymentCreateNestedOneWithoutTransactionInput>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionCreateWithoutSelcomDisbursementInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    initiator: UserCreateNestedOneWithoutTransactionsInput;
    mpesaPayment?: Nullable<MpesaPaymentCreateNestedOneWithoutTransactionInput>;
    paymentMethode: string;
    selcomPayment?: Nullable<SelcomPaymentCreateNestedOneWithoutTransactionInput>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionCreateWithoutSelcomPaymentInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    initiator: UserCreateNestedOneWithoutTransactionsInput;
    mpesaPayment?: Nullable<MpesaPaymentCreateNestedOneWithoutTransactionInput>;
    paymentMethode: string;
    selcomDisbursement?: Nullable<SelcomDisbursementCreateNestedOneWithoutTransactionInput>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionListRelationFilter {
    every?: Nullable<TransactionWhereInput>;
    none?: Nullable<TransactionWhereInput>;
    some?: Nullable<TransactionWhereInput>;
}

export class TransactionMaxOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    mpesaPaymentId?: Nullable<SortOrder>;
    paymentMethode?: Nullable<SortOrder>;
    selcomDisbursementId?: Nullable<SortOrder>;
    selcomPaymentId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    type?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
}

export class TransactionMinOrderByAggregateInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    mpesaPaymentId?: Nullable<SortOrder>;
    paymentMethode?: Nullable<SortOrder>;
    selcomDisbursementId?: Nullable<SortOrder>;
    selcomPaymentId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    type?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
}

export class TransactionOrderByInput {
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    mpesaPaymentId?: Nullable<SortOrder>;
    paymentMethode?: Nullable<SortOrder>;
    selcomDisbursementId?: Nullable<SortOrder>;
    selcomPaymentId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    type?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
}

export class TransactionOrderByWithAggregationInput {
    _count?: Nullable<TransactionCountOrderByAggregateInput>;
    _max?: Nullable<TransactionMaxOrderByAggregateInput>;
    _min?: Nullable<TransactionMinOrderByAggregateInput>;
    createdAt?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    mpesaPaymentId?: Nullable<SortOrder>;
    paymentMethode?: Nullable<SortOrder>;
    selcomDisbursementId?: Nullable<SortOrder>;
    selcomPaymentId?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    type?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
}

export class TransactionRelationFilter {
    is?: Nullable<TransactionWhereInput>;
    isNot?: Nullable<TransactionWhereInput>;
}

export class TransactionScalarWhereInput {
    AND?: Nullable<TransactionScalarWhereInput[]>;
    NOT?: Nullable<TransactionScalarWhereInput[]>;
    OR?: Nullable<TransactionScalarWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    mpesaPaymentId?: Nullable<StringNullableFilter>;
    paymentMethode?: Nullable<StringFilter>;
    selcomDisbursementId?: Nullable<StringNullableFilter>;
    selcomPaymentId?: Nullable<StringNullableFilter>;
    state?: Nullable<EnumStateFilter>;
    type?: Nullable<EnumTransactionTypeFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    userId?: Nullable<StringFilter>;
}

export class TransactionScalarWhereWithAggregatesInput {
    AND?: Nullable<TransactionScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<TransactionScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<TransactionScalarWhereWithAggregatesInput[]>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    mpesaPaymentId?: Nullable<StringNullableWithAggregatesFilter>;
    paymentMethode?: Nullable<StringWithAggregatesFilter>;
    selcomDisbursementId?: Nullable<StringNullableWithAggregatesFilter>;
    selcomPaymentId?: Nullable<StringNullableWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    type?: Nullable<EnumTransactionTypeWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
    userId?: Nullable<StringWithAggregatesFilter>;
}

export class TransactionUncheckedCreateInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    paymentMethode: string;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
    userId: string;
}

export class TransactionUncheckedCreateNestedManyWithoutInitiatorInput {
    connect?: Nullable<TransactionWhereUniqueInput[]>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutInitiatorInput[]>;
    create?: Nullable<TransactionCreateWithoutInitiatorInput[]>;
    createMany?: Nullable<TransactionCreateManyInitiatorInputEnvelope>;
}

export class TransactionUncheckedCreateNestedOneWithoutMpesaPaymentInput {
    connect?: Nullable<TransactionWhereUniqueInput>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutMpesaPaymentInput>;
    create?: Nullable<TransactionUncheckedCreateWithoutMpesaPaymentInput>;
}

export class TransactionUncheckedCreateNestedOneWithoutSelcomDisbursementInput {
    connect?: Nullable<TransactionWhereUniqueInput>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutSelcomDisbursementInput>;
    create?: Nullable<TransactionUncheckedCreateWithoutSelcomDisbursementInput>;
}

export class TransactionUncheckedCreateNestedOneWithoutSelcomPaymentInput {
    connect?: Nullable<TransactionWhereUniqueInput>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutSelcomPaymentInput>;
    create?: Nullable<TransactionUncheckedCreateWithoutSelcomPaymentInput>;
}

export class TransactionUncheckedCreateWithoutInitiatorInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    paymentMethode: string;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
}

export class TransactionUncheckedCreateWithoutMpesaPaymentInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    paymentMethode: string;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
    userId: string;
}

export class TransactionUncheckedCreateWithoutSelcomDisbursementInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    paymentMethode: string;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
    userId: string;
}

export class TransactionUncheckedCreateWithoutSelcomPaymentInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    paymentMethode: string;
    selcomDisbursementId?: Nullable<string>;
    state?: Nullable<State>;
    type: TransactionType;
    updatedAt?: Nullable<DateTime>;
    userId: string;
}

export class TransactionUncheckedUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    paymentMethode?: Nullable<StringFieldUpdateOperationsInput>;
    selcomDisbursementId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    selcomPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<StringFieldUpdateOperationsInput>;
}

export class TransactionUncheckedUpdateManyInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    paymentMethode?: Nullable<StringFieldUpdateOperationsInput>;
    selcomDisbursementId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    selcomPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<StringFieldUpdateOperationsInput>;
}

export class TransactionUncheckedUpdateManyWithoutInitiatorInput {
    connect?: Nullable<TransactionWhereUniqueInput[]>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutInitiatorInput[]>;
    create?: Nullable<TransactionCreateWithoutInitiatorInput[]>;
    createMany?: Nullable<TransactionCreateManyInitiatorInputEnvelope>;
    delete?: Nullable<TransactionWhereUniqueInput[]>;
    deleteMany?: Nullable<TransactionScalarWhereInput[]>;
    disconnect?: Nullable<TransactionWhereUniqueInput[]>;
    set?: Nullable<TransactionWhereUniqueInput[]>;
    update?: Nullable<TransactionUpdateWithWhereUniqueWithoutInitiatorInput[]>;
    updateMany?: Nullable<TransactionUpdateManyWithWhereWithoutInitiatorInput[]>;
    upsert?: Nullable<TransactionUpsertWithWhereUniqueWithoutInitiatorInput[]>;
}

export class TransactionUncheckedUpdateManyWithoutTransactionsInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    paymentMethode?: Nullable<StringFieldUpdateOperationsInput>;
    selcomDisbursementId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    selcomPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUncheckedUpdateOneWithoutMpesaPaymentInput {
    connect?: Nullable<TransactionWhereUniqueInput>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutMpesaPaymentInput>;
    create?: Nullable<TransactionUncheckedCreateWithoutMpesaPaymentInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<TransactionUncheckedUpdateWithoutMpesaPaymentInput>;
    upsert?: Nullable<TransactionUpsertWithoutMpesaPaymentInput>;
}

export class TransactionUncheckedUpdateOneWithoutSelcomDisbursementInput {
    connect?: Nullable<TransactionWhereUniqueInput>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutSelcomDisbursementInput>;
    create?: Nullable<TransactionUncheckedCreateWithoutSelcomDisbursementInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<TransactionUncheckedUpdateWithoutSelcomDisbursementInput>;
    upsert?: Nullable<TransactionUpsertWithoutSelcomDisbursementInput>;
}

export class TransactionUncheckedUpdateOneWithoutSelcomPaymentInput {
    connect?: Nullable<TransactionWhereUniqueInput>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutSelcomPaymentInput>;
    create?: Nullable<TransactionUncheckedCreateWithoutSelcomPaymentInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<TransactionUncheckedUpdateWithoutSelcomPaymentInput>;
    upsert?: Nullable<TransactionUpsertWithoutSelcomPaymentInput>;
}

export class TransactionUncheckedUpdateWithoutInitiatorInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    paymentMethode?: Nullable<StringFieldUpdateOperationsInput>;
    selcomDisbursementId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    selcomPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUncheckedUpdateWithoutMpesaPaymentInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethode?: Nullable<StringFieldUpdateOperationsInput>;
    selcomDisbursementId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    selcomPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<StringFieldUpdateOperationsInput>;
}

export class TransactionUncheckedUpdateWithoutSelcomDisbursementInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    paymentMethode?: Nullable<StringFieldUpdateOperationsInput>;
    selcomPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<StringFieldUpdateOperationsInput>;
}

export class TransactionUncheckedUpdateWithoutSelcomPaymentInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPaymentId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    paymentMethode?: Nullable<StringFieldUpdateOperationsInput>;
    selcomDisbursementId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    userId?: Nullable<StringFieldUpdateOperationsInput>;
}

export class TransactionUpdateInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    initiator?: Nullable<UserUpdateOneRequiredWithoutTransactionsInput>;
    mpesaPayment?: Nullable<MpesaPaymentUpdateOneWithoutTransactionInput>;
    paymentMethode?: Nullable<StringFieldUpdateOperationsInput>;
    selcomDisbursement?: Nullable<SelcomDisbursementUpdateOneWithoutTransactionInput>;
    selcomPayment?: Nullable<SelcomPaymentUpdateOneWithoutTransactionInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    paymentMethode?: Nullable<StringFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUpdateManyWithWhereWithoutInitiatorInput {
    data: TransactionUncheckedUpdateManyWithoutTransactionsInput;
    where: TransactionScalarWhereInput;
}

export class TransactionUpdateManyWithoutInitiatorInput {
    connect?: Nullable<TransactionWhereUniqueInput[]>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutInitiatorInput[]>;
    create?: Nullable<TransactionCreateWithoutInitiatorInput[]>;
    createMany?: Nullable<TransactionCreateManyInitiatorInputEnvelope>;
    delete?: Nullable<TransactionWhereUniqueInput[]>;
    deleteMany?: Nullable<TransactionScalarWhereInput[]>;
    disconnect?: Nullable<TransactionWhereUniqueInput[]>;
    set?: Nullable<TransactionWhereUniqueInput[]>;
    update?: Nullable<TransactionUpdateWithWhereUniqueWithoutInitiatorInput[]>;
    updateMany?: Nullable<TransactionUpdateManyWithWhereWithoutInitiatorInput[]>;
    upsert?: Nullable<TransactionUpsertWithWhereUniqueWithoutInitiatorInput[]>;
}

export class TransactionUpdateOneWithoutMpesaPaymentInput {
    connect?: Nullable<TransactionWhereUniqueInput>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutMpesaPaymentInput>;
    create?: Nullable<TransactionUncheckedCreateWithoutMpesaPaymentInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<TransactionUncheckedUpdateWithoutMpesaPaymentInput>;
    upsert?: Nullable<TransactionUpsertWithoutMpesaPaymentInput>;
}

export class TransactionUpdateOneWithoutSelcomDisbursementInput {
    connect?: Nullable<TransactionWhereUniqueInput>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutSelcomDisbursementInput>;
    create?: Nullable<TransactionUncheckedCreateWithoutSelcomDisbursementInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<TransactionUncheckedUpdateWithoutSelcomDisbursementInput>;
    upsert?: Nullable<TransactionUpsertWithoutSelcomDisbursementInput>;
}

export class TransactionUpdateOneWithoutSelcomPaymentInput {
    connect?: Nullable<TransactionWhereUniqueInput>;
    connectOrCreate?: Nullable<TransactionCreateOrConnectWithoutSelcomPaymentInput>;
    create?: Nullable<TransactionUncheckedCreateWithoutSelcomPaymentInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<TransactionUncheckedUpdateWithoutSelcomPaymentInput>;
    upsert?: Nullable<TransactionUpsertWithoutSelcomPaymentInput>;
}

export class TransactionUpdateWithWhereUniqueWithoutInitiatorInput {
    data: TransactionUncheckedUpdateWithoutInitiatorInput;
    where: TransactionWhereUniqueInput;
}

export class TransactionUpdateWithoutInitiatorInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    mpesaPayment?: Nullable<MpesaPaymentUpdateOneWithoutTransactionInput>;
    paymentMethode?: Nullable<StringFieldUpdateOperationsInput>;
    selcomDisbursement?: Nullable<SelcomDisbursementUpdateOneWithoutTransactionInput>;
    selcomPayment?: Nullable<SelcomPaymentUpdateOneWithoutTransactionInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUpdateWithoutMpesaPaymentInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    initiator?: Nullable<UserUpdateOneRequiredWithoutTransactionsInput>;
    paymentMethode?: Nullable<StringFieldUpdateOperationsInput>;
    selcomDisbursement?: Nullable<SelcomDisbursementUpdateOneWithoutTransactionInput>;
    selcomPayment?: Nullable<SelcomPaymentUpdateOneWithoutTransactionInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUpdateWithoutSelcomDisbursementInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    initiator?: Nullable<UserUpdateOneRequiredWithoutTransactionsInput>;
    mpesaPayment?: Nullable<MpesaPaymentUpdateOneWithoutTransactionInput>;
    paymentMethode?: Nullable<StringFieldUpdateOperationsInput>;
    selcomPayment?: Nullable<SelcomPaymentUpdateOneWithoutTransactionInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUpdateWithoutSelcomPaymentInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    initiator?: Nullable<UserUpdateOneRequiredWithoutTransactionsInput>;
    mpesaPayment?: Nullable<MpesaPaymentUpdateOneWithoutTransactionInput>;
    paymentMethode?: Nullable<StringFieldUpdateOperationsInput>;
    selcomDisbursement?: Nullable<SelcomDisbursementUpdateOneWithoutTransactionInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    type?: Nullable<EnumTransactionTypeFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class TransactionUpsertWithWhereUniqueWithoutInitiatorInput {
    create: TransactionUncheckedCreateWithoutInitiatorInput;
    update: TransactionUncheckedUpdateWithoutInitiatorInput;
    where: TransactionWhereUniqueInput;
}

export class TransactionUpsertWithoutMpesaPaymentInput {
    create: TransactionUncheckedCreateWithoutMpesaPaymentInput;
    update: TransactionUncheckedUpdateWithoutMpesaPaymentInput;
}

export class TransactionUpsertWithoutSelcomDisbursementInput {
    create: TransactionUncheckedCreateWithoutSelcomDisbursementInput;
    update: TransactionUncheckedUpdateWithoutSelcomDisbursementInput;
}

export class TransactionUpsertWithoutSelcomPaymentInput {
    create: TransactionUncheckedCreateWithoutSelcomPaymentInput;
    update: TransactionUncheckedUpdateWithoutSelcomPaymentInput;
}

export class TransactionWhereInput {
    AND?: Nullable<TransactionWhereInput[]>;
    NOT?: Nullable<TransactionWhereInput[]>;
    OR?: Nullable<TransactionWhereInput[]>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    initiator?: Nullable<UserWhereInput>;
    mpesaPayment?: Nullable<MpesaPaymentWhereInput>;
    mpesaPaymentId?: Nullable<StringNullableFilter>;
    paymentMethode?: Nullable<StringFilter>;
    selcomDisbursement?: Nullable<SelcomDisbursementWhereInput>;
    selcomDisbursementId?: Nullable<StringNullableFilter>;
    selcomPayment?: Nullable<SelcomPaymentWhereInput>;
    selcomPaymentId?: Nullable<StringNullableFilter>;
    state?: Nullable<EnumStateFilter>;
    type?: Nullable<EnumTransactionTypeFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
    userId?: Nullable<StringFilter>;
}

export class TransactionWhereUniqueInput {
    id?: Nullable<string>;
}

export class UserCountOrderByAggregateInput {
    avatorId?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    dateOfBirth?: Nullable<SortOrder>;
    disabled?: Nullable<SortOrder>;
    displayName?: Nullable<SortOrder>;
    email?: Nullable<SortOrder>;
    emailVerified?: Nullable<SortOrder>;
    gender?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    locationId?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    phoneNumber?: Nullable<SortOrder>;
    role?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class UserCreateInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUsersInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invited?: Nullable<InviteCreateNestedManyWithoutInviteeInput>;
    invites?: Nullable<InviteCreateNestedManyWithoutInviterInput>;
    location?: Nullable<LocationCreateNestedOneWithoutUsersInput>;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    organizationId?: Nullable<string>;
    organizations?: Nullable<OrganizationCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    provides?: Nullable<OrderCreateNestedManyWithoutProviderInput>;
    rated?: Nullable<RatingCreateNestedManyWithoutOwnerInput>;
    ratings?: Nullable<RatingCreateNestedManyWithoutUserInput>;
    role?: Nullable<Role>;
    staffOf?: Nullable<OrganizationCreateNestedManyWithoutStaffsInput>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateManyAvatorInput {
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    organizationId?: Nullable<string>;
    phoneNumber?: Nullable<string>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateManyAvatorInputEnvelope {
    data: UserCreateManyAvatorInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class UserCreateManyInput {
    avatorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    organizationId?: Nullable<string>;
    phoneNumber?: Nullable<string>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateManyLocationInput {
    avatorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    organizationId?: Nullable<string>;
    phoneNumber?: Nullable<string>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateManyLocationInputEnvelope {
    data: UserCreateManyLocationInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class UserCreateNestedManyWithoutAvatorInput {
    connect?: Nullable<UserWhereUniqueInput[]>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutAvatorInput[]>;
    create?: Nullable<UserCreateWithoutAvatorInput[]>;
    createMany?: Nullable<UserCreateManyAvatorInputEnvelope>;
}

export class UserCreateNestedManyWithoutLocationInput {
    connect?: Nullable<UserWhereUniqueInput[]>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutLocationInput[]>;
    create?: Nullable<UserCreateWithoutLocationInput[]>;
    createMany?: Nullable<UserCreateManyLocationInputEnvelope>;
}

export class UserCreateNestedManyWithoutStaffOfInput {
    connect?: Nullable<UserWhereUniqueInput[]>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutStaffOfInput[]>;
    create?: Nullable<UserCreateWithoutStaffOfInput[]>;
}

export class UserCreateNestedOneWithoutDeviceInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutDeviceInput>;
    create?: Nullable<UserUncheckedCreateWithoutDeviceInput>;
}

export class UserCreateNestedOneWithoutInvitedInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutInvitedInput>;
    create?: Nullable<UserUncheckedCreateWithoutInvitedInput>;
}

export class UserCreateNestedOneWithoutInvitesInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutInvitesInput>;
    create?: Nullable<UserUncheckedCreateWithoutInvitesInput>;
}

export class UserCreateNestedOneWithoutOrdersInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutOrdersInput>;
    create?: Nullable<UserUncheckedCreateWithoutOrdersInput>;
}

export class UserCreateNestedOneWithoutOrganizationsInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutOrganizationsInput>;
    create?: Nullable<UserUncheckedCreateWithoutOrganizationsInput>;
}

export class UserCreateNestedOneWithoutProvidesInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutProvidesInput>;
    create?: Nullable<UserUncheckedCreateWithoutProvidesInput>;
}

export class UserCreateNestedOneWithoutRatedInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutRatedInput>;
    create?: Nullable<UserUncheckedCreateWithoutRatedInput>;
}

export class UserCreateNestedOneWithoutRatingsInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutRatingsInput>;
    create?: Nullable<UserUncheckedCreateWithoutRatingsInput>;
}

export class UserCreateNestedOneWithoutTransactionsInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutTransactionsInput>;
    create?: Nullable<UserUncheckedCreateWithoutTransactionsInput>;
}

export class UserCreateOrConnectWithoutAvatorInput {
    create: UserUncheckedCreateWithoutAvatorInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutDeviceInput {
    create: UserUncheckedCreateWithoutDeviceInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutInvitedInput {
    create: UserUncheckedCreateWithoutInvitedInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutInvitesInput {
    create: UserUncheckedCreateWithoutInvitesInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutLocationInput {
    create: UserUncheckedCreateWithoutLocationInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutOrdersInput {
    create: UserUncheckedCreateWithoutOrdersInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutOrganizationsInput {
    create: UserUncheckedCreateWithoutOrganizationsInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutProvidesInput {
    create: UserUncheckedCreateWithoutProvidesInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutRatedInput {
    create: UserUncheckedCreateWithoutRatedInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutRatingsInput {
    create: UserUncheckedCreateWithoutRatingsInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutStaffOfInput {
    create: UserUncheckedCreateWithoutStaffOfInput;
    where: UserWhereUniqueInput;
}

export class UserCreateOrConnectWithoutTransactionsInput {
    create: UserUncheckedCreateWithoutTransactionsInput;
    where: UserWhereUniqueInput;
}

export class UserCreateWithoutAvatorInput {
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invited?: Nullable<InviteCreateNestedManyWithoutInviteeInput>;
    invites?: Nullable<InviteCreateNestedManyWithoutInviterInput>;
    location?: Nullable<LocationCreateNestedOneWithoutUsersInput>;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    organizationId?: Nullable<string>;
    organizations?: Nullable<OrganizationCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    provides?: Nullable<OrderCreateNestedManyWithoutProviderInput>;
    rated?: Nullable<RatingCreateNestedManyWithoutOwnerInput>;
    ratings?: Nullable<RatingCreateNestedManyWithoutUserInput>;
    role?: Nullable<Role>;
    staffOf?: Nullable<OrganizationCreateNestedManyWithoutStaffsInput>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutDeviceInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUsersInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invited?: Nullable<InviteCreateNestedManyWithoutInviteeInput>;
    invites?: Nullable<InviteCreateNestedManyWithoutInviterInput>;
    location?: Nullable<LocationCreateNestedOneWithoutUsersInput>;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    organizationId?: Nullable<string>;
    organizations?: Nullable<OrganizationCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    provides?: Nullable<OrderCreateNestedManyWithoutProviderInput>;
    rated?: Nullable<RatingCreateNestedManyWithoutOwnerInput>;
    ratings?: Nullable<RatingCreateNestedManyWithoutUserInput>;
    role?: Nullable<Role>;
    staffOf?: Nullable<OrganizationCreateNestedManyWithoutStaffsInput>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutInvitedInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUsersInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invites?: Nullable<InviteCreateNestedManyWithoutInviterInput>;
    location?: Nullable<LocationCreateNestedOneWithoutUsersInput>;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    organizationId?: Nullable<string>;
    organizations?: Nullable<OrganizationCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    provides?: Nullable<OrderCreateNestedManyWithoutProviderInput>;
    rated?: Nullable<RatingCreateNestedManyWithoutOwnerInput>;
    ratings?: Nullable<RatingCreateNestedManyWithoutUserInput>;
    role?: Nullable<Role>;
    staffOf?: Nullable<OrganizationCreateNestedManyWithoutStaffsInput>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutInvitesInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUsersInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invited?: Nullable<InviteCreateNestedManyWithoutInviteeInput>;
    location?: Nullable<LocationCreateNestedOneWithoutUsersInput>;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    organizationId?: Nullable<string>;
    organizations?: Nullable<OrganizationCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    provides?: Nullable<OrderCreateNestedManyWithoutProviderInput>;
    rated?: Nullable<RatingCreateNestedManyWithoutOwnerInput>;
    ratings?: Nullable<RatingCreateNestedManyWithoutUserInput>;
    role?: Nullable<Role>;
    staffOf?: Nullable<OrganizationCreateNestedManyWithoutStaffsInput>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutLocationInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUsersInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invited?: Nullable<InviteCreateNestedManyWithoutInviteeInput>;
    invites?: Nullable<InviteCreateNestedManyWithoutInviterInput>;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    organizationId?: Nullable<string>;
    organizations?: Nullable<OrganizationCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    provides?: Nullable<OrderCreateNestedManyWithoutProviderInput>;
    rated?: Nullable<RatingCreateNestedManyWithoutOwnerInput>;
    ratings?: Nullable<RatingCreateNestedManyWithoutUserInput>;
    role?: Nullable<Role>;
    staffOf?: Nullable<OrganizationCreateNestedManyWithoutStaffsInput>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutOrdersInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUsersInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invited?: Nullable<InviteCreateNestedManyWithoutInviteeInput>;
    invites?: Nullable<InviteCreateNestedManyWithoutInviterInput>;
    location?: Nullable<LocationCreateNestedOneWithoutUsersInput>;
    organizationId?: Nullable<string>;
    organizations?: Nullable<OrganizationCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    provides?: Nullable<OrderCreateNestedManyWithoutProviderInput>;
    rated?: Nullable<RatingCreateNestedManyWithoutOwnerInput>;
    ratings?: Nullable<RatingCreateNestedManyWithoutUserInput>;
    role?: Nullable<Role>;
    staffOf?: Nullable<OrganizationCreateNestedManyWithoutStaffsInput>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutOrganizationsInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUsersInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invited?: Nullable<InviteCreateNestedManyWithoutInviteeInput>;
    invites?: Nullable<InviteCreateNestedManyWithoutInviterInput>;
    location?: Nullable<LocationCreateNestedOneWithoutUsersInput>;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    organizationId?: Nullable<string>;
    phoneNumber?: Nullable<string>;
    provides?: Nullable<OrderCreateNestedManyWithoutProviderInput>;
    rated?: Nullable<RatingCreateNestedManyWithoutOwnerInput>;
    ratings?: Nullable<RatingCreateNestedManyWithoutUserInput>;
    role?: Nullable<Role>;
    staffOf?: Nullable<OrganizationCreateNestedManyWithoutStaffsInput>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutProvidesInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUsersInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invited?: Nullable<InviteCreateNestedManyWithoutInviteeInput>;
    invites?: Nullable<InviteCreateNestedManyWithoutInviterInput>;
    location?: Nullable<LocationCreateNestedOneWithoutUsersInput>;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    organizationId?: Nullable<string>;
    organizations?: Nullable<OrganizationCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    rated?: Nullable<RatingCreateNestedManyWithoutOwnerInput>;
    ratings?: Nullable<RatingCreateNestedManyWithoutUserInput>;
    role?: Nullable<Role>;
    staffOf?: Nullable<OrganizationCreateNestedManyWithoutStaffsInput>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutRatedInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUsersInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invited?: Nullable<InviteCreateNestedManyWithoutInviteeInput>;
    invites?: Nullable<InviteCreateNestedManyWithoutInviterInput>;
    location?: Nullable<LocationCreateNestedOneWithoutUsersInput>;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    organizationId?: Nullable<string>;
    organizations?: Nullable<OrganizationCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    provides?: Nullable<OrderCreateNestedManyWithoutProviderInput>;
    ratings?: Nullable<RatingCreateNestedManyWithoutUserInput>;
    role?: Nullable<Role>;
    staffOf?: Nullable<OrganizationCreateNestedManyWithoutStaffsInput>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutRatingsInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUsersInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invited?: Nullable<InviteCreateNestedManyWithoutInviteeInput>;
    invites?: Nullable<InviteCreateNestedManyWithoutInviterInput>;
    location?: Nullable<LocationCreateNestedOneWithoutUsersInput>;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    organizationId?: Nullable<string>;
    organizations?: Nullable<OrganizationCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    provides?: Nullable<OrderCreateNestedManyWithoutProviderInput>;
    rated?: Nullable<RatingCreateNestedManyWithoutOwnerInput>;
    role?: Nullable<Role>;
    staffOf?: Nullable<OrganizationCreateNestedManyWithoutStaffsInput>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutStaffOfInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUsersInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invited?: Nullable<InviteCreateNestedManyWithoutInviteeInput>;
    invites?: Nullable<InviteCreateNestedManyWithoutInviterInput>;
    location?: Nullable<LocationCreateNestedOneWithoutUsersInput>;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    organizationId?: Nullable<string>;
    organizations?: Nullable<OrganizationCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    provides?: Nullable<OrderCreateNestedManyWithoutProviderInput>;
    rated?: Nullable<RatingCreateNestedManyWithoutOwnerInput>;
    ratings?: Nullable<RatingCreateNestedManyWithoutUserInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserCreateWithoutTransactionsInput {
    avator?: Nullable<AttachmentCreateNestedOneWithoutUsersInput>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invited?: Nullable<InviteCreateNestedManyWithoutInviteeInput>;
    invites?: Nullable<InviteCreateNestedManyWithoutInviterInput>;
    location?: Nullable<LocationCreateNestedOneWithoutUsersInput>;
    orders?: Nullable<OrderCreateNestedManyWithoutOwnerInput>;
    organizationId?: Nullable<string>;
    organizations?: Nullable<OrganizationCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    provides?: Nullable<OrderCreateNestedManyWithoutProviderInput>;
    rated?: Nullable<RatingCreateNestedManyWithoutOwnerInput>;
    ratings?: Nullable<RatingCreateNestedManyWithoutUserInput>;
    role?: Nullable<Role>;
    staffOf?: Nullable<OrganizationCreateNestedManyWithoutStaffsInput>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserListRelationFilter {
    every?: Nullable<UserWhereInput>;
    none?: Nullable<UserWhereInput>;
    some?: Nullable<UserWhereInput>;
}

export class UserMaxOrderByAggregateInput {
    avatorId?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    dateOfBirth?: Nullable<SortOrder>;
    disabled?: Nullable<SortOrder>;
    displayName?: Nullable<SortOrder>;
    email?: Nullable<SortOrder>;
    emailVerified?: Nullable<SortOrder>;
    gender?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    locationId?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    phoneNumber?: Nullable<SortOrder>;
    role?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class UserMinOrderByAggregateInput {
    avatorId?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    dateOfBirth?: Nullable<SortOrder>;
    disabled?: Nullable<SortOrder>;
    displayName?: Nullable<SortOrder>;
    email?: Nullable<SortOrder>;
    emailVerified?: Nullable<SortOrder>;
    gender?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    locationId?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    phoneNumber?: Nullable<SortOrder>;
    role?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class UserOrderByInput {
    avatorId?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    dateOfBirth?: Nullable<SortOrder>;
    disabled?: Nullable<SortOrder>;
    displayName?: Nullable<SortOrder>;
    email?: Nullable<SortOrder>;
    emailVerified?: Nullable<SortOrder>;
    gender?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    locationId?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    phoneNumber?: Nullable<SortOrder>;
    role?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class UserOrderByWithAggregationInput {
    _count?: Nullable<UserCountOrderByAggregateInput>;
    _max?: Nullable<UserMaxOrderByAggregateInput>;
    _min?: Nullable<UserMinOrderByAggregateInput>;
    avatorId?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    dateOfBirth?: Nullable<SortOrder>;
    disabled?: Nullable<SortOrder>;
    displayName?: Nullable<SortOrder>;
    email?: Nullable<SortOrder>;
    emailVerified?: Nullable<SortOrder>;
    gender?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    locationId?: Nullable<SortOrder>;
    organizationId?: Nullable<SortOrder>;
    phoneNumber?: Nullable<SortOrder>;
    role?: Nullable<SortOrder>;
    state?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class UserRelationFilter {
    is?: Nullable<UserWhereInput>;
    isNot?: Nullable<UserWhereInput>;
}

export class UserScalarWhereInput {
    AND?: Nullable<UserScalarWhereInput[]>;
    NOT?: Nullable<UserScalarWhereInput[]>;
    OR?: Nullable<UserScalarWhereInput[]>;
    avatorId?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    dateOfBirth?: Nullable<DateTimeNullableFilter>;
    disabled?: Nullable<BoolFilter>;
    displayName?: Nullable<StringFilter>;
    email?: Nullable<StringFilter>;
    emailVerified?: Nullable<BoolFilter>;
    gender?: Nullable<EnumGenderFilter>;
    id?: Nullable<StringFilter>;
    locationId?: Nullable<StringNullableFilter>;
    organizationId?: Nullable<StringNullableFilter>;
    phoneNumber?: Nullable<StringNullableFilter>;
    role?: Nullable<EnumRoleFilter>;
    state?: Nullable<EnumStateFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class UserScalarWhereWithAggregatesInput {
    AND?: Nullable<UserScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<UserScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<UserScalarWhereWithAggregatesInput[]>;
    avatorId?: Nullable<StringNullableWithAggregatesFilter>;
    createdAt?: Nullable<DateTimeWithAggregatesFilter>;
    dateOfBirth?: Nullable<DateTimeNullableWithAggregatesFilter>;
    disabled?: Nullable<BoolWithAggregatesFilter>;
    displayName?: Nullable<StringWithAggregatesFilter>;
    email?: Nullable<StringWithAggregatesFilter>;
    emailVerified?: Nullable<BoolWithAggregatesFilter>;
    gender?: Nullable<EnumGenderWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    locationId?: Nullable<StringNullableWithAggregatesFilter>;
    organizationId?: Nullable<StringNullableWithAggregatesFilter>;
    phoneNumber?: Nullable<StringNullableWithAggregatesFilter>;
    role?: Nullable<EnumRoleWithAggregatesFilter>;
    state?: Nullable<EnumStateWithAggregatesFilter>;
    updatedAt?: Nullable<DateTimeWithAggregatesFilter>;
}

export class UserUncheckedCreateInput {
    avatorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invited?: Nullable<InviteUncheckedCreateNestedManyWithoutInviteeInput>;
    invites?: Nullable<InviteUncheckedCreateNestedManyWithoutInviterInput>;
    locationId?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    organizationId?: Nullable<string>;
    organizations?: Nullable<OrganizationUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    provides?: Nullable<OrderUncheckedCreateNestedManyWithoutProviderInput>;
    rated?: Nullable<RatingUncheckedCreateNestedManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUncheckedCreateNestedManyWithoutUserInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateNestedManyWithoutAvatorInput {
    connect?: Nullable<UserWhereUniqueInput[]>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutAvatorInput[]>;
    create?: Nullable<UserCreateWithoutAvatorInput[]>;
    createMany?: Nullable<UserCreateManyAvatorInputEnvelope>;
}

export class UserUncheckedCreateNestedManyWithoutLocationInput {
    connect?: Nullable<UserWhereUniqueInput[]>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutLocationInput[]>;
    create?: Nullable<UserCreateWithoutLocationInput[]>;
    createMany?: Nullable<UserCreateManyLocationInputEnvelope>;
}

export class UserUncheckedCreateWithoutAvatorInput {
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invited?: Nullable<InviteUncheckedCreateNestedManyWithoutInviteeInput>;
    invites?: Nullable<InviteUncheckedCreateNestedManyWithoutInviterInput>;
    locationId?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    organizationId?: Nullable<string>;
    organizations?: Nullable<OrganizationUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    provides?: Nullable<OrderUncheckedCreateNestedManyWithoutProviderInput>;
    rated?: Nullable<RatingUncheckedCreateNestedManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUncheckedCreateNestedManyWithoutUserInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutDeviceInput {
    avatorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invited?: Nullable<InviteUncheckedCreateNestedManyWithoutInviteeInput>;
    invites?: Nullable<InviteUncheckedCreateNestedManyWithoutInviterInput>;
    locationId?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    organizationId?: Nullable<string>;
    organizations?: Nullable<OrganizationUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    provides?: Nullable<OrderUncheckedCreateNestedManyWithoutProviderInput>;
    rated?: Nullable<RatingUncheckedCreateNestedManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUncheckedCreateNestedManyWithoutUserInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutInvitedInput {
    avatorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invites?: Nullable<InviteUncheckedCreateNestedManyWithoutInviterInput>;
    locationId?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    organizationId?: Nullable<string>;
    organizations?: Nullable<OrganizationUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    provides?: Nullable<OrderUncheckedCreateNestedManyWithoutProviderInput>;
    rated?: Nullable<RatingUncheckedCreateNestedManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUncheckedCreateNestedManyWithoutUserInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutInvitesInput {
    avatorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invited?: Nullable<InviteUncheckedCreateNestedManyWithoutInviteeInput>;
    locationId?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    organizationId?: Nullable<string>;
    organizations?: Nullable<OrganizationUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    provides?: Nullable<OrderUncheckedCreateNestedManyWithoutProviderInput>;
    rated?: Nullable<RatingUncheckedCreateNestedManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUncheckedCreateNestedManyWithoutUserInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutLocationInput {
    avatorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invited?: Nullable<InviteUncheckedCreateNestedManyWithoutInviteeInput>;
    invites?: Nullable<InviteUncheckedCreateNestedManyWithoutInviterInput>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    organizationId?: Nullable<string>;
    organizations?: Nullable<OrganizationUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    provides?: Nullable<OrderUncheckedCreateNestedManyWithoutProviderInput>;
    rated?: Nullable<RatingUncheckedCreateNestedManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUncheckedCreateNestedManyWithoutUserInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutOrdersInput {
    avatorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invited?: Nullable<InviteUncheckedCreateNestedManyWithoutInviteeInput>;
    invites?: Nullable<InviteUncheckedCreateNestedManyWithoutInviterInput>;
    locationId?: Nullable<string>;
    organizationId?: Nullable<string>;
    organizations?: Nullable<OrganizationUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    provides?: Nullable<OrderUncheckedCreateNestedManyWithoutProviderInput>;
    rated?: Nullable<RatingUncheckedCreateNestedManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUncheckedCreateNestedManyWithoutUserInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutOrganizationsInput {
    avatorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invited?: Nullable<InviteUncheckedCreateNestedManyWithoutInviteeInput>;
    invites?: Nullable<InviteUncheckedCreateNestedManyWithoutInviterInput>;
    locationId?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    organizationId?: Nullable<string>;
    phoneNumber?: Nullable<string>;
    provides?: Nullable<OrderUncheckedCreateNestedManyWithoutProviderInput>;
    rated?: Nullable<RatingUncheckedCreateNestedManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUncheckedCreateNestedManyWithoutUserInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutProvidesInput {
    avatorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invited?: Nullable<InviteUncheckedCreateNestedManyWithoutInviteeInput>;
    invites?: Nullable<InviteUncheckedCreateNestedManyWithoutInviterInput>;
    locationId?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    organizationId?: Nullable<string>;
    organizations?: Nullable<OrganizationUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    rated?: Nullable<RatingUncheckedCreateNestedManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUncheckedCreateNestedManyWithoutUserInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutRatedInput {
    avatorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invited?: Nullable<InviteUncheckedCreateNestedManyWithoutInviteeInput>;
    invites?: Nullable<InviteUncheckedCreateNestedManyWithoutInviterInput>;
    locationId?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    organizationId?: Nullable<string>;
    organizations?: Nullable<OrganizationUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    provides?: Nullable<OrderUncheckedCreateNestedManyWithoutProviderInput>;
    ratings?: Nullable<RatingUncheckedCreateNestedManyWithoutUserInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutRatingsInput {
    avatorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invited?: Nullable<InviteUncheckedCreateNestedManyWithoutInviteeInput>;
    invites?: Nullable<InviteUncheckedCreateNestedManyWithoutInviterInput>;
    locationId?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    organizationId?: Nullable<string>;
    organizations?: Nullable<OrganizationUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    provides?: Nullable<OrderUncheckedCreateNestedManyWithoutProviderInput>;
    rated?: Nullable<RatingUncheckedCreateNestedManyWithoutOwnerInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutStaffOfInput {
    avatorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invited?: Nullable<InviteUncheckedCreateNestedManyWithoutInviteeInput>;
    invites?: Nullable<InviteUncheckedCreateNestedManyWithoutInviterInput>;
    locationId?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    organizationId?: Nullable<string>;
    organizations?: Nullable<OrganizationUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    provides?: Nullable<OrderUncheckedCreateNestedManyWithoutProviderInput>;
    rated?: Nullable<RatingUncheckedCreateNestedManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUncheckedCreateNestedManyWithoutUserInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    transactions?: Nullable<TransactionUncheckedCreateNestedManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedCreateWithoutTransactionsInput {
    avatorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<DeviceUncheckedCreateNestedOneWithoutUserInput>;
    disabled?: Nullable<boolean>;
    displayName: string;
    email: string;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    invited?: Nullable<InviteUncheckedCreateNestedManyWithoutInviteeInput>;
    invites?: Nullable<InviteUncheckedCreateNestedManyWithoutInviterInput>;
    locationId?: Nullable<string>;
    orders?: Nullable<OrderUncheckedCreateNestedManyWithoutOwnerInput>;
    organizationId?: Nullable<string>;
    organizations?: Nullable<OrganizationUncheckedCreateNestedManyWithoutOwnerInput>;
    phoneNumber?: Nullable<string>;
    provides?: Nullable<OrderUncheckedCreateNestedManyWithoutProviderInput>;
    rated?: Nullable<RatingUncheckedCreateNestedManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUncheckedCreateNestedManyWithoutUserInput>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserUncheckedUpdateInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invited?: Nullable<InviteUncheckedUpdateManyWithoutInviteeInput>;
    invites?: Nullable<InviteUncheckedUpdateManyWithoutInviterInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    provides?: Nullable<OrderUncheckedUpdateManyWithoutProviderInput>;
    rated?: Nullable<RatingUncheckedUpdateManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUncheckedUpdateManyWithoutUserInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateManyInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateManyWithoutAvatorInput {
    connect?: Nullable<UserWhereUniqueInput[]>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutAvatorInput[]>;
    create?: Nullable<UserCreateWithoutAvatorInput[]>;
    createMany?: Nullable<UserCreateManyAvatorInputEnvelope>;
    delete?: Nullable<UserWhereUniqueInput[]>;
    deleteMany?: Nullable<UserScalarWhereInput[]>;
    disconnect?: Nullable<UserWhereUniqueInput[]>;
    set?: Nullable<UserWhereUniqueInput[]>;
    update?: Nullable<UserUpdateWithWhereUniqueWithoutAvatorInput[]>;
    updateMany?: Nullable<UserUpdateManyWithWhereWithoutAvatorInput[]>;
    upsert?: Nullable<UserUpsertWithWhereUniqueWithoutAvatorInput[]>;
}

export class UserUncheckedUpdateManyWithoutLocationInput {
    connect?: Nullable<UserWhereUniqueInput[]>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutLocationInput[]>;
    create?: Nullable<UserCreateWithoutLocationInput[]>;
    createMany?: Nullable<UserCreateManyLocationInputEnvelope>;
    delete?: Nullable<UserWhereUniqueInput[]>;
    deleteMany?: Nullable<UserScalarWhereInput[]>;
    disconnect?: Nullable<UserWhereUniqueInput[]>;
    set?: Nullable<UserWhereUniqueInput[]>;
    update?: Nullable<UserUpdateWithWhereUniqueWithoutLocationInput[]>;
    updateMany?: Nullable<UserUpdateManyWithWhereWithoutLocationInput[]>;
    upsert?: Nullable<UserUpsertWithWhereUniqueWithoutLocationInput[]>;
}

export class UserUncheckedUpdateManyWithoutStaffsInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateManyWithoutUsersInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutAvatorInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invited?: Nullable<InviteUncheckedUpdateManyWithoutInviteeInput>;
    invites?: Nullable<InviteUncheckedUpdateManyWithoutInviterInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    provides?: Nullable<OrderUncheckedUpdateManyWithoutProviderInput>;
    rated?: Nullable<RatingUncheckedUpdateManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUncheckedUpdateManyWithoutUserInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutDeviceInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invited?: Nullable<InviteUncheckedUpdateManyWithoutInviteeInput>;
    invites?: Nullable<InviteUncheckedUpdateManyWithoutInviterInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    provides?: Nullable<OrderUncheckedUpdateManyWithoutProviderInput>;
    rated?: Nullable<RatingUncheckedUpdateManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUncheckedUpdateManyWithoutUserInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutInvitedInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invites?: Nullable<InviteUncheckedUpdateManyWithoutInviterInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    provides?: Nullable<OrderUncheckedUpdateManyWithoutProviderInput>;
    rated?: Nullable<RatingUncheckedUpdateManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUncheckedUpdateManyWithoutUserInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutInvitesInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invited?: Nullable<InviteUncheckedUpdateManyWithoutInviteeInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    provides?: Nullable<OrderUncheckedUpdateManyWithoutProviderInput>;
    rated?: Nullable<RatingUncheckedUpdateManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUncheckedUpdateManyWithoutUserInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutLocationInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invited?: Nullable<InviteUncheckedUpdateManyWithoutInviteeInput>;
    invites?: Nullable<InviteUncheckedUpdateManyWithoutInviterInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    provides?: Nullable<OrderUncheckedUpdateManyWithoutProviderInput>;
    rated?: Nullable<RatingUncheckedUpdateManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUncheckedUpdateManyWithoutUserInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutOrdersInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invited?: Nullable<InviteUncheckedUpdateManyWithoutInviteeInput>;
    invites?: Nullable<InviteUncheckedUpdateManyWithoutInviterInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    provides?: Nullable<OrderUncheckedUpdateManyWithoutProviderInput>;
    rated?: Nullable<RatingUncheckedUpdateManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUncheckedUpdateManyWithoutUserInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutOrganizationsInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invited?: Nullable<InviteUncheckedUpdateManyWithoutInviteeInput>;
    invites?: Nullable<InviteUncheckedUpdateManyWithoutInviterInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    provides?: Nullable<OrderUncheckedUpdateManyWithoutProviderInput>;
    rated?: Nullable<RatingUncheckedUpdateManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUncheckedUpdateManyWithoutUserInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutProvidesInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invited?: Nullable<InviteUncheckedUpdateManyWithoutInviteeInput>;
    invites?: Nullable<InviteUncheckedUpdateManyWithoutInviterInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    rated?: Nullable<RatingUncheckedUpdateManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUncheckedUpdateManyWithoutUserInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutRatedInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invited?: Nullable<InviteUncheckedUpdateManyWithoutInviteeInput>;
    invites?: Nullable<InviteUncheckedUpdateManyWithoutInviterInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    provides?: Nullable<OrderUncheckedUpdateManyWithoutProviderInput>;
    ratings?: Nullable<RatingUncheckedUpdateManyWithoutUserInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutRatingsInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invited?: Nullable<InviteUncheckedUpdateManyWithoutInviteeInput>;
    invites?: Nullable<InviteUncheckedUpdateManyWithoutInviterInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    provides?: Nullable<OrderUncheckedUpdateManyWithoutProviderInput>;
    rated?: Nullable<RatingUncheckedUpdateManyWithoutOwnerInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutStaffOfInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invited?: Nullable<InviteUncheckedUpdateManyWithoutInviteeInput>;
    invites?: Nullable<InviteUncheckedUpdateManyWithoutInviterInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    provides?: Nullable<OrderUncheckedUpdateManyWithoutProviderInput>;
    rated?: Nullable<RatingUncheckedUpdateManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUncheckedUpdateManyWithoutUserInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUncheckedUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUncheckedUpdateWithoutTransactionsInput {
    avatorId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUncheckedUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invited?: Nullable<InviteUncheckedUpdateManyWithoutInviteeInput>;
    invites?: Nullable<InviteUncheckedUpdateManyWithoutInviterInput>;
    locationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    orders?: Nullable<OrderUncheckedUpdateManyWithoutOwnerInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUncheckedUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    provides?: Nullable<OrderUncheckedUpdateManyWithoutProviderInput>;
    rated?: Nullable<RatingUncheckedUpdateManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUncheckedUpdateManyWithoutUserInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUsersInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invited?: Nullable<InviteUpdateManyWithoutInviteeInput>;
    invites?: Nullable<InviteUpdateManyWithoutInviterInput>;
    location?: Nullable<LocationUpdateOneWithoutUsersInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    provides?: Nullable<OrderUpdateManyWithoutProviderInput>;
    rated?: Nullable<RatingUpdateManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUpdateManyWithoutUserInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    staffOf?: Nullable<OrganizationUpdateManyWithoutStaffsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateManyMutationInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateManyWithWhereWithoutAvatorInput {
    data: UserUncheckedUpdateManyWithoutUsersInput;
    where: UserScalarWhereInput;
}

export class UserUpdateManyWithWhereWithoutLocationInput {
    data: UserUncheckedUpdateManyWithoutUsersInput;
    where: UserScalarWhereInput;
}

export class UserUpdateManyWithWhereWithoutStaffOfInput {
    data: UserUncheckedUpdateManyWithoutStaffsInput;
    where: UserScalarWhereInput;
}

export class UserUpdateManyWithoutAvatorInput {
    connect?: Nullable<UserWhereUniqueInput[]>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutAvatorInput[]>;
    create?: Nullable<UserCreateWithoutAvatorInput[]>;
    createMany?: Nullable<UserCreateManyAvatorInputEnvelope>;
    delete?: Nullable<UserWhereUniqueInput[]>;
    deleteMany?: Nullable<UserScalarWhereInput[]>;
    disconnect?: Nullable<UserWhereUniqueInput[]>;
    set?: Nullable<UserWhereUniqueInput[]>;
    update?: Nullable<UserUpdateWithWhereUniqueWithoutAvatorInput[]>;
    updateMany?: Nullable<UserUpdateManyWithWhereWithoutAvatorInput[]>;
    upsert?: Nullable<UserUpsertWithWhereUniqueWithoutAvatorInput[]>;
}

export class UserUpdateManyWithoutLocationInput {
    connect?: Nullable<UserWhereUniqueInput[]>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutLocationInput[]>;
    create?: Nullable<UserCreateWithoutLocationInput[]>;
    createMany?: Nullable<UserCreateManyLocationInputEnvelope>;
    delete?: Nullable<UserWhereUniqueInput[]>;
    deleteMany?: Nullable<UserScalarWhereInput[]>;
    disconnect?: Nullable<UserWhereUniqueInput[]>;
    set?: Nullable<UserWhereUniqueInput[]>;
    update?: Nullable<UserUpdateWithWhereUniqueWithoutLocationInput[]>;
    updateMany?: Nullable<UserUpdateManyWithWhereWithoutLocationInput[]>;
    upsert?: Nullable<UserUpsertWithWhereUniqueWithoutLocationInput[]>;
}

export class UserUpdateManyWithoutStaffOfInput {
    connect?: Nullable<UserWhereUniqueInput[]>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutStaffOfInput[]>;
    create?: Nullable<UserCreateWithoutStaffOfInput[]>;
    delete?: Nullable<UserWhereUniqueInput[]>;
    deleteMany?: Nullable<UserScalarWhereInput[]>;
    disconnect?: Nullable<UserWhereUniqueInput[]>;
    set?: Nullable<UserWhereUniqueInput[]>;
    update?: Nullable<UserUpdateWithWhereUniqueWithoutStaffOfInput[]>;
    updateMany?: Nullable<UserUpdateManyWithWhereWithoutStaffOfInput[]>;
    upsert?: Nullable<UserUpsertWithWhereUniqueWithoutStaffOfInput[]>;
}

export class UserUpdateOneRequiredWithoutInvitedInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutInvitedInput>;
    create?: Nullable<UserUncheckedCreateWithoutInvitedInput>;
    update?: Nullable<UserUncheckedUpdateWithoutInvitedInput>;
    upsert?: Nullable<UserUpsertWithoutInvitedInput>;
}

export class UserUpdateOneRequiredWithoutInvitesInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutInvitesInput>;
    create?: Nullable<UserUncheckedCreateWithoutInvitesInput>;
    update?: Nullable<UserUncheckedUpdateWithoutInvitesInput>;
    upsert?: Nullable<UserUpsertWithoutInvitesInput>;
}

export class UserUpdateOneRequiredWithoutOrdersInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutOrdersInput>;
    create?: Nullable<UserUncheckedCreateWithoutOrdersInput>;
    update?: Nullable<UserUncheckedUpdateWithoutOrdersInput>;
    upsert?: Nullable<UserUpsertWithoutOrdersInput>;
}

export class UserUpdateOneRequiredWithoutOrganizationsInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutOrganizationsInput>;
    create?: Nullable<UserUncheckedCreateWithoutOrganizationsInput>;
    update?: Nullable<UserUncheckedUpdateWithoutOrganizationsInput>;
    upsert?: Nullable<UserUpsertWithoutOrganizationsInput>;
}

export class UserUpdateOneRequiredWithoutRatedInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutRatedInput>;
    create?: Nullable<UserUncheckedCreateWithoutRatedInput>;
    update?: Nullable<UserUncheckedUpdateWithoutRatedInput>;
    upsert?: Nullable<UserUpsertWithoutRatedInput>;
}

export class UserUpdateOneRequiredWithoutTransactionsInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutTransactionsInput>;
    create?: Nullable<UserUncheckedCreateWithoutTransactionsInput>;
    update?: Nullable<UserUncheckedUpdateWithoutTransactionsInput>;
    upsert?: Nullable<UserUpsertWithoutTransactionsInput>;
}

export class UserUpdateOneWithoutDeviceInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutDeviceInput>;
    create?: Nullable<UserUncheckedCreateWithoutDeviceInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<UserUncheckedUpdateWithoutDeviceInput>;
    upsert?: Nullable<UserUpsertWithoutDeviceInput>;
}

export class UserUpdateOneWithoutProvidesInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutProvidesInput>;
    create?: Nullable<UserUncheckedCreateWithoutProvidesInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<UserUncheckedUpdateWithoutProvidesInput>;
    upsert?: Nullable<UserUpsertWithoutProvidesInput>;
}

export class UserUpdateOneWithoutRatingsInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutRatingsInput>;
    create?: Nullable<UserUncheckedCreateWithoutRatingsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<UserUncheckedUpdateWithoutRatingsInput>;
    upsert?: Nullable<UserUpsertWithoutRatingsInput>;
}

export class UserUpdateWithWhereUniqueWithoutAvatorInput {
    data: UserUncheckedUpdateWithoutAvatorInput;
    where: UserWhereUniqueInput;
}

export class UserUpdateWithWhereUniqueWithoutLocationInput {
    data: UserUncheckedUpdateWithoutLocationInput;
    where: UserWhereUniqueInput;
}

export class UserUpdateWithWhereUniqueWithoutStaffOfInput {
    data: UserUncheckedUpdateWithoutStaffOfInput;
    where: UserWhereUniqueInput;
}

export class UserUpdateWithoutAvatorInput {
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invited?: Nullable<InviteUpdateManyWithoutInviteeInput>;
    invites?: Nullable<InviteUpdateManyWithoutInviterInput>;
    location?: Nullable<LocationUpdateOneWithoutUsersInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    provides?: Nullable<OrderUpdateManyWithoutProviderInput>;
    rated?: Nullable<RatingUpdateManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUpdateManyWithoutUserInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    staffOf?: Nullable<OrganizationUpdateManyWithoutStaffsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutDeviceInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUsersInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invited?: Nullable<InviteUpdateManyWithoutInviteeInput>;
    invites?: Nullable<InviteUpdateManyWithoutInviterInput>;
    location?: Nullable<LocationUpdateOneWithoutUsersInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    provides?: Nullable<OrderUpdateManyWithoutProviderInput>;
    rated?: Nullable<RatingUpdateManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUpdateManyWithoutUserInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    staffOf?: Nullable<OrganizationUpdateManyWithoutStaffsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutInvitedInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUsersInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invites?: Nullable<InviteUpdateManyWithoutInviterInput>;
    location?: Nullable<LocationUpdateOneWithoutUsersInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    provides?: Nullable<OrderUpdateManyWithoutProviderInput>;
    rated?: Nullable<RatingUpdateManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUpdateManyWithoutUserInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    staffOf?: Nullable<OrganizationUpdateManyWithoutStaffsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutInvitesInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUsersInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invited?: Nullable<InviteUpdateManyWithoutInviteeInput>;
    location?: Nullable<LocationUpdateOneWithoutUsersInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    provides?: Nullable<OrderUpdateManyWithoutProviderInput>;
    rated?: Nullable<RatingUpdateManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUpdateManyWithoutUserInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    staffOf?: Nullable<OrganizationUpdateManyWithoutStaffsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutLocationInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUsersInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invited?: Nullable<InviteUpdateManyWithoutInviteeInput>;
    invites?: Nullable<InviteUpdateManyWithoutInviterInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    provides?: Nullable<OrderUpdateManyWithoutProviderInput>;
    rated?: Nullable<RatingUpdateManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUpdateManyWithoutUserInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    staffOf?: Nullable<OrganizationUpdateManyWithoutStaffsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutOrdersInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUsersInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invited?: Nullable<InviteUpdateManyWithoutInviteeInput>;
    invites?: Nullable<InviteUpdateManyWithoutInviterInput>;
    location?: Nullable<LocationUpdateOneWithoutUsersInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    provides?: Nullable<OrderUpdateManyWithoutProviderInput>;
    rated?: Nullable<RatingUpdateManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUpdateManyWithoutUserInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    staffOf?: Nullable<OrganizationUpdateManyWithoutStaffsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutOrganizationsInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUsersInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invited?: Nullable<InviteUpdateManyWithoutInviteeInput>;
    invites?: Nullable<InviteUpdateManyWithoutInviterInput>;
    location?: Nullable<LocationUpdateOneWithoutUsersInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    provides?: Nullable<OrderUpdateManyWithoutProviderInput>;
    rated?: Nullable<RatingUpdateManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUpdateManyWithoutUserInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    staffOf?: Nullable<OrganizationUpdateManyWithoutStaffsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutProvidesInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUsersInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invited?: Nullable<InviteUpdateManyWithoutInviteeInput>;
    invites?: Nullable<InviteUpdateManyWithoutInviterInput>;
    location?: Nullable<LocationUpdateOneWithoutUsersInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    rated?: Nullable<RatingUpdateManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUpdateManyWithoutUserInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    staffOf?: Nullable<OrganizationUpdateManyWithoutStaffsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutRatedInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUsersInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invited?: Nullable<InviteUpdateManyWithoutInviteeInput>;
    invites?: Nullable<InviteUpdateManyWithoutInviterInput>;
    location?: Nullable<LocationUpdateOneWithoutUsersInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    provides?: Nullable<OrderUpdateManyWithoutProviderInput>;
    ratings?: Nullable<RatingUpdateManyWithoutUserInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    staffOf?: Nullable<OrganizationUpdateManyWithoutStaffsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutRatingsInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUsersInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invited?: Nullable<InviteUpdateManyWithoutInviteeInput>;
    invites?: Nullable<InviteUpdateManyWithoutInviterInput>;
    location?: Nullable<LocationUpdateOneWithoutUsersInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    provides?: Nullable<OrderUpdateManyWithoutProviderInput>;
    rated?: Nullable<RatingUpdateManyWithoutOwnerInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    staffOf?: Nullable<OrganizationUpdateManyWithoutStaffsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutStaffOfInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUsersInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invited?: Nullable<InviteUpdateManyWithoutInviteeInput>;
    invites?: Nullable<InviteUpdateManyWithoutInviterInput>;
    location?: Nullable<LocationUpdateOneWithoutUsersInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    provides?: Nullable<OrderUpdateManyWithoutProviderInput>;
    rated?: Nullable<RatingUpdateManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUpdateManyWithoutUserInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    transactions?: Nullable<TransactionUpdateManyWithoutInitiatorInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateWithoutTransactionsInput {
    avator?: Nullable<AttachmentUpdateOneWithoutUsersInput>;
    createdAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
    dateOfBirth?: Nullable<NullableDateTimeFieldUpdateOperationsInput>;
    device?: Nullable<DeviceUpdateOneWithoutUserInput>;
    disabled?: Nullable<BoolFieldUpdateOperationsInput>;
    displayName?: Nullable<StringFieldUpdateOperationsInput>;
    email?: Nullable<StringFieldUpdateOperationsInput>;
    emailVerified?: Nullable<BoolFieldUpdateOperationsInput>;
    gender?: Nullable<EnumGenderFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    invited?: Nullable<InviteUpdateManyWithoutInviteeInput>;
    invites?: Nullable<InviteUpdateManyWithoutInviterInput>;
    location?: Nullable<LocationUpdateOneWithoutUsersInput>;
    orders?: Nullable<OrderUpdateManyWithoutOwnerInput>;
    organizationId?: Nullable<NullableStringFieldUpdateOperationsInput>;
    organizations?: Nullable<OrganizationUpdateManyWithoutOwnerInput>;
    phoneNumber?: Nullable<NullableStringFieldUpdateOperationsInput>;
    provides?: Nullable<OrderUpdateManyWithoutProviderInput>;
    rated?: Nullable<RatingUpdateManyWithoutOwnerInput>;
    ratings?: Nullable<RatingUpdateManyWithoutUserInput>;
    role?: Nullable<EnumRoleFieldUpdateOperationsInput>;
    staffOf?: Nullable<OrganizationUpdateManyWithoutStaffsInput>;
    state?: Nullable<EnumStateFieldUpdateOperationsInput>;
    updatedAt?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpsertWithWhereUniqueWithoutAvatorInput {
    create: UserUncheckedCreateWithoutAvatorInput;
    update: UserUncheckedUpdateWithoutAvatorInput;
    where: UserWhereUniqueInput;
}

export class UserUpsertWithWhereUniqueWithoutLocationInput {
    create: UserUncheckedCreateWithoutLocationInput;
    update: UserUncheckedUpdateWithoutLocationInput;
    where: UserWhereUniqueInput;
}

export class UserUpsertWithWhereUniqueWithoutStaffOfInput {
    create: UserUncheckedCreateWithoutStaffOfInput;
    update: UserUncheckedUpdateWithoutStaffOfInput;
    where: UserWhereUniqueInput;
}

export class UserUpsertWithoutDeviceInput {
    create: UserUncheckedCreateWithoutDeviceInput;
    update: UserUncheckedUpdateWithoutDeviceInput;
}

export class UserUpsertWithoutInvitedInput {
    create: UserUncheckedCreateWithoutInvitedInput;
    update: UserUncheckedUpdateWithoutInvitedInput;
}

export class UserUpsertWithoutInvitesInput {
    create: UserUncheckedCreateWithoutInvitesInput;
    update: UserUncheckedUpdateWithoutInvitesInput;
}

export class UserUpsertWithoutOrdersInput {
    create: UserUncheckedCreateWithoutOrdersInput;
    update: UserUncheckedUpdateWithoutOrdersInput;
}

export class UserUpsertWithoutOrganizationsInput {
    create: UserUncheckedCreateWithoutOrganizationsInput;
    update: UserUncheckedUpdateWithoutOrganizationsInput;
}

export class UserUpsertWithoutProvidesInput {
    create: UserUncheckedCreateWithoutProvidesInput;
    update: UserUncheckedUpdateWithoutProvidesInput;
}

export class UserUpsertWithoutRatedInput {
    create: UserUncheckedCreateWithoutRatedInput;
    update: UserUncheckedUpdateWithoutRatedInput;
}

export class UserUpsertWithoutRatingsInput {
    create: UserUncheckedCreateWithoutRatingsInput;
    update: UserUncheckedUpdateWithoutRatingsInput;
}

export class UserUpsertWithoutTransactionsInput {
    create: UserUncheckedCreateWithoutTransactionsInput;
    update: UserUncheckedUpdateWithoutTransactionsInput;
}

export class UserWhereInput {
    AND?: Nullable<UserWhereInput[]>;
    NOT?: Nullable<UserWhereInput[]>;
    OR?: Nullable<UserWhereInput[]>;
    avator?: Nullable<AttachmentWhereInput>;
    avatorId?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    dateOfBirth?: Nullable<DateTimeNullableFilter>;
    device?: Nullable<DeviceWhereInput>;
    disabled?: Nullable<BoolFilter>;
    displayName?: Nullable<StringFilter>;
    email?: Nullable<StringFilter>;
    emailVerified?: Nullable<BoolFilter>;
    gender?: Nullable<EnumGenderFilter>;
    id?: Nullable<StringFilter>;
    invited?: Nullable<InviteListRelationFilter>;
    invites?: Nullable<InviteListRelationFilter>;
    location?: Nullable<LocationWhereInput>;
    locationId?: Nullable<StringNullableFilter>;
    orders?: Nullable<OrderListRelationFilter>;
    organizationId?: Nullable<StringNullableFilter>;
    organizations?: Nullable<OrganizationListRelationFilter>;
    phoneNumber?: Nullable<StringNullableFilter>;
    provides?: Nullable<OrderListRelationFilter>;
    rated?: Nullable<RatingListRelationFilter>;
    ratings?: Nullable<RatingListRelationFilter>;
    role?: Nullable<EnumRoleFilter>;
    staffOf?: Nullable<OrganizationListRelationFilter>;
    state?: Nullable<EnumStateFilter>;
    transactions?: Nullable<TransactionListRelationFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class UserWhereUniqueInput {
    email?: Nullable<string>;
    id?: Nullable<string>;
}

export class AddressComponent {
    long_name?: Nullable<string>;
    short_name?: Nullable<string>;
    types?: Nullable<Nullable<string>[]>;
}

export class AddressGeometry {
    bounds?: Nullable<LatLngBounds>;
    location?: Nullable<LatLng>;
    location_type?: Nullable<LocationType>;
    viewport?: Nullable<LatLngBounds>;
}

export class AggregateAttachment {
    _avg?: Nullable<AttachmentAvgAggregateOutputType>;
    _count?: Nullable<AttachmentCountAggregateOutputType>;
    _max?: Nullable<AttachmentMaxAggregateOutputType>;
    _min?: Nullable<AttachmentMinAggregateOutputType>;
    _sum?: Nullable<AttachmentSumAggregateOutputType>;
    avg?: Nullable<AttachmentAvgAggregateOutputType>;
    count?: Nullable<AttachmentCountAggregateOutputType>;
    max?: Nullable<AttachmentMaxAggregateOutputType>;
    min?: Nullable<AttachmentMinAggregateOutputType>;
    sum?: Nullable<AttachmentSumAggregateOutputType>;
}

export class AggregateAttachmentResponse {
    data?: Nullable<AggregateAttachment>;
    message: string;
    status: boolean;
}

export class AggregateCasbinRule {
    _avg?: Nullable<CasbinRuleAvgAggregateOutputType>;
    _count?: Nullable<CasbinRuleCountAggregateOutputType>;
    _max?: Nullable<CasbinRuleMaxAggregateOutputType>;
    _min?: Nullable<CasbinRuleMinAggregateOutputType>;
    _sum?: Nullable<CasbinRuleSumAggregateOutputType>;
    avg?: Nullable<CasbinRuleAvgAggregateOutputType>;
    count?: Nullable<CasbinRuleCountAggregateOutputType>;
    max?: Nullable<CasbinRuleMaxAggregateOutputType>;
    min?: Nullable<CasbinRuleMinAggregateOutputType>;
    sum?: Nullable<CasbinRuleSumAggregateOutputType>;
}

export class AggregateCasbinRuleResponse {
    data?: Nullable<AggregateCasbinRule>;
    message: string;
    status: boolean;
}

export class AggregateDevice {
    _count?: Nullable<DeviceCountAggregateOutputType>;
    _max?: Nullable<DeviceMaxAggregateOutputType>;
    _min?: Nullable<DeviceMinAggregateOutputType>;
    count?: Nullable<DeviceCountAggregateOutputType>;
    max?: Nullable<DeviceMaxAggregateOutputType>;
    min?: Nullable<DeviceMinAggregateOutputType>;
}

export class AggregateDeviceResponse {
    data?: Nullable<AggregateDevice>;
    message: string;
    status: boolean;
}

export class AggregateInvite {
    _count?: Nullable<InviteCountAggregateOutputType>;
    _max?: Nullable<InviteMaxAggregateOutputType>;
    _min?: Nullable<InviteMinAggregateOutputType>;
    count?: Nullable<InviteCountAggregateOutputType>;
    max?: Nullable<InviteMaxAggregateOutputType>;
    min?: Nullable<InviteMinAggregateOutputType>;
}

export class AggregateInviteResponse {
    data?: Nullable<AggregateInvite>;
    message: string;
    status: boolean;
}

export class AggregateLocation {
    _avg?: Nullable<LocationAvgAggregateOutputType>;
    _count?: Nullable<LocationCountAggregateOutputType>;
    _max?: Nullable<LocationMaxAggregateOutputType>;
    _min?: Nullable<LocationMinAggregateOutputType>;
    _sum?: Nullable<LocationSumAggregateOutputType>;
    avg?: Nullable<LocationAvgAggregateOutputType>;
    count?: Nullable<LocationCountAggregateOutputType>;
    max?: Nullable<LocationMaxAggregateOutputType>;
    min?: Nullable<LocationMinAggregateOutputType>;
    sum?: Nullable<LocationSumAggregateOutputType>;
}

export class AggregateLocationResponse {
    data?: Nullable<AggregateLocation>;
    message: string;
    status: boolean;
}

export class AggregateMpesaPayment {
    _count?: Nullable<MpesaPaymentCountAggregateOutputType>;
    _max?: Nullable<MpesaPaymentMaxAggregateOutputType>;
    _min?: Nullable<MpesaPaymentMinAggregateOutputType>;
    count?: Nullable<MpesaPaymentCountAggregateOutputType>;
    max?: Nullable<MpesaPaymentMaxAggregateOutputType>;
    min?: Nullable<MpesaPaymentMinAggregateOutputType>;
}

export class AggregateMpesaPaymentResponse {
    data?: Nullable<AggregateMpesaPayment>;
    message: string;
    status: boolean;
}

export class AggregateOrder {
    _avg?: Nullable<OrderAvgAggregateOutputType>;
    _count?: Nullable<OrderCountAggregateOutputType>;
    _max?: Nullable<OrderMaxAggregateOutputType>;
    _min?: Nullable<OrderMinAggregateOutputType>;
    _sum?: Nullable<OrderSumAggregateOutputType>;
    avg?: Nullable<OrderAvgAggregateOutputType>;
    count?: Nullable<OrderCountAggregateOutputType>;
    max?: Nullable<OrderMaxAggregateOutputType>;
    min?: Nullable<OrderMinAggregateOutputType>;
    sum?: Nullable<OrderSumAggregateOutputType>;
}

export class AggregateOrderResponse {
    data?: Nullable<AggregateOrder>;
    message: string;
    status: boolean;
}

export class AggregateOrganization {
    _count?: Nullable<OrganizationCountAggregateOutputType>;
    _max?: Nullable<OrganizationMaxAggregateOutputType>;
    _min?: Nullable<OrganizationMinAggregateOutputType>;
    count?: Nullable<OrganizationCountAggregateOutputType>;
    max?: Nullable<OrganizationMaxAggregateOutputType>;
    min?: Nullable<OrganizationMinAggregateOutputType>;
}

export class AggregateOrganizationResponse {
    data?: Nullable<AggregateOrganization>;
    message: string;
    status: boolean;
}

export class AggregatePaymentMethod {
    _count?: Nullable<PaymentMethodCountAggregateOutputType>;
    _max?: Nullable<PaymentMethodMaxAggregateOutputType>;
    _min?: Nullable<PaymentMethodMinAggregateOutputType>;
    count?: Nullable<PaymentMethodCountAggregateOutputType>;
    max?: Nullable<PaymentMethodMaxAggregateOutputType>;
    min?: Nullable<PaymentMethodMinAggregateOutputType>;
}

export class AggregatePaymentMethodResponse {
    data?: Nullable<AggregatePaymentMethod>;
    message: string;
    status: boolean;
}

export class AggregateRating {
    _avg?: Nullable<RatingAvgAggregateOutputType>;
    _count?: Nullable<RatingCountAggregateOutputType>;
    _max?: Nullable<RatingMaxAggregateOutputType>;
    _min?: Nullable<RatingMinAggregateOutputType>;
    _sum?: Nullable<RatingSumAggregateOutputType>;
    avg?: Nullable<RatingAvgAggregateOutputType>;
    count?: Nullable<RatingCountAggregateOutputType>;
    max?: Nullable<RatingMaxAggregateOutputType>;
    min?: Nullable<RatingMinAggregateOutputType>;
    sum?: Nullable<RatingSumAggregateOutputType>;
}

export class AggregateRatingResponse {
    data?: Nullable<AggregateRating>;
    message: string;
    status: boolean;
}

export class AggregateSelcomDisbursement {
    _avg?: Nullable<SelcomDisbursementAvgAggregateOutputType>;
    _count?: Nullable<SelcomDisbursementCountAggregateOutputType>;
    _max?: Nullable<SelcomDisbursementMaxAggregateOutputType>;
    _min?: Nullable<SelcomDisbursementMinAggregateOutputType>;
    _sum?: Nullable<SelcomDisbursementSumAggregateOutputType>;
    avg?: Nullable<SelcomDisbursementAvgAggregateOutputType>;
    count?: Nullable<SelcomDisbursementCountAggregateOutputType>;
    max?: Nullable<SelcomDisbursementMaxAggregateOutputType>;
    min?: Nullable<SelcomDisbursementMinAggregateOutputType>;
    sum?: Nullable<SelcomDisbursementSumAggregateOutputType>;
}

export class AggregateSelcomDisbursementResponse {
    data?: Nullable<AggregateSelcomDisbursement>;
    message: string;
    status: boolean;
}

export class AggregateSelcomPayment {
    _avg?: Nullable<SelcomPaymentAvgAggregateOutputType>;
    _count?: Nullable<SelcomPaymentCountAggregateOutputType>;
    _max?: Nullable<SelcomPaymentMaxAggregateOutputType>;
    _min?: Nullable<SelcomPaymentMinAggregateOutputType>;
    _sum?: Nullable<SelcomPaymentSumAggregateOutputType>;
    avg?: Nullable<SelcomPaymentAvgAggregateOutputType>;
    count?: Nullable<SelcomPaymentCountAggregateOutputType>;
    max?: Nullable<SelcomPaymentMaxAggregateOutputType>;
    min?: Nullable<SelcomPaymentMinAggregateOutputType>;
    sum?: Nullable<SelcomPaymentSumAggregateOutputType>;
}

export class AggregateSelcomPaymentResponse {
    data?: Nullable<AggregateSelcomPayment>;
    message: string;
    status: boolean;
}

export class AggregateService {
    _avg?: Nullable<ServiceAvgAggregateOutputType>;
    _count?: Nullable<ServiceCountAggregateOutputType>;
    _max?: Nullable<ServiceMaxAggregateOutputType>;
    _min?: Nullable<ServiceMinAggregateOutputType>;
    _sum?: Nullable<ServiceSumAggregateOutputType>;
    avg?: Nullable<ServiceAvgAggregateOutputType>;
    count?: Nullable<ServiceCountAggregateOutputType>;
    max?: Nullable<ServiceMaxAggregateOutputType>;
    min?: Nullable<ServiceMinAggregateOutputType>;
    sum?: Nullable<ServiceSumAggregateOutputType>;
}

export class AggregateServiceCategory {
    _count?: Nullable<ServiceCategoryCountAggregateOutputType>;
    _max?: Nullable<ServiceCategoryMaxAggregateOutputType>;
    _min?: Nullable<ServiceCategoryMinAggregateOutputType>;
    count?: Nullable<ServiceCategoryCountAggregateOutputType>;
    max?: Nullable<ServiceCategoryMaxAggregateOutputType>;
    min?: Nullable<ServiceCategoryMinAggregateOutputType>;
}

export class AggregateServiceCategoryResponse {
    data?: Nullable<AggregateServiceCategory>;
    message: string;
    status: boolean;
}

export class AggregateServiceResponse {
    data?: Nullable<AggregateService>;
    message: string;
    status: boolean;
}

export class AggregateTransaction {
    _count?: Nullable<TransactionCountAggregateOutputType>;
    _max?: Nullable<TransactionMaxAggregateOutputType>;
    _min?: Nullable<TransactionMinAggregateOutputType>;
    count?: Nullable<TransactionCountAggregateOutputType>;
    max?: Nullable<TransactionMaxAggregateOutputType>;
    min?: Nullable<TransactionMinAggregateOutputType>;
}

export class AggregateTransactionResponse {
    data?: Nullable<AggregateTransaction>;
    message: string;
    status: boolean;
}

export class AggregateUser {
    _count?: Nullable<UserCountAggregateOutputType>;
    _max?: Nullable<UserMaxAggregateOutputType>;
    _min?: Nullable<UserMinAggregateOutputType>;
    count?: Nullable<UserCountAggregateOutputType>;
    max?: Nullable<UserMaxAggregateOutputType>;
    min?: Nullable<UserMinAggregateOutputType>;
}

export class AggregateUserResponse {
    data?: Nullable<AggregateUser>;
    message: string;
    status: boolean;
}

export class Attachment {
    _count?: Nullable<AttachmentCountOutputType>;
    attachmentType: AttachmentType;
    createdAt: DateTime;
    downloadable: boolean;
    duration: number;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    id: string;
    mimetype?: Nullable<string>;
    orders: Order[];
    organizations: Organization[];
    path: string;
    paymentMethods?: Nullable<PaymentMethod>;
    placement: string;
    serviceCategory?: Nullable<ServiceCategory>;
    services: Service[];
    size: number;
    updatedAt: DateTime;
    users: User[];
}

export class AttachmentAvgAggregateOutputType {
    duration?: Nullable<number>;
    size?: Nullable<number>;
}

export class AttachmentBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class AttachmentCountAggregateOutputType {
    _all: number;
    attachmentType: number;
    createdAt: number;
    downloadable: number;
    duration: number;
    encoding: number;
    filename: number;
    id: number;
    mimetype: number;
    path: number;
    placement: number;
    size: number;
    updatedAt: number;
}

export class AttachmentCountOutputType {
    orders: number;
    organizations: number;
    services: number;
    users: number;
}

export class AttachmentCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class AttachmentListResponse {
    data?: Nullable<Attachment[]>;
    message: string;
    status: boolean;
}

export class AttachmentMaxAggregateOutputType {
    attachmentType?: Nullable<AttachmentType>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path?: Nullable<string>;
    placement?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentMinAggregateOutputType {
    attachmentType?: Nullable<AttachmentType>;
    createdAt?: Nullable<DateTime>;
    downloadable?: Nullable<boolean>;
    duration?: Nullable<number>;
    encoding?: Nullable<string>;
    filename?: Nullable<string>;
    id?: Nullable<string>;
    mimetype?: Nullable<string>;
    path?: Nullable<string>;
    placement?: Nullable<string>;
    size?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export class AttachmentResponse {
    data?: Nullable<Attachment>;
    message: string;
    status: boolean;
}

export class AttachmentSumAggregateOutputType {
    duration?: Nullable<number>;
    size?: Nullable<number>;
}

export class AuthResult {
    data?: Nullable<User>;
    message: string;
    status: boolean;
    token?: Nullable<string>;
}

export class BatchPayload {
    count: number;
}

export class CasbinRule {
    createdAt: DateTime;
    id: number;
    ptype: string;
    updatedAt: DateTime;
    v0?: Nullable<string>;
    v1?: Nullable<string>;
    v2?: Nullable<string>;
    v3?: Nullable<string>;
    v4?: Nullable<string>;
    v5?: Nullable<string>;
}

export class CasbinRuleAvgAggregateOutputType {
    id?: Nullable<number>;
}

export class CasbinRuleBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class CasbinRuleCountAggregateOutputType {
    _all: number;
    createdAt: number;
    id: number;
    ptype: number;
    updatedAt: number;
    v0: number;
    v1: number;
    v2: number;
    v3: number;
    v4: number;
    v5: number;
}

export class CasbinRuleCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class CasbinRuleListResponse {
    data?: Nullable<CasbinRule[]>;
    message: string;
    status: boolean;
}

export class CasbinRuleMaxAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<number>;
    ptype?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    v0?: Nullable<string>;
    v1?: Nullable<string>;
    v2?: Nullable<string>;
    v3?: Nullable<string>;
    v4?: Nullable<string>;
    v5?: Nullable<string>;
}

export class CasbinRuleMinAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<number>;
    ptype?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    v0?: Nullable<string>;
    v1?: Nullable<string>;
    v2?: Nullable<string>;
    v3?: Nullable<string>;
    v4?: Nullable<string>;
    v5?: Nullable<string>;
}

export class CasbinRuleResponse {
    data?: Nullable<CasbinRule>;
    message: string;
    status: boolean;
}

export class CasbinRuleSumAggregateOutputType {
    id?: Nullable<number>;
}

export class Device {
    device_id: string;
    fcm_id?: Nullable<string>;
    type: string;
    user?: Nullable<User>;
    userId?: Nullable<string>;
}

export class DeviceBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class DeviceCountAggregateOutputType {
    _all: number;
    device_id: number;
    fcm_id: number;
    type: number;
    userId: number;
}

export class DeviceCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class DeviceListResponse {
    data?: Nullable<Device[]>;
    message: string;
    status: boolean;
}

export class DeviceMaxAggregateOutputType {
    device_id?: Nullable<string>;
    fcm_id?: Nullable<string>;
    type?: Nullable<string>;
    userId?: Nullable<string>;
}

export class DeviceMinAggregateOutputType {
    device_id?: Nullable<string>;
    fcm_id?: Nullable<string>;
    type?: Nullable<string>;
    userId?: Nullable<string>;
}

export class DeviceResponse {
    data?: Nullable<Device>;
    message: string;
    status: boolean;
}

export class DirectionsResponseData {
    available_travel_modes?: Nullable<Nullable<string>[]>;
    geocoded_waypoints?: Nullable<Nullable<GeocodedWaypoint>[]>;
    routes?: Nullable<Nullable<DirectionsRoute>[]>;
}

export class DirectionsRoute {
    bounds?: Nullable<LatLngBounds>;
    copyrights?: Nullable<string>;
    fare?: Nullable<TransitFare>;
    legs?: Nullable<Nullable<RouteLeg>[]>;
    overview_path?: Nullable<Nullable<LatLng>[]>;
    overview_polyline?: Nullable<Polyline>;
    summary?: Nullable<string>;
    warnings?: Nullable<Nullable<string>[]>;
    waypoint_order?: Nullable<Nullable<number>[]>;
}

export class DirectionsStep {
    distance?: Nullable<MapDistance>;
    duration?: Nullable<MapDuration>;
    end_location?: Nullable<LatLng>;
    html_instructions?: Nullable<string>;
    maneuver?: Nullable<string>;
    polyline?: Nullable<Polyline>;
    start_location?: Nullable<LatLng>;
    steps?: Nullable<DirectionsStep>;
    transit_details?: Nullable<TransitDetails>;
}

export class GeocodeResponse {
    data?: Nullable<GeocodeResponseData>;
    message: string;
    status: boolean;
}

export class GeocodeResponseData {
    results?: Nullable<Nullable<GeocodeResult>[]>;
}

export class GeocodeResult {
    address_components?: Nullable<Nullable<AddressComponent>[]>;
    formatted_address?: Nullable<string>;
    geometry?: Nullable<AddressGeometry>;
    partial_match?: Nullable<boolean>;
    place_id?: Nullable<string>;
    plus_code?: Nullable<PlusCode>;
    postcode_localities?: Nullable<Nullable<string>[]>;
    types?: Nullable<Nullable<string>[]>;
}

export class GeocodedWaypoint {
    geocoder_status?: Nullable<GeocodedWaypointStatus>;
    partial_match?: Nullable<boolean>;
    place_id?: Nullable<string>;
    types?: Nullable<Nullable<string>[]>;
}

export class Invite {
    createdAt: DateTime;
    id: string;
    invitee: User;
    inviteeId: string;
    inviter: User;
    inviterId: string;
    message: string;
    organization?: Nullable<Organization>;
    organizationId?: Nullable<string>;
    state: State;
    type: InviteType;
    updatedAt: DateTime;
    url?: Nullable<string>;
}

export class InviteBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class InviteCountAggregateOutputType {
    _all: number;
    createdAt: number;
    id: number;
    inviteeId: number;
    inviterId: number;
    message: number;
    organizationId: number;
    state: number;
    type: number;
    updatedAt: number;
    url: number;
}

export class InviteCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class InviteListResponse {
    data?: Nullable<Invite[]>;
    message: string;
    status: boolean;
}

export class InviteMaxAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    inviteeId?: Nullable<string>;
    inviterId?: Nullable<string>;
    message?: Nullable<string>;
    organizationId?: Nullable<string>;
    state?: Nullable<State>;
    type?: Nullable<InviteType>;
    updatedAt?: Nullable<DateTime>;
    url?: Nullable<string>;
}

export class InviteMinAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    inviteeId?: Nullable<string>;
    inviterId?: Nullable<string>;
    message?: Nullable<string>;
    organizationId?: Nullable<string>;
    state?: Nullable<State>;
    type?: Nullable<InviteType>;
    updatedAt?: Nullable<DateTime>;
    url?: Nullable<string>;
}

export class InviteResponse {
    data?: Nullable<Invite>;
    message: string;
    status: boolean;
}

export class LatLng {
    lat: number;
    lng: number;
}

export class LatLngBounds {
    northeast: LatLng;
    southwest: LatLng;
}

export class Location {
    _count?: Nullable<LocationCountOutputType>;
    createdAt: DateTime;
    id: string;
    lat: number;
    lon: number;
    name: string;
    order?: Nullable<Order>;
    organizations: Organization[];
    state: State;
    updatedAt: DateTime;
    users: User[];
}

export class LocationAvgAggregateOutputType {
    lat?: Nullable<number>;
    lon?: Nullable<number>;
}

export class LocationBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class LocationCountAggregateOutputType {
    _all: number;
    createdAt: number;
    id: number;
    lat: number;
    lon: number;
    name: number;
    state: number;
    updatedAt: number;
}

export class LocationCountOutputType {
    organizations: number;
    users: number;
}

export class LocationCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class LocationListResponse {
    data?: Nullable<Location[]>;
    message: string;
    status: boolean;
}

export class LocationMaxAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat?: Nullable<number>;
    lon?: Nullable<number>;
    name?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class LocationMinAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lat?: Nullable<number>;
    lon?: Nullable<number>;
    name?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class LocationResponse {
    data?: Nullable<Location>;
    message: string;
    status: boolean;
}

export class LocationSumAggregateOutputType {
    lat?: Nullable<number>;
    lon?: Nullable<number>;
}

export class MapDistance {
    text?: Nullable<string>;
    value?: Nullable<number>;
}

export class MapDuration {
    text?: Nullable<string>;
    value?: Nullable<number>;
}

export class MapTime {
    text?: Nullable<string>;
    time_zone?: Nullable<string>;
    value?: Nullable<DateTime>;
}

export class MpesaPayment {
    createdAt: DateTime;
    id: string;
    input_Amount: string;
    input_Country: string;
    input_Currency: string;
    input_CustomerMSISDN: string;
    input_PurchasedItemsDesc: string;
    input_ServiceProviderCode: string;
    input_ThirdPartyConversationID: string;
    input_TransactionReference: string;
    order: Order;
    output_ConversationID?: Nullable<string>;
    output_ResponseCode?: Nullable<string>;
    output_ResponseDesc?: Nullable<string>;
    output_ThirdPartyConversationID?: Nullable<string>;
    output_TransactionID?: Nullable<string>;
    state: State;
    transaction?: Nullable<Transaction>;
    updatedAt: DateTime;
}

export class MpesaPaymentBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class MpesaPaymentCountAggregateOutputType {
    _all: number;
    createdAt: number;
    id: number;
    input_Amount: number;
    input_Country: number;
    input_Currency: number;
    input_CustomerMSISDN: number;
    input_PurchasedItemsDesc: number;
    input_ServiceProviderCode: number;
    input_ThirdPartyConversationID: number;
    input_TransactionReference: number;
    output_ConversationID: number;
    output_ResponseCode: number;
    output_ResponseDesc: number;
    output_ThirdPartyConversationID: number;
    output_TransactionID: number;
    state: number;
    updatedAt: number;
}

export class MpesaPaymentCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class MpesaPaymentListResponse {
    data?: Nullable<MpesaPayment[]>;
    message: string;
    status: boolean;
}

export class MpesaPaymentMaxAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    input_Amount?: Nullable<string>;
    input_Country?: Nullable<string>;
    input_Currency?: Nullable<string>;
    input_CustomerMSISDN?: Nullable<string>;
    input_PurchasedItemsDesc?: Nullable<string>;
    input_ServiceProviderCode?: Nullable<string>;
    input_ThirdPartyConversationID?: Nullable<string>;
    input_TransactionReference?: Nullable<string>;
    output_ConversationID?: Nullable<string>;
    output_ResponseCode?: Nullable<string>;
    output_ResponseDesc?: Nullable<string>;
    output_ThirdPartyConversationID?: Nullable<string>;
    output_TransactionID?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class MpesaPaymentMinAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    input_Amount?: Nullable<string>;
    input_Country?: Nullable<string>;
    input_Currency?: Nullable<string>;
    input_CustomerMSISDN?: Nullable<string>;
    input_PurchasedItemsDesc?: Nullable<string>;
    input_ServiceProviderCode?: Nullable<string>;
    input_ThirdPartyConversationID?: Nullable<string>;
    input_TransactionReference?: Nullable<string>;
    output_ConversationID?: Nullable<string>;
    output_ResponseCode?: Nullable<string>;
    output_ResponseDesc?: Nullable<string>;
    output_ThirdPartyConversationID?: Nullable<string>;
    output_TransactionID?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class MpesaPaymentResponse {
    data?: Nullable<MpesaPayment>;
    message: string;
    status: boolean;
}

export abstract class IMutation {
    abstract createOneInvite(data: InviteCreateInput): InviteResponse | Promise<InviteResponse>;

    abstract createOneOrder(data: OrderCreateInput): OrderResponse | Promise<OrderResponse>;

    abstract createOneOrganization(data: OrganizationCreateInput): OrganizationResponse | Promise<OrganizationResponse>;

    abstract createOnePaymentMethod(data: PaymentMethodCreateInput): PaymentMethodResponse | Promise<PaymentMethodResponse>;

    abstract createOneRating(data: RatingCreateInput): RatingResponse | Promise<RatingResponse>;

    abstract createOneService(data: ServiceCreateInput): ServiceResponse | Promise<ServiceResponse>;

    abstract createOneServiceCategory(data: ServiceCategoryCreateInput): ServiceCategoryResponse | Promise<ServiceCategoryResponse>;

    abstract locationFeed(location: LatLon): LocationResponse | Promise<LocationResponse>;

    abstract paybill(data?: Nullable<PaybillRequest>): PaybillResponse | Promise<PaybillResponse>;

    abstract recoverAccount(email: string): AuthResult | Promise<AuthResult>;

    abstract registerDevice(data: RegisterDeviceInput): DeviceResponse | Promise<DeviceResponse>;

    abstract signin(credentials: AuthInput): AuthResult | Promise<AuthResult>;

    abstract signout(): SignOutResult | Promise<SignOutResult>;

    abstract signup(credentials: SignupInput, organization?: Nullable<OrganizationCreateWithoutOwnerInput>): AuthResult | Promise<AuthResult>;

    abstract updateOneInvite(data: InviteUpdateInput, where: InviteWhereUniqueInput): InviteResponse | Promise<InviteResponse>;

    abstract updateOneOrder(data: OrderUpdateInput, where: OrderWhereUniqueInput): OrderResponse | Promise<OrderResponse>;

    abstract updateOneOrganization(data: OrganizationUpdateInput, where: OrganizationWhereUniqueInput): OrganizationResponse | Promise<OrganizationResponse>;

    abstract updateOnePaymentMethod(data: PaymentMethodUpdateInput, where: PaymentMethodWhereUniqueInput): PaymentMethodResponse | Promise<PaymentMethodResponse>;

    abstract updateOneRating(data: RatingUpdateInput, where: RatingWhereUniqueInput): RatingResponse | Promise<RatingResponse>;

    abstract updateOneService(data: ServiceUpdateInput, where: ServiceWhereUniqueInput): ServiceResponse | Promise<ServiceResponse>;

    abstract updateOneServiceCategory(data: ServiceCategoryUpdateInput, where: ServiceCategoryWhereUniqueInput): ServiceCategoryResponse | Promise<ServiceCategoryResponse>;

    abstract updateOneUser(data: UserUpdateInput, where: UserWhereUniqueInput): UserResponse | Promise<UserResponse>;

    abstract version(): Nullable<string> | Promise<Nullable<string>>;
}

export class Notification {
    message?: Nullable<string>;
    notificationType: NotificationType;
    payload?: Nullable<JSONObject>;
}

export class Order {
    createdAt: DateTime;
    deliveryMode: DeliveryMode[];
    id: string;
    location?: Nullable<Location>;
    locationId?: Nullable<string>;
    mpesa_payment?: Nullable<MpesaPayment>;
    notes?: Nullable<string>;
    organization: Organization;
    organizationId: string;
    owner: User;
    ownerId: string;
    provider?: Nullable<User>;
    providerId?: Nullable<string>;
    quantity: number;
    receipt?: Nullable<Attachment>;
    receiptId?: Nullable<string>;
    selcom_payment?: Nullable<SelcomPayment>;
    service: Service;
    serviceId: string;
    state: State;
    updatedAt: DateTime;
}

export class OrderAvgAggregateOutputType {
    quantity?: Nullable<number>;
}

export class OrderBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class OrderCountAggregateOutputType {
    _all: number;
    createdAt: number;
    deliveryMode: number;
    id: number;
    locationId: number;
    notes: number;
    organizationId: number;
    ownerId: number;
    providerId: number;
    quantity: number;
    receiptId: number;
    serviceId: number;
    state: number;
    updatedAt: number;
}

export class OrderCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class OrderListResponse {
    data?: Nullable<Order[]>;
    message: string;
    status: boolean;
}

export class OrderMaxAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    notes?: Nullable<string>;
    organizationId?: Nullable<string>;
    ownerId?: Nullable<string>;
    providerId?: Nullable<string>;
    quantity?: Nullable<number>;
    receiptId?: Nullable<string>;
    serviceId?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderMinAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    notes?: Nullable<string>;
    organizationId?: Nullable<string>;
    ownerId?: Nullable<string>;
    providerId?: Nullable<string>;
    quantity?: Nullable<number>;
    receiptId?: Nullable<string>;
    serviceId?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderResponse {
    data?: Nullable<Order>;
    message: string;
    status: boolean;
}

export class OrderSumAggregateOutputType {
    quantity?: Nullable<number>;
}

export class Organization {
    _count?: Nullable<OrganizationCountOutputType>;
    compoundRating?: Nullable<number>;
    createdAt: DateTime;
    description?: Nullable<string>;
    distance?: Nullable<number>;
    id: string;
    invites: Invite[];
    location: Location;
    locationId: string;
    logo: Attachment;
    logoId: string;
    minPrice?: Nullable<number>;
    name: string;
    offers: ServiceCategory[];
    orders: Order[];
    owner: User;
    ownerId: string;
    ratings: Rating[];
    services: Service[];
    staffs: User[];
    state: State;
    updatedAt: DateTime;
    workCompleted?: Nullable<number>;
}

export class OrganizationBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class OrganizationCountAggregateOutputType {
    _all: number;
    createdAt: number;
    description: number;
    id: number;
    locationId: number;
    logoId: number;
    name: number;
    ownerId: number;
    state: number;
    updatedAt: number;
}

export class OrganizationCountOutputType {
    invites: number;
    offers: number;
    orders: number;
    ratings: number;
    services: number;
    staffs: number;
}

export class OrganizationCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class OrganizationListResponse {
    data?: Nullable<Organization[]>;
    message: string;
    status: boolean;
}

export class OrganizationMaxAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    logoId?: Nullable<string>;
    name?: Nullable<string>;
    ownerId?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationMinAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    logoId?: Nullable<string>;
    name?: Nullable<string>;
    ownerId?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class OrganizationResponse {
    data?: Nullable<Organization>;
    message: string;
    status: boolean;
}

export class PaybillResponse {
    data?: Nullable<Transaction>;
    message: string;
    status: boolean;
}

export class PaymentMethod {
    attachmentId: string;
    createdAt: DateTime;
    description?: Nullable<string>;
    id: string;
    logo: Attachment;
    name: string;
    state: State;
    updatedAt: DateTime;
}

export class PaymentMethodBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class PaymentMethodCountAggregateOutputType {
    _all: number;
    attachmentId: number;
    createdAt: number;
    description: number;
    id: number;
    name: number;
    state: number;
    updatedAt: number;
}

export class PaymentMethodCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class PaymentMethodListResponse {
    data?: Nullable<PaymentMethod[]>;
    message: string;
    status: boolean;
}

export class PaymentMethodMaxAggregateOutputType {
    attachmentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class PaymentMethodMinAggregateOutputType {
    attachmentId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    name?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class PaymentMethodResponse {
    data?: Nullable<PaymentMethod>;
    message: string;
    status: boolean;
}

export class PlaceAutocompleteResponse {
    data?: Nullable<PlaceAutocompleteResponseData>;
    message: string;
    status: boolean;
}

export class PlaceAutocompleteResponseData {
    predictions?: Nullable<Nullable<PlaceAutocompleteResult>[]>;
}

export class PlaceAutocompleteResult {
    description?: Nullable<string>;
    distance_meters?: Nullable<number>;
    matched_substrings?: Nullable<Nullable<PredictionSubstring>[]>;
    place_id?: Nullable<string>;
    structured_formatting?: Nullable<StructuredFormatting>;
    terms?: Nullable<Nullable<PredictionTerm>[]>;
    types?: Nullable<Nullable<string>[]>;
}

export class PlusCode {
    compound__code?: Nullable<string>;
    global_code?: Nullable<string>;
}

export class Polyline {
    points?: Nullable<string>;
}

export class PredictionSubstring {
    offset?: Nullable<number>;
    value?: Nullable<string>;
}

export class PredictionTerm {
    offset?: Nullable<number>;
    value?: Nullable<string>;
}

export abstract class IQuery {
    abstract findFirstOrder(cursor?: Nullable<OrderWhereUniqueInput>, distinct?: Nullable<OrderScalarFieldEnum[]>, orderBy?: Nullable<OrderOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<OrderWhereInput>): OrderResponse | Promise<OrderResponse>;

    abstract findFirstOrganization(cursor?: Nullable<OrganizationWhereUniqueInput>, distinct?: Nullable<OrganizationScalarFieldEnum[]>, orderBy?: Nullable<OrganizationOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<OrganizationWhereInput>): OrganizationResponse | Promise<OrganizationResponse>;

    abstract findFirstPaymentMethod(cursor?: Nullable<PaymentMethodWhereUniqueInput>, distinct?: Nullable<PaymentMethodScalarFieldEnum[]>, orderBy?: Nullable<PaymentMethodOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<PaymentMethodWhereInput>): PaymentMethodResponse | Promise<PaymentMethodResponse>;

    abstract findFirstRating(cursor?: Nullable<RatingWhereUniqueInput>, distinct?: Nullable<RatingScalarFieldEnum[]>, orderBy?: Nullable<RatingOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<RatingWhereInput>): RatingResponse | Promise<RatingResponse>;

    abstract findFirstService(cursor?: Nullable<ServiceWhereUniqueInput>, distinct?: Nullable<ServiceScalarFieldEnum[]>, orderBy?: Nullable<ServiceOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<ServiceWhereInput>): ServiceResponse | Promise<ServiceResponse>;

    abstract findFirstServiceCategory(cursor?: Nullable<ServiceCategoryWhereUniqueInput>, distinct?: Nullable<ServiceCategoryScalarFieldEnum[]>, orderBy?: Nullable<ServiceCategoryOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<ServiceCategoryWhereInput>): ServiceCategoryResponse | Promise<ServiceCategoryResponse>;

    abstract findFirstUser(cursor?: Nullable<UserWhereUniqueInput>, distinct?: Nullable<UserScalarFieldEnum[]>, orderBy?: Nullable<UserOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<UserWhereInput>): UserResponse | Promise<UserResponse>;

    abstract findManyInvite(cursor?: Nullable<InviteWhereUniqueInput>, distinct?: Nullable<InviteScalarFieldEnum[]>, orderBy?: Nullable<InviteOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<InviteWhereInput>): InviteListResponse | Promise<InviteListResponse>;

    abstract findManyOrder(cursor?: Nullable<OrderWhereUniqueInput>, distinct?: Nullable<OrderScalarFieldEnum[]>, orderBy?: Nullable<OrderOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<OrderWhereInput>): OrderListResponse | Promise<OrderListResponse>;

    abstract findManyOrganization(cursor?: Nullable<OrganizationWhereUniqueInput>, distinct?: Nullable<OrganizationScalarFieldEnum[]>, orderBy?: Nullable<OrganizationOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<OrganizationWhereInput>): OrganizationListResponse | Promise<OrganizationListResponse>;

    abstract findManyPaymentMethod(cursor?: Nullable<PaymentMethodWhereUniqueInput>, distinct?: Nullable<PaymentMethodScalarFieldEnum[]>, orderBy?: Nullable<PaymentMethodOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<PaymentMethodWhereInput>): PaymentMethodListResponse | Promise<PaymentMethodListResponse>;

    abstract findManyRating(cursor?: Nullable<RatingWhereUniqueInput>, distinct?: Nullable<RatingScalarFieldEnum[]>, orderBy?: Nullable<RatingOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<RatingWhereInput>): RatingListResponse | Promise<RatingListResponse>;

    abstract findManyService(cursor?: Nullable<ServiceWhereUniqueInput>, distinct?: Nullable<ServiceScalarFieldEnum[]>, orderBy?: Nullable<ServiceOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<ServiceWhereInput>): ServiceListResponse | Promise<ServiceListResponse>;

    abstract findManyServiceCategory(cursor?: Nullable<ServiceCategoryWhereUniqueInput>, distinct?: Nullable<ServiceCategoryScalarFieldEnum[]>, orderBy?: Nullable<ServiceCategoryOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<ServiceCategoryWhereInput>): ServiceCategoryListResponse | Promise<ServiceCategoryListResponse>;

    abstract findManyUser(cursor?: Nullable<UserWhereUniqueInput>, distinct?: Nullable<UserScalarFieldEnum[]>, orderBy?: Nullable<UserOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<UserWhereInput>): UserListResponse | Promise<UserListResponse>;

    abstract findUniqueInvite(where: InviteWhereUniqueInput): InviteResponse | Promise<InviteResponse>;

    abstract findUniqueOrder(where: OrderWhereUniqueInput): OrderResponse | Promise<OrderResponse>;

    abstract findUniqueOrganization(where: OrganizationWhereUniqueInput): OrganizationResponse | Promise<OrganizationResponse>;

    abstract findUniquePaymentMethod(where: PaymentMethodWhereUniqueInput): PaymentMethodResponse | Promise<PaymentMethodResponse>;

    abstract findUniqueRating(where: RatingWhereUniqueInput): RatingResponse | Promise<RatingResponse>;

    abstract findUniqueService(where: ServiceWhereUniqueInput): ServiceResponse | Promise<ServiceResponse>;

    abstract findUniqueServiceCategory(where: ServiceCategoryWhereUniqueInput): ServiceCategoryResponse | Promise<ServiceCategoryResponse>;

    abstract findUniqueUser(where: UserWhereUniqueInput): UserResponse | Promise<UserResponse>;

    abstract geocode(data: GeocodeInput): GeocodeResponse | Promise<GeocodeResponse>;

    abstract placesAutocomplete(data?: Nullable<PlaceAutocompleteInput>): PlaceAutocompleteResponse | Promise<PlaceAutocompleteResponse>;

    abstract reverseGeocode(data: ReverseGeocodeInput): ReverseGeocodeResponse | Promise<ReverseGeocodeResponse>;

    abstract route(data: RouteQueryInput): RouteResponse | Promise<RouteResponse>;

    abstract version(): Nullable<string> | Promise<Nullable<string>>;
}

export class Rating {
    comment?: Nullable<string>;
    createdAt: DateTime;
    id: string;
    organization?: Nullable<Organization>;
    organizationId?: Nullable<string>;
    owner: User;
    ownerId: string;
    updatedAt: DateTime;
    user?: Nullable<User>;
    userId?: Nullable<string>;
    value: number;
}

export class RatingAvgAggregateOutputType {
    value?: Nullable<number>;
}

export class RatingBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class RatingCountAggregateOutputType {
    _all: number;
    comment: number;
    createdAt: number;
    id: number;
    organizationId: number;
    ownerId: number;
    updatedAt: number;
    userId: number;
    value: number;
}

export class RatingCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class RatingListResponse {
    data?: Nullable<Rating[]>;
    message: string;
    status: boolean;
}

export class RatingMaxAggregateOutputType {
    comment?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    organizationId?: Nullable<string>;
    ownerId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    value?: Nullable<number>;
}

export class RatingMinAggregateOutputType {
    comment?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    organizationId?: Nullable<string>;
    ownerId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
    value?: Nullable<number>;
}

export class RatingResponse {
    data?: Nullable<Rating>;
    message: string;
    status: boolean;
}

export class RatingSumAggregateOutputType {
    value?: Nullable<number>;
}

export class ReverseGeocodeResponse {
    data?: Nullable<ReverseGeocodeResponseData>;
    message: string;
    status: boolean;
}

export class ReverseGeocodeResponseData {
    results?: Nullable<Nullable<GeocodeResult>[]>;
}

export class RouteLeg {
    arrival_time?: Nullable<MapTime>;
    departure_time?: Nullable<MapTime>;
    distance?: Nullable<MapDistance>;
    duration?: Nullable<MapDuration>;
    duration_in_traffic?: Nullable<MapDuration>;
    end_address?: Nullable<string>;
    end_location?: Nullable<LatLng>;
    start_address?: Nullable<string>;
    start_location?: Nullable<LatLng>;
    steps?: Nullable<Nullable<DirectionsStep>[]>;
}

export class RouteResponse {
    data?: Nullable<DirectionsResponseData>;
    message: string;
    status: boolean;
}

export class SelcomDisbursement {
    amount: number;
    createdAt: DateTime;
    id: string;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state: State;
    status: SelcomPaymentStatus;
    transId: string;
    transaction?: Nullable<Transaction>;
    updatedAt: DateTime;
    userId: number;
    utilitycode: SelcomUtilityCode;
    utilityref: string;
    validation: SelcomPaymentStatus;
}

export class SelcomDisbursementAvgAggregateOutputType {
    amount?: Nullable<number>;
    userId?: Nullable<number>;
}

export class SelcomDisbursementBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class SelcomDisbursementCountAggregateOutputType {
    _all: number;
    amount: number;
    createdAt: number;
    id: number;
    reference: number;
    resultCode: number;
    state: number;
    status: number;
    transId: number;
    updatedAt: number;
    userId: number;
    utilitycode: number;
    utilityref: number;
    validation: number;
}

export class SelcomDisbursementCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class SelcomDisbursementListResponse {
    data?: Nullable<SelcomDisbursement[]>;
    message: string;
    status: boolean;
}

export class SelcomDisbursementMaxAggregateOutputType {
    amount?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<number>;
    utilitycode?: Nullable<SelcomUtilityCode>;
    utilityref?: Nullable<string>;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomDisbursementMinAggregateOutputType {
    amount?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<number>;
    utilitycode?: Nullable<SelcomUtilityCode>;
    utilityref?: Nullable<string>;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomDisbursementResponse {
    data?: Nullable<SelcomDisbursement>;
    message: string;
    status: boolean;
}

export class SelcomDisbursementSumAggregateOutputType {
    amount?: Nullable<number>;
    userId?: Nullable<number>;
}

export class SelcomPayment {
    amount: number;
    createdAt: DateTime;
    id: string;
    msisdn: string;
    operator?: Nullable<string>;
    order: Order;
    orderId: string;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state: State;
    status: SelcomPaymentStatus;
    transId: string;
    transaction?: Nullable<Transaction>;
    updatedAt: DateTime;
    utilityref: number;
    validation: SelcomPaymentStatus;
}

export class SelcomPaymentAvgAggregateOutputType {
    amount?: Nullable<number>;
    utilityref?: Nullable<number>;
}

export class SelcomPaymentBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class SelcomPaymentCountAggregateOutputType {
    _all: number;
    amount: number;
    createdAt: number;
    id: number;
    msisdn: number;
    operator: number;
    orderId: number;
    reference: number;
    resultCode: number;
    state: number;
    status: number;
    transId: number;
    updatedAt: number;
    utilityref: number;
    validation: number;
}

export class SelcomPaymentCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class SelcomPaymentListResponse {
    data?: Nullable<SelcomPayment[]>;
    message: string;
    status: boolean;
}

export class SelcomPaymentMaxAggregateOutputType {
    amount?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    msisdn?: Nullable<string>;
    operator?: Nullable<string>;
    orderId?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    utilityref?: Nullable<number>;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomPaymentMinAggregateOutputType {
    amount?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    msisdn?: Nullable<string>;
    operator?: Nullable<string>;
    orderId?: Nullable<string>;
    reference?: Nullable<string>;
    resultCode?: Nullable<string>;
    state?: Nullable<State>;
    status?: Nullable<SelcomPaymentStatus>;
    transId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    utilityref?: Nullable<number>;
    validation?: Nullable<SelcomPaymentStatus>;
}

export class SelcomPaymentResponse {
    data?: Nullable<SelcomPayment>;
    message: string;
    status: boolean;
}

export class SelcomPaymentSumAggregateOutputType {
    amount?: Nullable<number>;
    utilityref?: Nullable<number>;
}

export class Service {
    _count?: Nullable<ServiceCountOutputType>;
    category: ServiceCategory;
    createdAt: DateTime;
    description?: Nullable<string>;
    id: string;
    image: Attachment;
    imageId: string;
    name: string;
    orders: Order[];
    organization: Organization;
    organizationId: string;
    price: number;
    serviceCategoryId: string;
    state: State;
    updatedAt: DateTime;
}

export class ServiceAvgAggregateOutputType {
    price?: Nullable<number>;
}

export class ServiceBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class ServiceCategory {
    _count?: Nullable<ServiceCategoryCountOutputType>;
    createdAt: DateTime;
    id: string;
    image: Attachment;
    imageId: string;
    name: string;
    organizations: Organization[];
    services: Service[];
    state: State;
    updatedAt: DateTime;
}

export class ServiceCategoryBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class ServiceCategoryCountAggregateOutputType {
    _all: number;
    createdAt: number;
    id: number;
    imageId: number;
    name: number;
    state: number;
    updatedAt: number;
}

export class ServiceCategoryCountOutputType {
    organizations: number;
    services: number;
}

export class ServiceCategoryCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class ServiceCategoryListResponse {
    data?: Nullable<ServiceCategory[]>;
    message: string;
    status: boolean;
}

export class ServiceCategoryMaxAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    imageId?: Nullable<string>;
    name?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCategoryMinAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    imageId?: Nullable<string>;
    name?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceCategoryResponse {
    data?: Nullable<ServiceCategory>;
    message: string;
    status: boolean;
}

export class ServiceCountAggregateOutputType {
    _all: number;
    createdAt: number;
    description: number;
    id: number;
    imageId: number;
    name: number;
    organizationId: number;
    price: number;
    serviceCategoryId: number;
    state: number;
    updatedAt: number;
}

export class ServiceCountOutputType {
    orders: number;
}

export class ServiceCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class ServiceListResponse {
    data?: Nullable<Service[]>;
    message: string;
    status: boolean;
}

export class ServiceMaxAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId?: Nullable<string>;
    name?: Nullable<string>;
    organizationId?: Nullable<string>;
    price?: Nullable<number>;
    serviceCategoryId?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceMinAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageId?: Nullable<string>;
    name?: Nullable<string>;
    organizationId?: Nullable<string>;
    price?: Nullable<number>;
    serviceCategoryId?: Nullable<string>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class ServiceResponse {
    data?: Nullable<Service>;
    message: string;
    status: boolean;
}

export class ServiceSumAggregateOutputType {
    price?: Nullable<number>;
}

export class SignOutResult {
    message?: Nullable<string>;
    status?: Nullable<boolean>;
}

export class StructuredFormatting {
    main_text?: Nullable<string>;
    main_text_matched_substrings?: Nullable<Nullable<PredictionSubstring>[]>;
    secondary_text?: Nullable<string>;
}

export abstract class ISubscription {
    abstract invites(where?: Nullable<InviteWhereInput>): InviteResponse | Promise<InviteResponse>;

    abstract locations(where: UserWhereUniqueInput): LocationResponse | Promise<LocationResponse>;

    abstract orders(where?: Nullable<OrderWhereInput>): OrderResponse | Promise<OrderResponse>;

    abstract ratings(where?: Nullable<RatingWhereInput>): RatingResponse | Promise<RatingResponse>;
}

export class Transaction {
    createdAt: DateTime;
    id: string;
    initiator: User;
    mpesaPayment?: Nullable<MpesaPayment>;
    mpesaPaymentId?: Nullable<string>;
    paymentMethode: string;
    selcomDisbursement?: Nullable<SelcomDisbursement>;
    selcomDisbursementId?: Nullable<string>;
    selcomPayment?: Nullable<SelcomPayment>;
    selcomPaymentId?: Nullable<string>;
    state: State;
    type: TransactionType;
    updatedAt: DateTime;
    userId: string;
}

export class TransactionBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class TransactionCountAggregateOutputType {
    _all: number;
    createdAt: number;
    id: number;
    mpesaPaymentId: number;
    paymentMethode: number;
    selcomDisbursementId: number;
    selcomPaymentId: number;
    state: number;
    type: number;
    updatedAt: number;
    userId: number;
}

export class TransactionCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class TransactionListResponse {
    data?: Nullable<Transaction[]>;
    message: string;
    status: boolean;
}

export class TransactionMaxAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    paymentMethode?: Nullable<string>;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<State>;
    type?: Nullable<TransactionType>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class TransactionMinAggregateOutputType {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    mpesaPaymentId?: Nullable<string>;
    paymentMethode?: Nullable<string>;
    selcomDisbursementId?: Nullable<string>;
    selcomPaymentId?: Nullable<string>;
    state?: Nullable<State>;
    type?: Nullable<TransactionType>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class TransactionResponse {
    data?: Nullable<Transaction>;
    message: string;
    status: boolean;
}

export class TransitAgency {
    name?: Nullable<string>;
    phone?: Nullable<string>;
    url?: Nullable<string>;
}

export class TransitDetails {
    arrival_stop?: Nullable<TransitStop>;
    arrival_time?: Nullable<MapTime>;
    departure_stop?: Nullable<TransitStop>;
    departure_time?: Nullable<MapTime>;
    headsign?: Nullable<string>;
    headway?: Nullable<number>;
    line?: Nullable<TransitLine>;
    num_stops?: Nullable<number>;
}

export class TransitFare {
    currency?: Nullable<string>;
    text?: Nullable<string>;
    value?: Nullable<number>;
}

export class TransitLine {
    agencies?: Nullable<Nullable<TransitAgency>[]>;
    color?: Nullable<string>;
    icon?: Nullable<string>;
    name?: Nullable<string>;
    short_name?: Nullable<string>;
    text_color?: Nullable<string>;
    url?: Nullable<string>;
    vehicle?: Nullable<TransitVehicle>;
}

export class TransitStop {
    location?: Nullable<LatLng>;
    name?: Nullable<string>;
}

export class TransitVehicle {
    icon?: Nullable<string>;
    local_icon?: Nullable<string>;
    name?: Nullable<string>;
    type?: Nullable<VehicleType>;
}

export class User {
    _count?: Nullable<UserCountOutputType>;
    avator?: Nullable<Attachment>;
    avatorId?: Nullable<string>;
    createdAt: DateTime;
    dateOfBirth?: Nullable<DateTime>;
    device?: Nullable<Device>;
    disabled: boolean;
    displayName: string;
    email: string;
    emailVerified: boolean;
    gender: Gender;
    id: string;
    invited: Invite[];
    invites: Invite[];
    lastSeen?: Nullable<DateTime>;
    location?: Nullable<Location>;
    locationId?: Nullable<string>;
    orders: Order[];
    organizationId?: Nullable<string>;
    organizations: Organization[];
    phoneNumber?: Nullable<string>;
    provides: Order[];
    rated: Rating[];
    ratings: Rating[];
    role: Role;
    staffOf: Organization[];
    state: State;
    transactions: Transaction[];
    updatedAt: DateTime;
}

export class UserBatchResponse {
    data?: Nullable<BatchPayload>;
    message: string;
    status: boolean;
}

export class UserCountAggregateOutputType {
    _all: number;
    avatorId: number;
    createdAt: number;
    dateOfBirth: number;
    disabled: number;
    displayName: number;
    email: number;
    emailVerified: number;
    gender: number;
    id: number;
    locationId: number;
    organizationId: number;
    phoneNumber: number;
    role: number;
    state: number;
    updatedAt: number;
}

export class UserCountOutputType {
    invited: number;
    invites: number;
    orders: number;
    organizations: number;
    provides: number;
    rated: number;
    ratings: number;
    staffOf: number;
    transactions: number;
}

export class UserCountResponse {
    data?: Nullable<number>;
    message: string;
    status: boolean;
}

export class UserListResponse {
    data?: Nullable<User[]>;
    message: string;
    status: boolean;
}

export class UserMaxAggregateOutputType {
    avatorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    disabled?: Nullable<boolean>;
    displayName?: Nullable<string>;
    email?: Nullable<string>;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    organizationId?: Nullable<string>;
    phoneNumber?: Nullable<string>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserMinAggregateOutputType {
    avatorId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    dateOfBirth?: Nullable<DateTime>;
    disabled?: Nullable<boolean>;
    displayName?: Nullable<string>;
    email?: Nullable<string>;
    emailVerified?: Nullable<boolean>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    locationId?: Nullable<string>;
    organizationId?: Nullable<string>;
    phoneNumber?: Nullable<string>;
    role?: Nullable<Role>;
    state?: Nullable<State>;
    updatedAt?: Nullable<DateTime>;
}

export class UserResponse {
    data?: Nullable<User>;
    message: string;
    status: boolean;
}

export type DateTime = string;
export type JSONObject = any;
export type Upload = Promise < FileUpload >;
type Nullable<T> = T | null;
