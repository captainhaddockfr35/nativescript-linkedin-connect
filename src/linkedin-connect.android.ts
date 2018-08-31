
import { Common } from './linkedin-connect.common';
import * as app from 'tns-core-modules/application';

/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module linkedin {
		export module android {
			export module mobilesdk {
				export class BuildConfig {
					public static class: java.lang.Class<com.linkedin.android.mobilesdk.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module linkedin {
		export module platform {
			export class APIHelper {
				public static class: java.lang.Class<com.linkedin.platform.APIHelper>;
				public postRequest(param0: globalAndroid.content.Context, param1: string, param2: org.json.JSONObject, param3: com.linkedin.platform.listeners.ApiListener): void;
				public putRequest(param0: globalAndroid.content.Context, param1: string, param2: org.json.JSONObject, param3: com.linkedin.platform.listeners.ApiListener): void;
				public getRequest(param0: globalAndroid.content.Context, param1: string, param2: com.linkedin.platform.listeners.ApiListener): void;
				public deleteRequest(param0: globalAndroid.content.Context, param1: string, param2: com.linkedin.platform.listeners.ApiListener): void;
				public postRequest(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.linkedin.platform.listeners.ApiListener): void;
				public static getInstance(param0: globalAndroid.content.Context): com.linkedin.platform.APIHelper;
				public cancelCalls(param0: globalAndroid.content.Context): void;
				public putRequest(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.linkedin.platform.listeners.ApiListener): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module linkedin {
		export module platform {
			export class AccessToken {
				public static class: java.lang.Class<com.linkedin.platform.AccessToken>;
				public static buildAccessToken(param0: string): com.linkedin.platform.AccessToken;
				public getExpiresOn(): number;
				public isExpired(): boolean;
				public static buildAccessToken(param0: org.json.JSONObject): com.linkedin.platform.AccessToken;
				public constructor(param0: string, param1: number);
				public getValue(): string;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module linkedin {
		export module platform {
			export class DeepLinkHelper {
				public static class: java.lang.Class<com.linkedin.platform.DeepLinkHelper>;
				public static LI_SDK_CROSSLINK_REQUEST_CODE: number;
				public openCurrentProfile(param0: globalAndroid.app.Activity, param1: com.linkedin.platform.listeners.DeepLinkListener): void;
				public openOtherProfile(param0: globalAndroid.app.Activity, param1: string, param2: com.linkedin.platform.listeners.DeepLinkListener): void;
				public static getInstance(): com.linkedin.platform.DeepLinkHelper;
				public onActivityResult(param0: globalAndroid.app.Activity, param1: number, param2: number, param3: globalAndroid.content.Intent): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module linkedin {
		export module platform {
			export class LISession {
				public static class: java.lang.Class<com.linkedin.platform.LISession>;
				/**
				 * Constructs a new instance of the com.linkedin.platform.LISession interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getAccessToken(): com.linkedin.platform.AccessToken;
					isValid(): boolean;
				});
				public constructor();
				public getAccessToken(): com.linkedin.platform.AccessToken;
				public isValid(): boolean;
			}
		}
	}
}

declare module com {
	export module linkedin {
		export module platform {
			export class LISessionManager {
				public static class: java.lang.Class<com.linkedin.platform.LISessionManager>;
				public init(param0: com.linkedin.platform.AccessToken): void;
				public clearSession(): void;
				public init(param0: globalAndroid.app.Activity, param1: com.linkedin.platform.utils.Scope, param2: com.linkedin.platform.listeners.AuthListener, param3: boolean): void;
				public onActivityResult(param0: globalAndroid.app.Activity, param1: number, param2: number, param3: globalAndroid.content.Intent): void;
				public static getInstance(param0: globalAndroid.content.Context): com.linkedin.platform.LISessionManager;
				public getSession(): com.linkedin.platform.LISession;
			}
			export module LISessionManager {
				export class LISessionImpl extends com.linkedin.platform.LISession {
					public static class: java.lang.Class<com.linkedin.platform.LISessionManager.LISessionImpl>;
					public constructor();
					public isValid(): boolean;
					public getAccessToken(): com.linkedin.platform.AccessToken;
					public clear(): void;
				}
			}
		}
	}
}

declare module com {
	export module linkedin {
		export module platform {
			export module errors {
				export class ApiErrorResponse {
					public static class: java.lang.Class<com.linkedin.platform.errors.ApiErrorResponse>;
					public static ERROR_CODE: string;
					public static MESSAGE: string;
					public static REQUEST_ID: string;
					public static STATUS: string;
					public static TIMESTAMP: string;
					public errorCode: number;
					public message: string;
					public requestId: string;
					public status: number;
					public timestamp: number;
					public toString(): string;
					public getRequestId(): string;
					public getTimestamp(): number;
					public getErrorCode(): number;
					public getMessage(): string;
					public static build(param0: org.json.JSONObject): com.linkedin.platform.errors.ApiErrorResponse;
					public static build(param0: native.Array<number>): com.linkedin.platform.errors.ApiErrorResponse;
					public getStatus(): number;
				}
			}
		}
	}
}

declare module com {
	export module linkedin {
		export module platform {
			export module errors {
				export class LIApiError {
					public static class: java.lang.Class<com.linkedin.platform.errors.LIApiError>;
					public getHttpStatusCode(): number;
					public constructor(param0: com.android.volley.VolleyError);
					public toString(): string;
					public constructor(param0: string, param1: java.lang.Throwable);
					public getApiErrorResponse(): com.linkedin.platform.errors.ApiErrorResponse;
					public getErrorType(): com.linkedin.platform.errors.LIApiError.ErrorType;
					public static buildLiApiError(param0: com.android.volley.VolleyError): com.linkedin.platform.errors.LIApiError;
					public constructor(param0: com.linkedin.platform.errors.LIApiError.ErrorType, param1: string, param2: java.lang.Throwable);
				}
				export module LIApiError {
					export class ErrorType {
						public static class: java.lang.Class<com.linkedin.platform.errors.LIApiError.ErrorType>;
						public static accessTokenIsNotSet: com.linkedin.platform.errors.LIApiError.ErrorType;
						public static apiErrorResponse: com.linkedin.platform.errors.LIApiError.ErrorType;
						public static other: com.linkedin.platform.errors.LIApiError.ErrorType;
						public static valueOf(param0: string): com.linkedin.platform.errors.LIApiError.ErrorType;
						public static values(): native.Array<com.linkedin.platform.errors.LIApiError.ErrorType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module linkedin {
		export module platform {
			export module errors {
				export class LIAppErrorCode {
					public static class: java.lang.Class<com.linkedin.platform.errors.LIAppErrorCode>;
					public static NONE: com.linkedin.platform.errors.LIAppErrorCode;
					public static INVALID_REQUEST: com.linkedin.platform.errors.LIAppErrorCode;
					public static NETWORK_UNAVAILABLE: com.linkedin.platform.errors.LIAppErrorCode;
					public static USER_CANCELLED: com.linkedin.platform.errors.LIAppErrorCode;
					public static UNKNOWN_ERROR: com.linkedin.platform.errors.LIAppErrorCode;
					public static SERVER_ERROR: com.linkedin.platform.errors.LIAppErrorCode;
					public static LINKEDIN_APP_NOT_FOUND: com.linkedin.platform.errors.LIAppErrorCode;
					public static NOT_AUTHENTICATED: com.linkedin.platform.errors.LIAppErrorCode;
					public static values(): native.Array<com.linkedin.platform.errors.LIAppErrorCode>;
					public static valueOf(param0: string): com.linkedin.platform.errors.LIAppErrorCode;
					public getDescription(): string;
					public static findErrorCode(param0: string): com.linkedin.platform.errors.LIAppErrorCode;
				}
			}
		}
	}
}

declare module com {
	export module linkedin {
		export module platform {
			export module errors {
				export class LIAuthError {
					public static class: java.lang.Class<com.linkedin.platform.errors.LIAuthError>;
					public constructor(param0: string, param1: string);
					public toString(): string;
					public constructor(param0: com.linkedin.platform.errors.LIAppErrorCode, param1: string);
				}
			}
		}
	}
}

declare module com {
	export module linkedin {
		export module platform {
			export module errors {
				export class LIDeepLinkError {
					public static class: java.lang.Class<com.linkedin.platform.errors.LIDeepLinkError>;
					public constructor(param0: string, param1: string);
					public toString(): string;
					public constructor(param0: com.linkedin.platform.errors.LIAppErrorCode, param1: string);
				}
			}
		}
	}
}

declare module com {
	export module linkedin {
		export module platform {
			export module internals {
				export class AppStore {
					public static class: java.lang.Class<com.linkedin.platform.internals.AppStore>;
					public static goAppStore(param0: globalAndroid.app.Activity, param1: boolean): void;
					public constructor();
				}
				export module AppStore {
					export class SupportedAppStore {
						public static class: java.lang.Class<com.linkedin.platform.internals.AppStore.SupportedAppStore>;
						public static amazonAppstore: com.linkedin.platform.internals.AppStore.SupportedAppStore;
						public static googlePlay: com.linkedin.platform.internals.AppStore.SupportedAppStore;
						public static samsungApps: com.linkedin.platform.internals.AppStore.SupportedAppStore;
						public getAppStoreUri(): string;
						public getDeviceManufacturer(): string;
						public static fromDeviceManufacturer(): com.linkedin.platform.internals.AppStore.SupportedAppStore;
						public static values(): native.Array<com.linkedin.platform.internals.AppStore.SupportedAppStore>;
						public static valueOf(param0: string): com.linkedin.platform.internals.AppStore.SupportedAppStore;
					}
				}
			}
		}
	}
}

declare module com {
	export module linkedin {
		export module platform {
			export module internals {
				export class BuildConfig {
					public static class: java.lang.Class<com.linkedin.platform.internals.BuildConfig>;
					public static MSDK_VERSION: string;
					public static LI_APP_SUPPORTED_VER_CODE: number;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module linkedin {
		export module platform {
			export module internals {
				export class LIAppVersion {
					public static class: java.lang.Class<com.linkedin.platform.internals.LIAppVersion>;
					public static LI_APP_PACKAGE_NAME: string;
					public constructor();
					public static isLIAppCurrent(param0: globalAndroid.content.Context): boolean;
				}
			}
		}
	}
}

declare module com {
	export module linkedin {
		export module platform {
			export module internals {
				export class QueueManager {
					public static class: java.lang.Class<com.linkedin.platform.internals.QueueManager>;
					public getRequestQueue(): com.android.volley.RequestQueue;
					public static initQueueManager(param0: globalAndroid.content.Context): void;
					public static getInstance(param0: globalAndroid.content.Context): com.linkedin.platform.internals.QueueManager;
				}
			}
		}
	}
}

declare module com {
	export module linkedin {
		export module platform {
			export module listeners {
				export class ApiListener {
					public static class: java.lang.Class<com.linkedin.platform.listeners.ApiListener>;
					/**
					 * Constructs a new instance of the com.linkedin.platform.listeners.ApiListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onApiSuccess(param0: com.linkedin.platform.listeners.ApiResponse): void;
						onApiError(param0: com.linkedin.platform.errors.LIApiError): void;
					});
					public constructor();
					public onApiError(param0: com.linkedin.platform.errors.LIApiError): void;
					public onApiSuccess(param0: com.linkedin.platform.listeners.ApiResponse): void;
				}
			}
		}
	}
}

declare module com {
	export module linkedin {
		export module platform {
			export module listeners {
				export class ApiResponse {
					public static class: java.lang.Class<com.linkedin.platform.listeners.ApiResponse>;
					public getStatusCode(): number;
					public toString(): string;
					public constructor(param0: number, param1: string, param2: string);
					public static buildApiResponse(param0: org.json.JSONObject): com.linkedin.platform.listeners.ApiResponse;
					public getLocationHeader(): string;
					public getResponseDataAsJson(): org.json.JSONObject;
					public getResponseDataAsString(): string;
				}
			}
		}
	}
}

declare module com {
	export module linkedin {
		export module platform {
			export module listeners {
				export class AuthListener {
					public static class: java.lang.Class<com.linkedin.platform.listeners.AuthListener>;
					/**
					 * Constructs a new instance of the com.linkedin.platform.listeners.AuthListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAuthSuccess(): void;
						onAuthError(param0: com.linkedin.platform.errors.LIAuthError): void;
					});
					public constructor();
					public onAuthError(param0: com.linkedin.platform.errors.LIAuthError): void;
					public onAuthSuccess(): void;
				}
			}
		}
	}
}

declare module com {
	export module linkedin {
		export module platform {
			export module listeners {
				export class DeepLinkListener {
					public static class: java.lang.Class<com.linkedin.platform.listeners.DeepLinkListener>;
					/**
					 * Constructs a new instance of the com.linkedin.platform.listeners.DeepLinkListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDeepLinkSuccess(): void;
						onDeepLinkError(param0: com.linkedin.platform.errors.LIDeepLinkError): void;
					});
					public constructor();
					public onDeepLinkError(param0: com.linkedin.platform.errors.LIDeepLinkError): void;
					public onDeepLinkSuccess(): void;
				}
			}
		}
	}
}

declare module com {
	export module linkedin {
		export module platform {
			export module utils {
				export class Scope {
					public static class: java.lang.Class<com.linkedin.platform.utils.Scope>;
					public static R_BASICPROFILE: com.linkedin.platform.utils.Scope.LIPermission;
					public static R_FULLPROFILE: com.linkedin.platform.utils.Scope.LIPermission;
					public static R_EMAILADDRESS: com.linkedin.platform.utils.Scope.LIPermission;
					public static R_CONTACTINFO: com.linkedin.platform.utils.Scope.LIPermission;
					public static RW_COMPANY_ADMIN: com.linkedin.platform.utils.Scope.LIPermission;
					public static W_SHARE: com.linkedin.platform.utils.Scope.LIPermission;
					public createScope(): string;
					public toString(): string;
					public static build(param0: native.Array<com.linkedin.platform.utils.Scope.LIPermission>): com.linkedin.platform.utils.Scope;
				}
				export module Scope {
					export class LIPermission {
						public static class: java.lang.Class<com.linkedin.platform.utils.Scope.LIPermission>;
						public constructor(param0: string, param1: string);
						public getDescription(): string;
						public getName(): string;
					}
				}
			}
		}
	}
}

//Generics information:

declare module com {
	export module android {
		export module volley {
			export class AuthFailureError extends com.android.volley.VolleyError {
				public static class: java.lang.Class<com.android.volley.AuthFailureError>;
				public constructor(param0: globalAndroid.content.Intent);
				public constructor(param0: com.android.volley.NetworkResponse);
				public getResolutionIntent(): globalAndroid.content.Intent;
				public constructor(param0: string, param1: java.lang.Exception);
				public constructor(param0: string, param1: java.lang.Throwable);
				public getMessage(): string;
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export class BuildConfig {
				public static class: java.lang.Class<com.android.volley.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export class Cache {
				public static class: java.lang.Class<com.android.volley.Cache>;
				/**
				 * Constructs a new instance of the com.android.volley.Cache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					get(param0: string): com.android.volley.Cache.Entry;
					put(param0: string, param1: com.android.volley.Cache.Entry): void;
					initialize(): void;
					invalidate(param0: string, param1: boolean): void;
					remove(param0: string): void;
					clear(): void;
				});
				public constructor();
				public get(param0: string): com.android.volley.Cache.Entry;
				public invalidate(param0: string, param1: boolean): void;
				public put(param0: string, param1: com.android.volley.Cache.Entry): void;
				public initialize(): void;
				public remove(param0: string): void;
				public clear(): void;
			}
			export module Cache {
				export class Entry {
					public static class: java.lang.Class<com.android.volley.Cache.Entry>;
					public data: native.Array<number>;
					public etag: string;
					public serverDate: number;
					public lastModified: number;
					public ttl: number;
					public softTtl: number;
					public responseHeaders: java.util.Map<string,string>;
					public allResponseHeaders: java.util.List<com.android.volley.Header>;
					public constructor();
					public isExpired(): boolean;
					public refreshNeeded(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export class CacheDispatcher {
				public static class: java.lang.Class<com.android.volley.CacheDispatcher>;
				public quit(): void;
				public run(): void;
				public constructor(param0: java.util.concurrent.BlockingQueue<com.android.volley.Request<any>>, param1: java.util.concurrent.BlockingQueue<com.android.volley.Request<any>>, param2: com.android.volley.Cache, param3: com.android.volley.ResponseDelivery);
			}
			export module CacheDispatcher {
				export class WaitingRequestManager extends com.android.volley.Request.NetworkRequestCompleteListener {
					public static class: java.lang.Class<com.android.volley.CacheDispatcher.WaitingRequestManager>;
					public onResponseReceived(param0: com.android.volley.Request<any>, param1: com.android.volley.Response<any>): void;
					public onNoUsableResponseReceived(param0: com.android.volley.Request<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export class ClientError extends com.android.volley.ServerError {
				public static class: java.lang.Class<com.android.volley.ClientError>;
				public constructor(param0: com.android.volley.NetworkResponse);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export class DefaultRetryPolicy extends com.android.volley.RetryPolicy {
				public static class: java.lang.Class<com.android.volley.DefaultRetryPolicy>;
				public static DEFAULT_TIMEOUT_MS: number;
				public static DEFAULT_MAX_RETRIES: number;
				public static DEFAULT_BACKOFF_MULT: number;
				public getCurrentTimeout(): number;
				public retry(param0: com.android.volley.VolleyError): void;
				public constructor(param0: number, param1: number, param2: number);
				public getCurrentRetryCount(): number;
				public getBackoffMultiplier(): number;
				public hasAttemptRemaining(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export class ExecutorDelivery extends com.android.volley.ResponseDelivery {
				public static class: java.lang.Class<com.android.volley.ExecutorDelivery>;
				public constructor(param0: globalAndroid.os.Handler);
				public postResponse(param0: com.android.volley.Request<any>, param1: com.android.volley.Response<any>, param2: java.lang.Runnable): void;
				public constructor(param0: java.util.concurrent.Executor);
				public postError(param0: com.android.volley.Request<any>, param1: com.android.volley.VolleyError): void;
				public postResponse(param0: com.android.volley.Request<any>, param1: com.android.volley.Response<any>): void;
			}
			export module ExecutorDelivery {
				export class ResponseDeliveryRunnable {
					public static class: java.lang.Class<com.android.volley.ExecutorDelivery.ResponseDeliveryRunnable>;
					public constructor(param0: com.android.volley.Request<any>, param1: com.android.volley.Response<any>, param2: java.lang.Runnable);
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export class Header {
				public static class: java.lang.Class<com.android.volley.Header>;
				public hashCode(): number;
				public getValue(): string;
				public equals(param0: any): boolean;
				public getName(): string;
				public toString(): string;
				public constructor(param0: string, param1: string);
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export class Network {
				public static class: java.lang.Class<com.android.volley.Network>;
				/**
				 * Constructs a new instance of the com.android.volley.Network interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					performRequest(param0: com.android.volley.Request<any>): com.android.volley.NetworkResponse;
				});
				public constructor();
				public performRequest(param0: com.android.volley.Request<any>): com.android.volley.NetworkResponse;
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export class NetworkDispatcher {
				public static class: java.lang.Class<com.android.volley.NetworkDispatcher>;
				public quit(): void;
				public run(): void;
				public constructor(param0: java.util.concurrent.BlockingQueue<com.android.volley.Request<any>>, param1: com.android.volley.Network, param2: com.android.volley.Cache, param3: com.android.volley.ResponseDelivery);
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export class NetworkError extends com.android.volley.VolleyError {
				public static class: java.lang.Class<com.android.volley.NetworkError>;
				public constructor(param0: com.android.volley.NetworkResponse);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export class NetworkResponse {
				public static class: java.lang.Class<com.android.volley.NetworkResponse>;
				public statusCode: number;
				public data: native.Array<number>;
				public headers: java.util.Map<string,string>;
				public allHeaders: java.util.List<com.android.volley.Header>;
				public notModified: boolean;
				public networkTimeMs: number;
				public constructor(param0: native.Array<number>);
				public constructor(param0: native.Array<number>, param1: java.util.Map<string,string>);
				public constructor(param0: number, param1: native.Array<number>, param2: java.util.Map<string,string>, param3: boolean, param4: number);
				public constructor(param0: number, param1: native.Array<number>, param2: java.util.Map<string,string>, param3: boolean);
				public constructor(param0: number, param1: native.Array<number>, param2: boolean, param3: number, param4: java.util.List<com.android.volley.Header>);
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export class NoConnectionError extends com.android.volley.NetworkError {
				public static class: java.lang.Class<com.android.volley.NoConnectionError>;
				public constructor(param0: com.android.volley.NetworkResponse);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export class ParseError extends com.android.volley.VolleyError {
				public static class: java.lang.Class<com.android.volley.ParseError>;
				public constructor(param0: com.android.volley.NetworkResponse);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export abstract class Request<T>  extends java.lang.Comparable<com.android.volley.Request<any>> {
				public static class: java.lang.Class<com.android.volley.Request<any>>;
				public getErrorListener(): com.android.volley.Response.ErrorListener;
				public setCacheEntry(param0: com.android.volley.Cache.Entry): com.android.volley.Request<any>;
				public parseNetworkResponse(param0: com.android.volley.NetworkResponse): com.android.volley.Response<any>;
				public getSequence(): number;
				public getPostBody(): native.Array<number>;
				public getTrafficStatsTag(): number;
				public setShouldCache(param0: boolean): com.android.volley.Request<any>;
				public getPostParamsEncoding(): string;
				public compareTo(param0: com.android.volley.Request<any>): number;
				public setShouldRetryServerErrors(param0: boolean): com.android.volley.Request<any>;
				public getCacheKey(): string;
				public constructor(param0: string, param1: com.android.volley.Response.ErrorListener);
				public constructor(param0: number, param1: string, param2: com.android.volley.Response.ErrorListener);
				public isCanceled(): boolean;
				public getPostParams(): java.util.Map<string,string>;
				public getMethod(): number;
				public getCacheEntry(): com.android.volley.Cache.Entry;
				public getRetryPolicy(): com.android.volley.RetryPolicy;
				public getTag(): any;
				public setRetryPolicy(param0: com.android.volley.RetryPolicy): com.android.volley.Request<any>;
				public cancel(): void;
				public deliverResponse(param0: any): void;
				public setRequestQueue(param0: com.android.volley.RequestQueue): com.android.volley.Request<any>;
				public markDelivered(): void;
				public getParams(): java.util.Map<string,string>;
				public getTimeoutMs(): number;
				public getBody(): native.Array<number>;
				public getBodyContentType(): string;
				public getUrl(): string;
				public setSequence(param0: number): com.android.volley.Request<any>;
				public getPostBodyContentType(): string;
				public toString(): string;
				public setTag(param0: any): com.android.volley.Request<any>;
				public getParamsEncoding(): string;
				public parseNetworkError(param0: com.android.volley.VolleyError): com.android.volley.VolleyError;
				public deliverError(param0: com.android.volley.VolleyError): void;
				public hasHadResponseDelivered(): boolean;
				public shouldCache(): boolean;
				public getHeaders(): java.util.Map<string,string>;
				public addMarker(param0: string): void;
				public shouldRetryServerErrors(): boolean;
				public getPriority(): com.android.volley.Request.Priority;
			}
			export module Request {
				export class Method {
					public static class: java.lang.Class<com.android.volley.Request.Method>;
					/**
					 * Constructs a new instance of the com.android.volley.Request$Method interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static DEPRECATED_GET_OR_POST: number;
					public static OPTIONS: number;
					public static PUT: number;
					public static PATCH: number;
					public static HEAD: number;
					public static TRACE: number;
					public static DELETE: number;
					public static POST: number;
					public static GET: number;
				}
				export class NetworkRequestCompleteListener {
					public static class: java.lang.Class<com.android.volley.Request.NetworkRequestCompleteListener>;
					/**
					 * Constructs a new instance of the com.android.volley.Request$NetworkRequestCompleteListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResponseReceived(param0: com.android.volley.Request<any>, param1: com.android.volley.Response<any>): void;
						onNoUsableResponseReceived(param0: com.android.volley.Request<any>): void;
					});
					public constructor();
					public onResponseReceived(param0: com.android.volley.Request<any>, param1: com.android.volley.Response<any>): void;
					public onNoUsableResponseReceived(param0: com.android.volley.Request<any>): void;
				}
				export class Priority {
					public static class: java.lang.Class<com.android.volley.Request.Priority>;
					public static LOW: com.android.volley.Request.Priority;
					public static NORMAL: com.android.volley.Request.Priority;
					public static HIGH: com.android.volley.Request.Priority;
					public static IMMEDIATE: com.android.volley.Request.Priority;
					public static valueOf(param0: string): com.android.volley.Request.Priority;
					public static values(): native.Array<com.android.volley.Request.Priority>;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export class RequestQueue {
				public static class: java.lang.Class<com.android.volley.RequestQueue>;
				public getCache(): com.android.volley.Cache;
				public removeRequestFinishedListener(param0: com.android.volley.RequestQueue.RequestFinishedListener<any>): void;
				public stop(): void;
				public add(param0: com.android.volley.Request<any>): com.android.volley.Request<any>;
				public addRequestFinishedListener(param0: com.android.volley.RequestQueue.RequestFinishedListener<any>): void;
				public cancelAll(param0: com.android.volley.RequestQueue.RequestFilter): void;
				public constructor(param0: com.android.volley.Cache, param1: com.android.volley.Network, param2: number, param3: com.android.volley.ResponseDelivery);
				public constructor(param0: com.android.volley.Cache, param1: com.android.volley.Network, param2: number);
				public start(): void;
				public constructor(param0: com.android.volley.Cache, param1: com.android.volley.Network);
				public getSequenceNumber(): number;
				public cancelAll(param0: any): void;
			}
			export module RequestQueue {
				export class RequestFilter {
					public static class: java.lang.Class<com.android.volley.RequestQueue.RequestFilter>;
					/**
					 * Constructs a new instance of the com.android.volley.RequestQueue$RequestFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						apply(param0: com.android.volley.Request<any>): boolean;
					});
					public constructor();
					public apply(param0: com.android.volley.Request<any>): boolean;
				}
				export class RequestFinishedListener<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.android.volley.RequestQueue.RequestFinishedListener<any>>;
					/**
					 * Constructs a new instance of the com.android.volley.RequestQueue$RequestFinishedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onRequestFinished(param0: com.android.volley.Request<T>): void;
					});
					public constructor();
					public onRequestFinished(param0: com.android.volley.Request<T>): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export class Response<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.android.volley.Response<any>>;
				public result: T;
				public cacheEntry: com.android.volley.Cache.Entry;
				public intermediate: boolean;
				public isSuccess(): boolean;
				public static success(param0: any, param1: com.android.volley.Cache.Entry): com.android.volley.Response<any>;
				public static error(param0: com.android.volley.VolleyError): com.android.volley.Response<any>;
			}
			export module Response {
				export class ErrorListener {
					public static class: java.lang.Class<com.android.volley.Response.ErrorListener>;
					/**
					 * Constructs a new instance of the com.android.volley.Response$ErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onErrorResponse(param0: com.android.volley.VolleyError): void;
					});
					public constructor();
					public onErrorResponse(param0: com.android.volley.VolleyError): void;
				}
				export class Listener<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.android.volley.Response.Listener<any>>;
					/**
					 * Constructs a new instance of the com.android.volley.Response$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResponse(param0: T): void;
					});
					public constructor();
					public onResponse(param0: T): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export class ResponseDelivery {
				public static class: java.lang.Class<com.android.volley.ResponseDelivery>;
				/**
				 * Constructs a new instance of the com.android.volley.ResponseDelivery interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					postResponse(param0: com.android.volley.Request<any>, param1: com.android.volley.Response<any>): void;
					postResponse(param0: com.android.volley.Request<any>, param1: com.android.volley.Response<any>, param2: java.lang.Runnable): void;
					postError(param0: com.android.volley.Request<any>, param1: com.android.volley.VolleyError): void;
				});
				public constructor();
				public postResponse(param0: com.android.volley.Request<any>, param1: com.android.volley.Response<any>, param2: java.lang.Runnable): void;
				public postError(param0: com.android.volley.Request<any>, param1: com.android.volley.VolleyError): void;
				public postResponse(param0: com.android.volley.Request<any>, param1: com.android.volley.Response<any>): void;
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export class RetryPolicy {
				public static class: java.lang.Class<com.android.volley.RetryPolicy>;
				/**
				 * Constructs a new instance of the com.android.volley.RetryPolicy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getCurrentTimeout(): number;
					getCurrentRetryCount(): number;
					retry(param0: com.android.volley.VolleyError): void;
				});
				public constructor();
				public getCurrentTimeout(): number;
				public retry(param0: com.android.volley.VolleyError): void;
				public getCurrentRetryCount(): number;
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export class ServerError extends com.android.volley.VolleyError {
				public static class: java.lang.Class<com.android.volley.ServerError>;
				public constructor(param0: com.android.volley.NetworkResponse);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export class TimeoutError extends com.android.volley.VolleyError {
				public static class: java.lang.Class<com.android.volley.TimeoutError>;
				public constructor(param0: com.android.volley.NetworkResponse);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export class VolleyError {
				public static class: java.lang.Class<com.android.volley.VolleyError>;
				public networkResponse: com.android.volley.NetworkResponse;
				public constructor(param0: com.android.volley.NetworkResponse);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public getNetworkTimeMs(): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export class VolleyLog {
				public static class: java.lang.Class<com.android.volley.VolleyLog>;
				public static TAG: string;
				public static DEBUG: boolean;
				public static e(param0: java.lang.Throwable, param1: string, param2: native.Array<any>): void;
				public static e(param0: string, param1: native.Array<any>): void;
				public static wtf(param0: java.lang.Throwable, param1: string, param2: native.Array<any>): void;
				public static v(param0: string, param1: native.Array<any>): void;
				public static wtf(param0: string, param1: native.Array<any>): void;
				public static setTag(param0: string): void;
				public static d(param0: string, param1: native.Array<any>): void;
				public constructor();
			}
			export module VolleyLog {
				export class MarkerLog {
					public static class: java.lang.Class<com.android.volley.VolleyLog.MarkerLog>;
					public static ENABLED: boolean;
					public finish(param0: string): void;
					public finalize(): void;
					public add(param0: string, param1: number): void;
				}
				export module MarkerLog {
					export class Marker {
						public static class: java.lang.Class<com.android.volley.VolleyLog.MarkerLog.Marker>;
						public name: string;
						public thread: number;
						public time: number;
						public constructor(param0: string, param1: number, param2: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export class AdaptedHttpStack extends com.android.volley.toolbox.BaseHttpStack {
					public static class: java.lang.Class<com.android.volley.toolbox.AdaptedHttpStack>;
					public performRequest(param0: com.android.volley.Request<any>, param1: java.util.Map<string,string>): org.apache.http.HttpResponse;
					public executeRequest(param0: com.android.volley.Request<any>, param1: java.util.Map<string,string>): com.android.volley.toolbox.HttpResponse;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export class AndroidAuthenticator extends com.android.volley.toolbox.Authenticator {
					public static class: java.lang.Class<com.android.volley.toolbox.AndroidAuthenticator>;
					public invalidateAuthToken(param0: string): void;
					public getAuthToken(): string;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.accounts.Account, param2: string);
					public getAccount(): globalAndroid.accounts.Account;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.accounts.Account, param2: string, param3: boolean);
					public getAuthTokenType(): string;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export class Authenticator {
					public static class: java.lang.Class<com.android.volley.toolbox.Authenticator>;
					/**
					 * Constructs a new instance of the com.android.volley.toolbox.Authenticator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAuthToken(): string;
						invalidateAuthToken(param0: string): void;
					});
					public constructor();
					public invalidateAuthToken(param0: string): void;
					public getAuthToken(): string;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export abstract class BaseHttpStack extends com.android.volley.toolbox.HttpStack {
					public static class: java.lang.Class<com.android.volley.toolbox.BaseHttpStack>;
					public constructor();
					public performRequest(param0: com.android.volley.Request<any>, param1: java.util.Map<string,string>): org.apache.http.HttpResponse;
					public executeRequest(param0: com.android.volley.Request<any>, param1: java.util.Map<string,string>): com.android.volley.toolbox.HttpResponse;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export class BasicNetwork extends com.android.volley.Network {
					public static class: java.lang.Class<com.android.volley.toolbox.BasicNetwork>;
					public static DEBUG: boolean;
					public mHttpStack: com.android.volley.toolbox.HttpStack;
					public mPool: com.android.volley.toolbox.ByteArrayPool;
					public static convertHeaders(param0: native.Array<com.android.volley.Header>): java.util.Map<string,string>;
					public constructor(param0: com.android.volley.toolbox.BaseHttpStack);
					public constructor(param0: com.android.volley.toolbox.BaseHttpStack, param1: com.android.volley.toolbox.ByteArrayPool);
					public logError(param0: string, param1: string, param2: number): void;
					public constructor(param0: com.android.volley.toolbox.HttpStack, param1: com.android.volley.toolbox.ByteArrayPool);
					public constructor(param0: com.android.volley.toolbox.HttpStack);
					public performRequest(param0: com.android.volley.Request<any>): com.android.volley.NetworkResponse;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export class ByteArrayPool {
					public static class: java.lang.Class<com.android.volley.toolbox.ByteArrayPool>;
					public static BUF_COMPARATOR: java.util.Comparator<native.Array<number>>;
					public getBuf(param0: number): native.Array<number>;
					public constructor(param0: number);
					public returnBuf(param0: native.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export class ClearCacheRequest extends com.android.volley.Request<any> {
					public static class: java.lang.Class<com.android.volley.toolbox.ClearCacheRequest>;
					public constructor(param0: com.android.volley.Cache, param1: java.lang.Runnable);
					public deliverResponse(param0: any): void;
					public constructor(param0: string, param1: com.android.volley.Response.ErrorListener);
					public constructor(param0: number, param1: string, param2: com.android.volley.Response.ErrorListener);
					public parseNetworkResponse(param0: com.android.volley.NetworkResponse): com.android.volley.Response<any>;
					public getPriority(): com.android.volley.Request.Priority;
					public isCanceled(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export class DiskBasedCache extends com.android.volley.Cache {
					public static class: java.lang.Class<com.android.volley.toolbox.DiskBasedCache>;
					public remove(param0: string): void;
					public get(param0: string): com.android.volley.Cache.Entry;
					public constructor(param0: java.io.File, param1: number);
					public clear(): void;
					public getFileForKey(param0: string): java.io.File;
					public put(param0: string, param1: com.android.volley.Cache.Entry): void;
					public invalidate(param0: string, param1: boolean): void;
					public constructor(param0: java.io.File);
					public initialize(): void;
				}
				export module DiskBasedCache {
					export class CacheHeader {
						public static class: java.lang.Class<com.android.volley.toolbox.DiskBasedCache.CacheHeader>;
					}
					export class CountingInputStream {
						public static class: java.lang.Class<com.android.volley.toolbox.DiskBasedCache.CountingInputStream>;
						public read(): number;
						public read(param0: native.Array<number>, param1: number, param2: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export class HttpClientStack extends com.android.volley.toolbox.HttpStack {
					public static class: java.lang.Class<com.android.volley.toolbox.HttpClientStack>;
					public mClient: org.apache.http.client.HttpClient;
					public onPrepareRequest(param0: org.apache.http.client.methods.HttpUriRequest): void;
					public constructor(param0: org.apache.http.client.HttpClient);
					public performRequest(param0: com.android.volley.Request<any>, param1: java.util.Map<string,string>): org.apache.http.HttpResponse;
				}
				export module HttpClientStack {
					export class HttpPatch {
						public static class: java.lang.Class<com.android.volley.toolbox.HttpClientStack.HttpPatch>;
						public static METHOD_NAME: string;
						public constructor();
						public getMethod(): string;
						public constructor(param0: java.net.URI);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export class HttpHeaderParser {
					public static class: java.lang.Class<com.android.volley.toolbox.HttpHeaderParser>;
					public static parseDateAsEpoch(param0: string): number;
					public constructor();
					public static parseCharset(param0: java.util.Map<string,string>, param1: string): string;
					public static parseCacheHeaders(param0: com.android.volley.NetworkResponse): com.android.volley.Cache.Entry;
					public static parseCharset(param0: java.util.Map<string,string>): string;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export class HttpResponse {
					public static class: java.lang.Class<com.android.volley.toolbox.HttpResponse>;
					public getStatusCode(): number;
					public constructor(param0: number, param1: java.util.List<com.android.volley.Header>);
					public getContent(): java.io.InputStream;
					public constructor(param0: number, param1: java.util.List<com.android.volley.Header>, param2: number, param3: java.io.InputStream);
					public getHeaders(): java.util.List<com.android.volley.Header>;
					public getContentLength(): number;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export class HttpStack {
					public static class: java.lang.Class<com.android.volley.toolbox.HttpStack>;
					/**
					 * Constructs a new instance of the com.android.volley.toolbox.HttpStack interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						performRequest(param0: com.android.volley.Request<any>, param1: java.util.Map<string,string>): org.apache.http.HttpResponse;
					});
					public constructor();
					public performRequest(param0: com.android.volley.Request<any>, param1: java.util.Map<string,string>): org.apache.http.HttpResponse;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export class HurlStack extends com.android.volley.toolbox.BaseHttpStack {
					public static class: java.lang.Class<com.android.volley.toolbox.HurlStack>;
					public constructor();
					public constructor(param0: com.android.volley.toolbox.HurlStack.UrlRewriter, param1: javax.net.ssl.SSLSocketFactory);
					public createConnection(param0: java.net.URL): java.net.HttpURLConnection;
					public constructor(param0: com.android.volley.toolbox.HurlStack.UrlRewriter);
					public performRequest(param0: com.android.volley.Request<any>, param1: java.util.Map<string,string>): org.apache.http.HttpResponse;
					public executeRequest(param0: com.android.volley.Request<any>, param1: java.util.Map<string,string>): com.android.volley.toolbox.HttpResponse;
				}
				export module HurlStack {
					export class UrlConnectionInputStream {
						public static class: java.lang.Class<com.android.volley.toolbox.HurlStack.UrlConnectionInputStream>;
						public close(): void;
					}
					export class UrlRewriter {
						public static class: java.lang.Class<com.android.volley.toolbox.HurlStack.UrlRewriter>;
						/**
						 * Constructs a new instance of the com.android.volley.toolbox.HurlStack$UrlRewriter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							rewriteUrl(param0: string): string;
						});
						public constructor();
						public rewriteUrl(param0: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export class ImageLoader {
					public static class: java.lang.Class<com.android.volley.toolbox.ImageLoader>;
					public onGetImageSuccess(param0: string, param1: globalAndroid.graphics.Bitmap): void;
					public isCached(param0: string, param1: number, param2: number, param3: globalAndroid.widget.ImageView.ScaleType): boolean;
					public get(param0: string, param1: com.android.volley.toolbox.ImageLoader.ImageListener, param2: number, param3: number, param4: globalAndroid.widget.ImageView.ScaleType): com.android.volley.toolbox.ImageLoader.ImageContainer;
					public onGetImageError(param0: string, param1: com.android.volley.VolleyError): void;
					public get(param0: string, param1: com.android.volley.toolbox.ImageLoader.ImageListener): com.android.volley.toolbox.ImageLoader.ImageContainer;
					public static getImageListener(param0: globalAndroid.widget.ImageView, param1: number, param2: number): com.android.volley.toolbox.ImageLoader.ImageListener;
					public setBatchedResponseDelay(param0: number): void;
					public makeImageRequest(param0: string, param1: number, param2: number, param3: globalAndroid.widget.ImageView.ScaleType, param4: string): com.android.volley.Request<globalAndroid.graphics.Bitmap>;
					public constructor(param0: com.android.volley.RequestQueue, param1: com.android.volley.toolbox.ImageLoader.ImageCache);
					public isCached(param0: string, param1: number, param2: number): boolean;
					public get(param0: string, param1: com.android.volley.toolbox.ImageLoader.ImageListener, param2: number, param3: number): com.android.volley.toolbox.ImageLoader.ImageContainer;
				}
				export module ImageLoader {
					export class BatchedImageRequest {
						public static class: java.lang.Class<com.android.volley.toolbox.ImageLoader.BatchedImageRequest>;
						public constructor(param0: com.android.volley.Request<any>, param1: com.android.volley.toolbox.ImageLoader.ImageContainer);
						public setError(param0: com.android.volley.VolleyError): void;
						public addContainer(param0: com.android.volley.toolbox.ImageLoader.ImageContainer): void;
						public removeContainerAndCancelIfNecessary(param0: com.android.volley.toolbox.ImageLoader.ImageContainer): boolean;
						public getError(): com.android.volley.VolleyError;
					}
					export class ImageCache {
						public static class: java.lang.Class<com.android.volley.toolbox.ImageLoader.ImageCache>;
						/**
						 * Constructs a new instance of the com.android.volley.toolbox.ImageLoader$ImageCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getBitmap(param0: string): globalAndroid.graphics.Bitmap;
							putBitmap(param0: string, param1: globalAndroid.graphics.Bitmap): void;
						});
						public constructor();
						public getBitmap(param0: string): globalAndroid.graphics.Bitmap;
						public putBitmap(param0: string, param1: globalAndroid.graphics.Bitmap): void;
					}
					export class ImageContainer {
						public static class: java.lang.Class<com.android.volley.toolbox.ImageLoader.ImageContainer>;
						public getRequestUrl(): string;
						public constructor(param0: com.android.volley.toolbox.ImageLoader, param1: globalAndroid.graphics.Bitmap, param2: string, param3: string, param4: com.android.volley.toolbox.ImageLoader.ImageListener);
						public getBitmap(): globalAndroid.graphics.Bitmap;
						public cancelRequest(): void;
					}
					export class ImageListener extends com.android.volley.Response.ErrorListener {
						public static class: java.lang.Class<com.android.volley.toolbox.ImageLoader.ImageListener>;
						/**
						 * Constructs a new instance of the com.android.volley.toolbox.ImageLoader$ImageListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onResponse(param0: com.android.volley.toolbox.ImageLoader.ImageContainer, param1: boolean): void;
							onErrorResponse(param0: com.android.volley.VolleyError): void;
						});
						public constructor();
						public onResponse(param0: com.android.volley.toolbox.ImageLoader.ImageContainer, param1: boolean): void;
						public onErrorResponse(param0: com.android.volley.VolleyError): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export class ImageRequest extends com.android.volley.Request<globalAndroid.graphics.Bitmap> {
					public static class: java.lang.Class<com.android.volley.toolbox.ImageRequest>;
					public static DEFAULT_IMAGE_TIMEOUT_MS: number;
					public static DEFAULT_IMAGE_MAX_RETRIES: number;
					public static DEFAULT_IMAGE_BACKOFF_MULT: number;
					public parseNetworkResponse(param0: com.android.volley.NetworkResponse): com.android.volley.Response<globalAndroid.graphics.Bitmap>;
					public deliverResponse(param0: any): void;
					public constructor(param0: string, param1: com.android.volley.Response.ErrorListener);
					public deliverResponse(param0: globalAndroid.graphics.Bitmap): void;
					public constructor(param0: number, param1: string, param2: com.android.volley.Response.ErrorListener);
					public parseNetworkResponse(param0: com.android.volley.NetworkResponse): com.android.volley.Response<any>;
					public cancel(): void;
					public constructor(param0: string, param1: com.android.volley.Response.Listener<globalAndroid.graphics.Bitmap>, param2: number, param3: number, param4: globalAndroid.widget.ImageView.ScaleType, param5: globalAndroid.graphics.Bitmap.Config, param6: com.android.volley.Response.ErrorListener);
					public getPriority(): com.android.volley.Request.Priority;
					public constructor(param0: string, param1: com.android.volley.Response.Listener<globalAndroid.graphics.Bitmap>, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap.Config, param5: com.android.volley.Response.ErrorListener);
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export class JsonArrayRequest extends com.android.volley.toolbox.JsonRequest<org.json.JSONArray> {
					public static class: java.lang.Class<com.android.volley.toolbox.JsonArrayRequest>;
					public constructor(param0: number, param1: string, param2: org.json.JSONArray, param3: com.android.volley.Response.Listener<org.json.JSONArray>, param4: com.android.volley.Response.ErrorListener);
					public constructor(param0: string, param1: string, param2: com.android.volley.Response.Listener<any>, param3: com.android.volley.Response.ErrorListener);
					public constructor(param0: string, param1: com.android.volley.Response.ErrorListener);
					public constructor(param0: number, param1: string, param2: string, param3: com.android.volley.Response.Listener<any>, param4: com.android.volley.Response.ErrorListener);
					public constructor(param0: number, param1: string, param2: com.android.volley.Response.ErrorListener);
					public parseNetworkResponse(param0: com.android.volley.NetworkResponse): com.android.volley.Response<any>;
					public constructor(param0: string, param1: com.android.volley.Response.Listener<org.json.JSONArray>, param2: com.android.volley.Response.ErrorListener);
					public parseNetworkResponse(param0: com.android.volley.NetworkResponse): com.android.volley.Response<org.json.JSONArray>;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export class JsonObjectRequest extends com.android.volley.toolbox.JsonRequest<org.json.JSONObject> {
					public static class: java.lang.Class<com.android.volley.toolbox.JsonObjectRequest>;
					public constructor(param0: number, param1: string, param2: org.json.JSONObject, param3: com.android.volley.Response.Listener<org.json.JSONObject>, param4: com.android.volley.Response.ErrorListener);
					public constructor(param0: string, param1: string, param2: com.android.volley.Response.Listener<any>, param3: com.android.volley.Response.ErrorListener);
					public constructor(param0: string, param1: com.android.volley.Response.ErrorListener);
					public constructor(param0: number, param1: string, param2: string, param3: com.android.volley.Response.Listener<any>, param4: com.android.volley.Response.ErrorListener);
					public constructor(param0: number, param1: string, param2: com.android.volley.Response.ErrorListener);
					public parseNetworkResponse(param0: com.android.volley.NetworkResponse): com.android.volley.Response<any>;
					public constructor(param0: string, param1: org.json.JSONObject, param2: com.android.volley.Response.Listener<org.json.JSONObject>, param3: com.android.volley.Response.ErrorListener);
					public parseNetworkResponse(param0: com.android.volley.NetworkResponse): com.android.volley.Response<org.json.JSONObject>;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export abstract class JsonRequest<T>  extends com.android.volley.Request<any> {
					public static class: java.lang.Class<com.android.volley.toolbox.JsonRequest<any>>;
					public static PROTOCOL_CHARSET: string;
					public getPostBody(): native.Array<number>;
					public getBodyContentType(): string;
					public getBody(): native.Array<number>;
					public deliverResponse(param0: any): void;
					public constructor(param0: string, param1: com.android.volley.Response.ErrorListener);
					public constructor(param0: string, param1: string, param2: com.android.volley.Response.Listener<any>, param3: com.android.volley.Response.ErrorListener);
					public constructor(param0: number, param1: string, param2: string, param3: com.android.volley.Response.Listener<any>, param4: com.android.volley.Response.ErrorListener);
					public constructor(param0: number, param1: string, param2: com.android.volley.Response.ErrorListener);
					public cancel(): void;
					public parseNetworkResponse(param0: com.android.volley.NetworkResponse): com.android.volley.Response<any>;
					public getPostBodyContentType(): string;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export class NetworkImageView {
					public static class: java.lang.Class<com.android.volley.toolbox.NetworkImageView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onDetachedFromWindow(): void;
					public setDefaultImageResId(param0: number): void;
					public setErrorImageResId(param0: number): void;
					public setImageUrl(param0: string, param1: com.android.volley.toolbox.ImageLoader): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public drawableStateChanged(): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export class NoCache extends com.android.volley.Cache {
					public static class: java.lang.Class<com.android.volley.toolbox.NoCache>;
					public remove(param0: string): void;
					public get(param0: string): com.android.volley.Cache.Entry;
					public constructor();
					public clear(): void;
					public put(param0: string, param1: com.android.volley.Cache.Entry): void;
					public invalidate(param0: string, param1: boolean): void;
					public initialize(): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export class PoolingByteArrayOutputStream {
					public static class: java.lang.Class<com.android.volley.toolbox.PoolingByteArrayOutputStream>;
					public write(param0: native.Array<number>, param1: number, param2: number): void;
					public finalize(): void;
					public close(): void;
					public constructor(param0: com.android.volley.toolbox.ByteArrayPool);
					public constructor(param0: com.android.volley.toolbox.ByteArrayPool, param1: number);
					public write(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export class RequestFuture<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.android.volley.toolbox.RequestFuture<any>>;
					public get(param0: number, param1: java.util.concurrent.TimeUnit): T;
					public onErrorResponse(param0: com.android.volley.VolleyError): void;
					public isDone(): boolean;
					public isCancelled(): boolean;
					public onResponse(param0: T): void;
					public static newFuture(): com.android.volley.toolbox.RequestFuture<any>;
					public cancel(param0: boolean): boolean;
					public setRequest(param0: com.android.volley.Request<any>): void;
					public get(): T;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export class StringRequest extends com.android.volley.Request<string> {
					public static class: java.lang.Class<com.android.volley.toolbox.StringRequest>;
					public constructor(param0: string, param1: com.android.volley.Response.Listener<string>, param2: com.android.volley.Response.ErrorListener);
					public parseNetworkResponse(param0: com.android.volley.NetworkResponse): com.android.volley.Response<string>;
					public deliverResponse(param0: any): void;
					public constructor(param0: string, param1: com.android.volley.Response.ErrorListener);
					public constructor(param0: number, param1: string, param2: com.android.volley.Response.Listener<string>, param3: com.android.volley.Response.ErrorListener);
					public constructor(param0: number, param1: string, param2: com.android.volley.Response.ErrorListener);
					public cancel(): void;
					public parseNetworkResponse(param0: com.android.volley.NetworkResponse): com.android.volley.Response<any>;
					public deliverResponse(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export class Threads {
					public static class: java.lang.Class<com.android.volley.toolbox.Threads>;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module volley {
			export module toolbox {
				export class Volley {
					public static class: java.lang.Class<com.android.volley.toolbox.Volley>;
					public static newRequestQueue(param0: globalAndroid.content.Context, param1: com.android.volley.toolbox.HttpStack): com.android.volley.RequestQueue;
					public constructor();
					public static newRequestQueue(param0: globalAndroid.content.Context, param1: com.android.volley.toolbox.BaseHttpStack): com.android.volley.RequestQueue;
					public static newRequestQueue(param0: globalAndroid.content.Context): com.android.volley.RequestQueue;
				}
			}
		}
	}
}

//Generics information:
//com.android.volley.Request:1
//com.android.volley.RequestQueue.RequestFinishedListener:1
//com.android.volley.Response:1
//com.android.volley.Response.Listener:1
//com.android.volley.toolbox.JsonRequest:1
//com.android.volley.toolbox.RequestFuture:1

class MyAuthListener extends com.linkedin.platform.listeners.AuthListener {

	constructor(){
		super();
	}

	public onAuthSuccess() : void {
		let context = app.android.context;
		console.log("ON EST AUTHENTIFIÉ ");
		alert(com.linkedin.platform.LISessionManager.getInstance(context).getSession().getAccessToken());
	}

	public onAuthError(error : com.linkedin.platform.errors.LIAuthError) : void {
		console.log("Erreur !");
	}
}


export class LinkedinConnect extends Common {

	constructor(){
		super();
		let context = app.android.context;
		//com.linkedin.platform.LISessionManager.getInstance(context).init(context, LinkedinConnect.buildScope(), new MyAuthListener(), true);
	}

	private static buildScope() : com.linkedin.platform.utils.Scope {
		return com.linkedin.platform.utils.Scope.build(new Array(com.linkedin.platform.utils.Scope.R_BASICPROFILE, com.linkedin.platform.utils.Scope.R_EMAILADDRESS));
	}
}


