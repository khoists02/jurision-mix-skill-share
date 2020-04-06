export class VideoModel {
  constructor(
    resourceId,
    referenceItemId,
    resourceType,
    resourceCode,
    resourceDescription,
    imageVM,
    lengthInSeconds,
    sequentialOrder,
    ownedResource,
    totalViews,
    totalLikes,
    totalComments,
    createdDateTime,
    channelShortInfo,
    availableCreditInfo,
    ownerGroupId,
    privateResource,
    privateResource,
    allowedGroupTeams
  ) {
    this.resourceId = resourceId;
    this.referenceItemId = referenceItemId;
    this.resourceType = resourceType;
    this.resourceCode = resourceCode;
    this.esourceDescription = esourceDescription;
    this.imageVM = imageVM;
    this.lengthInSeconds = lengthInSeconds;
    this.sequentialOrder = sequentialOrder;
    this.ownedResource = ownedResource;
    this.totalViews = totalViews;
    this.totalLikes = totalLikes;
    this.totalComments = totalComments;
    this.createdDateTime = createdDateTime;
    this.channelShortInfo = channelShortInfo;
    this.availableCreditInfo = availableCreditInfo;
    this.ownerGroupId = ownerGroupId;
    this.privateResource = privateResource;
    this.allowedGroupTeams = allowedGroupTeams;
  }
}