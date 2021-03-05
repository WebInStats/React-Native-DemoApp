//
//  NotificationService.m
//  HelloReactNotificationExtension
//
//  Created by Fatma Selin Hangişi on 19.02.2021.
//

#import "NotificationService.h"
@import iOS_wis;

@interface NotificationService ()

@property (nonatomic, strong) void (^contentHandler)(UNNotificationContent *contentToDeliver);
@property (nonatomic, strong) UNMutableNotificationContent *bestAttemptContent;

@end

@implementation NotificationService

- (void)didReceiveNotificationRequest:(UNNotificationRequest *)request withContentHandler:(void (^)(UNNotificationContent * _Nonnull))contentHandler {
    self.contentHandler = contentHandler;
    self.bestAttemptContent = [request.content mutableCopy];

    // Modify the notification content here...
  if(_bestAttemptContent){
          contentHandler([[[Webinstats alloc] init:@"//__YOUR_SUBDOMAIN__.webinstats.com/" :@"___YOUR_COMPANY_ID___" :@"0"] didReceiveNotificationExtension:request :_bestAttemptContent]);
      }
}

- (void)serviceExtensionTimeWillExpire {
    // Called just before the extension will be terminated by the system.
    // Use this as an opportunity to deliver your "best attempt" at modified content, otherwise the original push payload will be used.
    self.contentHandler(self.bestAttemptContent);
}

@end
