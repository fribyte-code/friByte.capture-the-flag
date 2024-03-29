﻿using Microsoft.Extensions.Internal;

namespace friByte.capture_the_flag.service.Services
{
    /// <summary>
    /// The purpose of this service is to check if users are trying to bruteforce the task.
    /// </summary>
    public interface IBruteforceCheckerService
    {
        bool IsWithinBruteforceTimeout(string teamName, Guid taskId);
    }

    /// <summary>
    /// This class needs to be injected as a singleton
    /// </summary>
    public class BruteforceCheckerService : IBruteforceCheckerService
    {
        private readonly TimeSpan _bruteForceTimeout = TimeSpan.FromSeconds(3);
        private readonly Dictionary<(string, Guid), DateTimeOffset> _taskAttemptDict = new Dictionary<(string, Guid), DateTimeOffset>();
        /// <summary>
        /// The clock is dependency inject in order to enable unit testing without waiting for actual time to pass
        /// </summary>
        private readonly ISystemClock _clock;

        public BruteforceCheckerService(ISystemClock clock)
        {
            _clock = clock;
        }

        public bool IsWithinBruteforceTimeout(string teamName, Guid taskId)
        {
            var hasBeenAttempted = _taskAttemptDict.TryGetValue((teamName, taskId), out var lastAttempt);

            if (hasBeenAttempted && (_clock.UtcNow - lastAttempt) < _bruteForceTimeout)
            {
                // Is bruteforce
                return true;
            }
            // Only set last attempt when not bruteforce to avoid setting off yet another timeout period if they attempt again after _bruteForceTimeout - 1s
            _taskAttemptDict[(teamName, taskId)] = _clock.UtcNow;

            return false;
        }
    }

}
